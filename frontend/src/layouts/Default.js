import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";

import Footer from "../components/layout/Footer";

const DefaultLayout = ({ children, noFooter }) => (
  
  <Container className="flex-grow-1">
    <Row style={{height: "100%"}}>
      <Col
        lg="12"
        md="12"
        sm="12"
        className="flex-grow-1"
      >
        {children}
        {!noFooter && <Footer />}
      </Col>
    </Row>
  </Container>
  
);

DefaultLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

DefaultLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default DefaultLayout;