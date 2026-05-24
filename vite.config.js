import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { Buffer } from "node:buffer";
import process from "node:process";

function fatsecretProxyPlugin(env) {
  let cachedToken = null;
  let tokenExpiryMs = 0;

  async function getAccessToken() {
    const clientId = env.FATSECRET_CLIENT_ID || process.env.FATSECRET_CLIENT_ID;
    const clientSecret =
      env.FATSECRET_CLIENT_SECRET || process.env.FATSECRET_CLIENT_SECRET;
    const scope = env.FATSECRET_SCOPE || process.env.FATSECRET_SCOPE || "basic";

    if (!clientId || !clientSecret) {
      throw new Error(
        "Missing FATSECRET_CLIENT_ID or FATSECRET_CLIENT_SECRET in environment.",
      );
    }

    if (cachedToken && Date.now() < tokenExpiryMs - 60_000) {
      return cachedToken;
    }

    const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
    const response = await fetch("https://oauth.fatsecret.com/connect/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        scope,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Token request failed: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    cachedToken = data.access_token;
    tokenExpiryMs = Date.now() + (data.expires_in || 3600) * 1000;
    return cachedToken;
  }

  async function handleSearch(req, res) {
    const token = await getAccessToken();
    const url = new URL(req.url || "", "http://localhost");
    const query = url.searchParams.get("query") || "";
    const page = url.searchParams.get("page") || "0";

    const apiUrl = new URL("https://platform.fatsecret.com/rest/foods/search/v1");
    apiUrl.searchParams.set("search_expression", query);
    apiUrl.searchParams.set("max_results", "12");
    apiUrl.searchParams.set("page_number", page);
    apiUrl.searchParams.set("format", "json");

    const apiResponse = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const payloadText = await apiResponse.text();
    let payload;
    try {
      payload = JSON.parse(payloadText);
    } catch {
      payload = null;
    }

    if (payload?.error) {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 502;
      res.end(
        JSON.stringify({
          message: payload.error.message || "FatSecret returned an error",
          code: payload.error.code || null,
        }),
      );
      return;
    }

    res.setHeader("Content-Type", "application/json");
    res.statusCode = apiResponse.ok ? 200 : apiResponse.status;
    res.end(payloadText);
  }

  async function handleFoodById(req, res) {
    const token = await getAccessToken();
    const match = (req.url || "").match(/\/api\/fatsecret\/food\/([^/?]+)/);
    const foodId = match?.[1];

    if (!foodId) {
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Missing food id." }));
      return;
    }

    const apiUrl = new URL("https://platform.fatsecret.com/rest/food/v1");
    apiUrl.searchParams.set("food_id", foodId);
    apiUrl.searchParams.set("format", "json");

    const apiResponse = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const payloadText = await apiResponse.text();
    let payload;
    try {
      payload = JSON.parse(payloadText);
    } catch {
      payload = null;
    }

    if (payload?.error) {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 502;
      res.end(
        JSON.stringify({
          message: payload.error.message || "FatSecret returned an error",
          code: payload.error.code || null,
        }),
      );
      return;
    }

    res.setHeader("Content-Type", "application/json");
    res.statusCode = apiResponse.ok ? 200 : apiResponse.status;
    res.end(payloadText);
  }

  function attach(server) {
    server.middlewares.use(async (req, res, next) => {
      try {
        if ((req.url || "").startsWith("/api/fatsecret/search")) {
          await handleSearch(req, res);
          return;
        }
        if ((req.url || "").startsWith("/api/fatsecret/food/")) {
          await handleFoodById(req, res);
          return;
        }
        next();
      } catch (error) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.end(
          JSON.stringify({
            error: "FatSecret proxy error",
            message: error instanceof Error ? error.message : "Unknown error",
          }),
        );
      }
    });
  }

  return {
    name: "fatsecret-proxy",
    configureServer(server) {
      attach(server);
    },
    configurePreviewServer(server) {
      attach(server);
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), tailwindcss(), fatsecretProxyPlugin(env)],
  };
});
