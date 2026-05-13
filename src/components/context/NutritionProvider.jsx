import { createContext, useContext, useState } from "react";

const NutritionContext = createContext();

export const useNutrition = () => {
  const context = useContext(NutritionContext);

  if (!context) {
    throw new Error("useNutrition must be used within NutritionProvider");
  }

  return context;
};

export const NutritionProvider = ({ children }) => {
  const [nutrition, setNutrition] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_NUTRITION_API_KEY;

  const fetchNutrition = async (food) => {
    if (!food) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/guessNutrition?title=${food}&apiKey=${API_KEY}`
      );

      const data = await res.json();

      if (data.status === "failure") {
        throw new Error(data.message);
      }

      setNutrition(data);
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