import React from "react";

const WorkoutForm = () => {
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!exercise || !sets || !reps || !weight) {
      alert("Please fill in all required fields.");
      return;
    }
    onAddWorkout({
      id: Date.now(),
      exercise,
      sets: Number(sets),
      reps: Number(reps),
      weight: Number(weight),
      notes,
      date: new Date().toISOString().split("T")[0],
    });
    setExercise("");
    setSets("");
    setReps("");
    setWeight("");
    setNotes("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow space-y-4"
    >
      <h2 className="text-lg font-semibold">Log Workout</h2>
      <input
        type="text"
        placeholder="Exercise (e.g. Bench Press)"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        className="w-full px-3py-2 border rounded"
      />

      <div className="grid grid-cols-3 gap-3">
        <input
          type="number"
          placeholder="Sets"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <input
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="border rounded px-3 py-2"
        />
      </div>
      <textarea 
      placeholder="Notes (Optional)"
      value={notes}
      onChange={(e) => setNotes(e.target.value)}
        className="w-full px-3 py-2 border rounded"/>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Workout</button>
    </form>
  );
};

export default WorkoutForm;
