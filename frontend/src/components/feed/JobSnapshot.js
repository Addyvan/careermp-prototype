import React from "react";

import {
  Card,
  CardTitle,
  CardSubtitle,
  CardBody
} from "reactstrap";

class JobSnapshot extends React.Component {
  render() {
    console.log(this.props);
    return(
      <a style={{color: "black", textDecoration: "none"}} href={"/j/" + this.props.data.job.id}>
        <Card style={{margin: "20px", padding: "5px"}} >
          <CardTitle>{this.props.data.job.name}</CardTitle>
          <CardSubtitle>Posted: {new Date(this.props.data.job.createdAt).toString().substr(0,10)}</CardSubtitle>
          <CardBody>{(this.props.data.job.description) ? this.props.data.job.description : "description"}</CardBody>
        </Card>
      </a>
    );
  }
}

export default JobSnapshot;