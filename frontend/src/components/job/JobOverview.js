import React from "react";

import {
  Row,
  Col,
  Button
} from "reactstrap";

import SimilarJobsByViews from "./SimilarJobsByViews";
import SimilarJobsByContent from "./SimilarJobsByContent";

class JobOverview extends React.Component {
  render() {
    return(
      <div>
        <Row style={{marginTop: "15px"}} >
          <Col lg="8" md="8" className="career-feed">
            <h1>{this.props.data.job.name}</h1>
            <h6>{new Date(this.props.data.job.createdAt).toString().substr(0,10)}</h6>
            <hr></hr>
            <p>{(this.props.data.job.description) ? this.props.data.job.description : "The description should be showing here but there is none for this posting as of right now"}</p>
          </Col>
          <Col lg="4" md="4" style={{marginTop: "12px"}}>
            <b style={{paddingLeft: "10px"}}>People also viewed</b>
            <hr></hr>
            <SimilarJobsByViews job_ids={["cjsap8ooy001v08859fd5em1p"]} />
          </Col>
          <Col lg="4" md="4" className="career-feed">
            <b>Skills Requested</b>
            <hr></hr>
          </Col>
          <Col lg="4" md="4" style={{paddingRight: "0px"}}>
            <div className="career-feed" style={{paddingRight: "0px", marginRight: "0px", paddingBottom: "20px"}}>
              <b style={{paddingLeft: "15px"}}>Most Applicants have these skills</b>
              <hr></hr>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="8" md="8" >
            <b>Similar Job Postings</b>
            <hr></hr>
            <SimilarJobsByContent style={{margin: "0px", padding: "0px", width: "100%"}} job_ids={["cjsap8ooy001v08859fd5em1p", "cjsap8ooy001v08859fd5em1p", "cjsap8ooy001v08859fd5em1p", "cjsap8ooy001v08859fd5em1p"]} />
            <div className="float-center" style={{paddingLeft: "45%", paddingBottom: "25px"}}>
              <Button color="primary">See more</Button>
            </div>
          </Col>
          <Col lg="4" md="4"></Col>
        </Row>
      </div>
    );
  }
}

export default JobOverview;