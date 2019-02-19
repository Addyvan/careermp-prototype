import React from "react";
import PropTypes from "prop-types";

import JobSnapshot from "../feed/JobSnapshot";
import JobSnapshotDataProvider from "../../data/job/JobSnapshot";

class SimilarJobsByViews extends React.Component {
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

SimilarJobsByViews.propTypes = {
  job_ids: PropTypes.array.isRequired
};

export default SimilarJobsByViews;