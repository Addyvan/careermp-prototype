import React from "react";
import PropTypes from "prop-types";

import JobSnapshot from "./JobSnapshot";
import JobSnapshotDataProvider from "../../data/job/JobSnapshot";

class JobFeed extends React.Component {
  render() {
    return(
      <div>
        {
          this.props.job_ids.map((id) => (
            
            <JobSnapshotDataProvider key={id} id={id}>
              <JobSnapshot key={id} />
            </JobSnapshotDataProvider>
            
          ))
        }
      </div>
    );
  }
}

JobFeed.propTypes = {
  job_ids: PropTypes.array.isRequired
};

export default JobFeed;