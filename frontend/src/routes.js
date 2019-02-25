// Layout Types
import DefaultLayout from "./layouts/Default";

// Route Views
import Home from "./views/Home";
import UserFeed from "./views/UserFeed";
import Job from "./views/Job";
import JobOwner from "./views/JobOwner";
import RecruiterFeed from "./views/RecruiterFeed";
import OnBoarding from "./views/OnBoarding";
import SavedJobs from "./views/SavedJobs";
import Stats from "./views/Stats";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: Home
  },
  {
    path: "/onboarding",
    layout: DefaultLayout,
    component: OnBoarding
  },
  {
    path: "/userfeed",
    layout: DefaultLayout,
    component: UserFeed
  },
  {
    path: "/recruiterfeed",
    layout: DefaultLayout,
    component: RecruiterFeed
  },
  {
    path: "/savedjobs/:id",
    layout: DefaultLayout,
    component: SavedJobs
  },
  {
    path: "/u/:id",
    layout: DefaultLayout,
    component: Job
  },
  {
    path: "/r/:id",
    layout: DefaultLayout,
    component: JobOwner
  },
  {
    path: "/stats",
    layout: DefaultLayout,
    component: Stats
  }
];