// Layout Types
import DefaultLayout from "./layouts/Default";

// Route containers
import Home from "./containers/Home";
import UserFeed from "./containers/UserFeed";
import Job from "./containers/Job";
import JobOwner from "./containers/JobOwner";
import RecruiterFeed from "./containers/RecruiterFeed";
import OnBoarding from "./containers/OnBoarding";
import SavedJobs from "./containers/SavedJobs";
import Stats from "./containers/Stats";
import CreateJob1 from "./containers/CreateJob1";
import CreateJob2 from "./containers/CreateJob2";

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
    path: "/createjob2/:id",
    layout: DefaultLayout,
    component: CreateJob2
  },
  {
    path: "/createjob1",
    layout: DefaultLayout,
    component: CreateJob1
  },
  {
    path: "/savedjobs/:id",
    layout: DefaultLayout,
    component: SavedJobs
  },
  {
    path: "/j/:id",
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