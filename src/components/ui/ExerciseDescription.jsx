import { useState } from "react";

function ExerciseDescription({ exercise }) {
  const [showMore, setShowMore] = useState(false);

  const parts = exercise.description?.split("___") || [];

  const visibleParts = showMore ? parts : parts.slice(0, 1);

  return (
    <div className="flex flex-col gap-2 mt-3">

      {visibleParts.map((val, index) => (
        <p key={index} className="text-sm text-gray-300 leading-relaxed">
          {val}
        </p>
      ))}

      {parts.length > 1 && (
        <button
          onClick={() => setShowMore(prev => !prev)}
          className="text-white text-sm font-semibold hover:text-orange-500 transition w-fit"
        >
          {showMore ? "Show Less ↑" : "Read More ↓"}
        </button>
      )}

    </div>
  );
}

export default ExerciseDescription;