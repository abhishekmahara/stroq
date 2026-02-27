const colors = {
  Push: "border-green-500",
  Maintain: "border-yellow-500",
  Recover: "border-red-500",
};

const NextActionCard = ({ recommendation }) => {
  return (
    <div
      className={`border-l-4 p-4 bg-white shadow rounded ${colors[recommendation.action]}`}
    >
      <h3 className="text-lg font-semibold">
        Next Action: {recommendation.action}
      </h3>
      <p className="text-gray-600 mt-1">
        {recommendation.message}
      </p>
    </div>
  );
};

export default NextActionCard;
