const styles = {
  Push: "border-green-500 text-green-700",
  Maintain: "border-blue-500 text-blue-700",
  Adjust: "border-yellow-500 text-yellow-700",
  Recover: "border-red-500 text-red-700",
};

const NextActionCard = ({ recommendation }) => {
  return (
    <div
      className={`bg-white p-5 rounded-lg shadow border-l-4 ${
        styles[recommendation.action]
      }`}
    >
      <h3 className="text-lg font-semibold mb-1">
        Next Action: {recommendation.action}
      </h3>
      <p className="text-gray-600">
        {recommendation.message}
      </p>
    </div>
  );
};

export default NextActionCard;
