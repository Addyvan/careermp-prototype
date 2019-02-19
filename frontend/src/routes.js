// Layout Types
import DefaultLayout from "./layouts/Default";

// Route Views
import Home from "./views/Home";
import Feed from "./views/Feed";
import Job from "./views/Job";
import JobOwner from "./views/JobOwner";


export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: Home
  },
  {
    path: "/feed",
    layout: DefaultLayout,
    component: Feed
  },
  {
    path: "/j/:id",
    layout: DefaultLayout,
    component: Job
  },
  {
    path: "/jo/:id",
    layout: DefaultLayout,
    component: JobOwner
  }
];