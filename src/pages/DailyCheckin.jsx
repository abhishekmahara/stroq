import CheckinForm from "../components/health/CheckinForm";
import SignalIndicator from "../components/health/SignalIndicator";

const DailyCheckin = ({ setCheckins }) => {
  const handleCheckin = (checkin) => {
    setCheckins((prev) => [checkin, ...prev]);
  };

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">
        Daily Body Check-in
      </h1>

      <CheckinForm onSubmit={handleCheckin} />
    </section>
  );
};

export default DailyCheckin;
