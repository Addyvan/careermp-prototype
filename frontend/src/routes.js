import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import DefaultLayout from "./layouts/Default";

// Route Views
import Feed from "./views/Feed";


export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/feed" />
  },
  {
    path: "/feed",
    layout: DefaultLayout,
    component: Feed
  }
];