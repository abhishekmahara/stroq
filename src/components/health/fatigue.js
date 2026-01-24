export const calculateFatigueLevel = (checkin) => {
  let score = 0;

  if (checkin.energy === "low") score += 2;
  if (checkin.sleep === "poor") score += 2;
  if (checkin.soreness) score += 2;
  if (checkin.mentalFatigue === "high") score += 2;

  if (score >= 6) return "high";
  if (score >= 3) return "medium";
  return "low";
};
