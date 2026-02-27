import { useState } from "react";
import { calculateFatigueLevel } from "../../utils/fatigue";

const CheckinForm = ({ onSubmit }) => {
  const [energy, setEnergy] = useState(3);
  const [sleep, setSleep] = useState(3);
  const [soreness, setSoreness] = useState(3);
  const [mentalFatigue, setMentalFatigue] = useState(3);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkin = {
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      energy,
      sleep,
      soreness,
      mentalFatigue,
    };

    checkin.fatigueLevel = calculateFatigueLevel(checkin);

    onSubmit(checkin);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label>
        Energy
        <input type="range" min="1" max="5" value={energy}
          onChange={(e) => setEnergy(e.target.value)} />
      </label>

      <label>
        Sleep
        <input type="range" min="1" max="5" value={sleep}
          onChange={(e) => setSleep(e.target.value)} />
      </label>

      <label>
        Soreness
        <input type="range" min="1" max="5" value={soreness}
          onChange={(e) => setSoreness(e.target.value)} />
      </label>

      <label>
        Mental Fatigue
        <input type="range" min="1" max="5" value={mentalFatigue}
          onChange={(e) => setMentalFatigue(e.target.value)} />
      </label>

      <button className="bg-green-600 text-white px-4 py-2">
        Submit Check-in
      </button>
    </form>
  );
};

export default CheckinForm;
