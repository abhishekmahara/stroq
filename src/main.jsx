import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { NutritionProvider } from "./providers/NutritionProvider.jsx";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NutritionProvider>
      <App />
    </NutritionProvider>
  </BrowserRouter>
);
