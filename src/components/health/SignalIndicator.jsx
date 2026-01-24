const levels = {
  low: {
    label: "Low fatigue",
    color: "text-green-600",
  },
  medium: {
    label: "Moderate fatigue",
    color: "text-yellow-600",
  },
  high: {
    label: "High fatigue",
    color: "text-red-600",
  },
};

const SignalIndicator = ({ level }) => {
  const config = levels[level];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold mb-1">Fatigue Status</h3>
      <p className={`font-medium ${config.color}`}>
        {config.label}
      </p>
    </div>
  );
};

export default SignalIndicator;
