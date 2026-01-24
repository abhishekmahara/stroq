export const formatWorkoutDate = (dateString) => {
  const date = new Date(dateString);

  const day = date.toLocaleDateString("en-IN", {
    weekday: "long",
  });

  const fullDate = date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return `${day} • ${fullDate}`;
};
