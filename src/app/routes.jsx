import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import WorkoutLog from "../pages/WorkoutLog";
import DailyCheckin from "../pages/DailyCheckin";
import Nutrition from "../pages/Nutrition";
import Progress from "../pages/Progress";

const AppRoutes = ({
  workouts,
  setWorkouts,
  checkins,
  setCheckins,
  recommendation,
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Dashboard
            workouts={workouts}
            checkins={checkins}
            recommendation={recommendation}
          />
        }
      />

      <Route
        path="/workouts"
        element={
          <WorkoutLog
            workouts={workouts}
            setWorkouts={setWorkouts}
          />
        }
      />

      <Route
        path="/checkin"
        element={
          <DailyCheckin
            setCheckins={setCheckins}
          />
        }
      />

      <Route path="/nutrition" element={<Nutrition />} />
      <Route path="/progress" element={<Progress />} />
    </Routes>
  );
};

export default AppRoutes;
