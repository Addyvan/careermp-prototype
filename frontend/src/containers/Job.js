import React from "react";
import JobFullDataProvider from "../data/job/JobFull";

import JobOverview from "../components/job/JobOverview";

const Job = ({ match }) => (
  <JobFullDataProvider id={match.params.id}>
    <JobOverview />
  </JobFullDataProvider>
);

export default Job;