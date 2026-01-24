import NextActionCard from "../components/cards/NextActionCard";

const Dashboard = ({ workouts, checkins, recommendation }) => {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <NextActionCard recommendation={recommendation} />

      <div className="bg-white p-4 rounded shadow text-sm text-gray-600">
        <p>Workouts logged: {workouts.length}</p>
        <p>Check-ins recorded: {checkins.length}</p>
      </div>
    </section>
  );
};

export default Dashboard;
