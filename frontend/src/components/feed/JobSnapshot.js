import React from "react";

import {
  Card,
  CardTitle,
  CardSubtitle
} from "reactstrap";

class JobSnapshot extends React.Component {
  render() {
    return(
      <a style={{color: "black", textDecoration: "none"}} href={"/j/" + this.props.data.job.id}>
        <Card style={{margin: "20px", padding: "5px"}} >
          <CardTitle>{this.props.data.job.name}</CardTitle>
          <CardSubtitle>Posted: {new Date(this.props.data.job.createdAt).toString().substr(0,10)}</CardSubtitle>
          <CardSubtitle>{(this.props.data.job.location) ? this.props.data.job.location : "location"}</CardSubtitle>
        </Card>
      </a>
    );
  }
}

export default JobSnapshot;