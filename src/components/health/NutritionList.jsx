const NutritionList = ({ meals }) => {
  if (meals.length === 0) {
    return <p className="text-gray-500 italic">No meals logged today.</p>;
  }

  return (
    <div className="space-y-2">
      {meals.map((m) => (
        <div key={m.id} className="border p-3">
          <p className="font-medium">{m.name}</p>
          <p className="text-sm text-gray-600">
            Quality: {m.quality}/5
          </p>
        </div>
      ))}
    </div>
  );
};

export default NutritionList;
