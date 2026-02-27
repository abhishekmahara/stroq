import { useState } from "react";
import NutritionForm from "../components/health/NutritionForm";
import NutritionList from "../components/health/NutritionList";

const Nutrition = () => {
  const [meals, setMeals] = useState([]);

  const addMeal = (meal) => {
    setMeals((prev) => [meal, ...prev]);
  };

  return (
    <>
      <NutritionForm onAddMeal={addMeal} />
      <NutritionList meals={meals} />
    </>
  );
};

export default Nutrition;
