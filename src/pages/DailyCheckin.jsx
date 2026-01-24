import { useState } from "react";
import CheckinForm from "../components/health/CheckinForm";
import SignalIndicator from "../components/health/SignalIndicator";
import { calculateFatigueLevel } from "../utils/fatigue";

const DailyCheckin = () => {
  const [latestCheckin, setLatestCheckin] = useState(null);

  const handleCheckin = (checkin) => {
    setLatestCheckin(checkin);
  };

  const fatigueLevel = latestCheckin
    ? calculateFatigueLevel(latestCheckin)
    : null;

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">
        Daily Body Check-in
      </h1>

      <CheckinForm onSubmit={handleCheckin} />

      {fatigueLevel && (
        <SignalIndicator level={fatigueLevel} />
      )}
    </section>
  );
};

export default DailyCheckin;
