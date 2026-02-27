export const calculateFatigueLevel = ({
  energy,
  sleep,
  soreness,
  mentalFatigue,
}) => {
  const score =
    Number(energy) +
    Number(sleep) -
    Number(soreness) -
    Number(mentalFatigue);

  if (score <= 2) return "high";
  if (score <= 5) return "medium";
  return "low";
};
