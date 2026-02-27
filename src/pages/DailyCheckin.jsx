import { useState } from "react";
import CheckinForm from "../components/health/CheckinForm";
import SignalIndicator from "../components/health/SignalIndicator";

const DailyCheckin = ({ setCheckins }) => {
  const [latest, setLatest] = useState(null);

  const handleCheckin = (checkin) => {
    setCheckins((prev) => [checkin, ...prev]);
    setLatest(checkin);
  };

  return (
    <>
      <CheckinForm onSubmit={handleCheckin} />
      {latest && <SignalIndicator level={latest.fatigueLevel} />}
    </>
  );
};

export default DailyCheckin;
