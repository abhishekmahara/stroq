import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { NutritionProvider } from "./components/context/NutritionProvider.jsx";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <NutritionProvider>
    <App />
  </NutritionProvider>
  </BrowserRouter>,
);
