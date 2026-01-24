export const getNextAction = ({
  performanceTrend,
  fatigueLevel,
}) => {
  if (fatigueLevel === "high") {
    return {
      action: "Recover",
      message:
        "Fatigue is high. Prioritize recovery and reduce training intensity.",
    };
  }

  if (performanceTrend === "improving" && fatigueLevel === "low") {
    return {
      action: "Push",
      message:
        "Your body is responding well. You can safely increase intensity.",
    };
  }

  if (performanceTrend === "improving" && fatigueLevel === "medium") {
    return {
      action: "Maintain",
      message:
        "Progress is good, but fatigue is building. Maintain current load.",
    };
  }

  if (performanceTrend === "stagnant") {
    return {
      action: "Adjust",
      message:
        "Progress has stalled. Consider changing reps, sets, or tempo.",
    };
  }

  return {
    action: "Recover",
    message:
      "Performance is dropping. Focus on rest and recovery.",
  };
};
