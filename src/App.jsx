import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { loadState, saveState } from "./utils/storage";


import Layout from "./app/layout";
import AppRoutes from "./app/routes";

import { getNextAction } from "./utils/recommendation";
import { getPerformanceTrend } from "./utils/performance";

const App = () => {

  const persisted = loadState();

const [workouts, setWorkouts] = useState(
  persisted?.workouts || []
);

const [checkins, setCheckins] = useState(
  persisted?.checkins || []
);

 

  // Latest fatigue level
  const latestCheckin = checkins[0];
  const fatigueLevel = latestCheckin
    ? latestCheckin.fatigueLevel
    : "medium";

  // Performance trend
  const performanceTrend = getPerformanceTrend(workouts);

  // Recommendation
  const recommendation = getNextAction({
    performanceTrend,
    fatigueLevel,
  });

  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes
          workouts={workouts}
          setWorkouts={setWorkouts}
          checkins={checkins}
          setCheckins={setCheckins}
          recommendation={recommendation}
        />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
