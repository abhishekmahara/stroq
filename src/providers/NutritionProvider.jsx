import { useState } from "react";
import { NutritionContext } from "./nutritionContext";

export const NutritionProvider = ({ children }) => {
  const [nutrition, setNutrition] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_NUTRITION_API_KEY;

  function getNutrient(food, nutrientIds, fallbackNames = []) {
    const nutrients = food.foodNutrients || [];

    const nutrient = nutrients.find((item) => {
      const id = Number(item.nutrientId);
      const name = String(item.nutrientName || "").toLowerCase();

      return (
        nutrientIds.includes(id) ||
        fallbackNames.some((fallback) => name.includes(fallback))
      );
    });

    return {
      value: Number(nutrient?.value) || 0,
      unit: nutrient?.unitName || "",
    };
  }

  function normalizeUsdaFood(food) {
    return {
      name:
        food.description ||
        food.lowercaseDescription ||
        food.brandName ||
        "Food item",
      fdcId: food.fdcId,
      brandName: food.brandName,
      dataType: food.dataType,
      servingSize: food.servingSize,
      servingSizeUnit: food.servingSizeUnit,
      calories: getNutrient(food, [1008], ["energy"]),
      protein: getNutrient(food, [1003], ["protein"]),
      fat: getNutrient(food, [1004], ["total lipid", "fat"]),
      carbs: getNutrient(food, [1005], ["carbohydrate"]),
      source: "USDA FoodData Central",
    };
  }

  const fetchNutrition = async (food) => {
    if (!food) return;

    setLoading(true);
    setError(null);

    try {
      if (!API_KEY) {
        throw new Error("Missing USDA nutrition API key");
      }

      const query = encodeURIComponent(food.trim());
      const response = await fetch(
        `https://api.nal.usda.gov/fdc/v1/foods/search?query=${query}&api_key=${API_KEY}`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to fetch nutrition data");
      }

      const firstFood = data.foods?.[0];

      if (!firstFood) {
        throw new Error("No nutrition data found for this food");
      }

      setNutrition(normalizeUsdaFood(firstFood));
    } catch (err) {
      setError(err.message || "Something went wrong");
      setNutrition(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <NutritionContext.Provider
      value={{ nutrition, loading, error, fetchNutrition }}
    >
      {children}
    </NutritionContext.Provider>
  );
};
