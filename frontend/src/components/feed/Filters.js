import React from "react";
import PropTypes from "prop-types";

class Filters extends React.Component {
  render() {
    return(
      <div style={{paddingTop: "6px"}}>
        <a href={"/savedjobs/:" + this.props.gcID}>My Saved Jobs</a> | <a href="/onboarding">Edit My Career Information</a>
      </div>
    );
  }
}

Filters.propTypes = {
  gcID: PropTypes.string.isRequired
}

export default Filters;