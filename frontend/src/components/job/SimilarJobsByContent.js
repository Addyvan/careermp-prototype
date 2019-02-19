import React from "react";
import PropTypes from "prop-types";

import JobSnapshot from "../feed/JobSnapshot";
import JobSnapshotDataProvider from "../../data/job/JobSnapshot";

import {
  CardColumns
} from "reactstrap";

class SimilarJobsByContent extends React.Component {
  render() {
    return(
      <CardColumns>
        {
          this.props.job_ids.map((id) => (
              <JobSnapshotDataProvider key={id} id={id}>
                <JobSnapshot key={id} />
              </JobSnapshotDataProvider>

          ))
        }
      </CardColumns>
    );
  }
}

SimilarJobsByContent.propTypes = {
  job_ids: PropTypes.array.isRequired
};

export default SimilarJobsByContent;