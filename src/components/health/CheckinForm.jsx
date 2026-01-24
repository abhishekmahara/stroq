import { useState } from "react";

const CheckinForm = ({ onSubmit }) => {
  const [energy, setEnergy] = useState("normal");
  const [sleep, setSleep] = useState("okay");
  const [soreness, setSoreness] = useState(false);
  const [mentalFatigue, setMentalFatigue] = useState("low");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      energy,
      sleep,
      soreness,
      mentalFatigue,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow space-y-4"
    >
      <h2 className="text-lg font-semibold">Daily Check-in</h2>

      {/* Energy */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Energy Level
        </label>
        <select
          value={energy}
          onChange={(e) => setEnergy(e.target.value)}
          className="w-full border rounded px-3 py-2"
        >
          <option value="low">Low</option>
          <option value="normal">Normal</option>
          <option value="high">High</option>
        </select>
      </div>

      {/* Sleep */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Sleep Quality
        </label>
        <select
          value={sleep}
          onChange={(e) => setSleep(e.target.value)}
          className="w-full border rounded px-3 py-2"
        >
          <option value="poor">Poor</option>
          <option value="okay">Okay</option>
          <option value="good">Good</option>
        </select>
      </div>

      {/* Soreness */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={soreness}
          onChange={(e) => setSoreness(e.target.checked)}
        />
        <label className="text-sm font-medium">
          Body feels sore
        </label>
      </div>

      {/* Mental fatigue */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Mental Fatigue
        </label>
        <select
          value={mentalFatigue}
          onChange={(e) => setMentalFatigue(e.target.value)}
          className="w-full border rounded px-3 py-2"
        >
          <option value="low">Low</option>
          <option value="high">High</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Check-in
      </button>
    </form>
  );
};

export default CheckinForm;
