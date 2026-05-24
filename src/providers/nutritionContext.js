import { createContext, useContext } from "react";

export const NutritionContext = createContext();

export const useNutrition = () => {
  const context = useContext(NutritionContext);

  if (!context) {
    throw new Error("useNutrition must be used within NutritionProvider");
  }

  return context;
};
