import { useState } from "react";

const NutritionForm = ({ onAddMeal }) => {
  const [name, setName] = useState("");
  const [quality, setQuality] = useState(3);

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddMeal({
      id: Date.now(),
      name,
      quality: Number(quality),
      date: new Date().toISOString().split("T")[0],
    });

    setName("");
    setQuality(3);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Meal name"
        className="border p-2 w-full"
        required
      />

      <label className="block">
        Quality (1–5)
        <input
          type="range"
          min="1"
          max="5"
          value={quality}
          onChange={(e) => setQuality(e.target.value)}
        />
      </label>

      <button className="bg-green-600 text-white px-4 py-2">
        Add Meal
      </button>
    </form>
  );
};

export default NutritionForm;
