import React from "react";
import { Row, Col, Button } from "reactstrap";

import { I18n } from "react-i18next";

import LanguageToggle from "../design-system/LanguageToggle";

class NavBar extends React.Component {
  render() {
    return(
      <I18n ns={["translation"]}>
        {
          (t, { i18n }) => (
            <Row style={{paddingBottom: "5px", margin: "0px"}} className="oadw-nav">
              <Col lg="3" md="4" sm="12" className="logo" style={{padding: "0px"}} >
                <a style={{color: "black", textDecoration: "none"}} href="/"><h1 style={{margin: "0px"}}>{t("title")} <div style={{fontSize: "9px"}}>({t("tech")})</div></h1></a>
              </Col>
              <Col lg="9" md="8" sm="12" style={{padding: "5px"}} >
                <Row>
                  <Col lg="7" md="7" sm="5" />
                  <Col lg="3" md="3" sm="3">
                    {this.props.children}
                  </Col>
                  <Col lg="1" md="1" sm="2" >
                    <Button href="/stats" color="link"> Stats</Button>
                  </Col>
                  <Col lg="1" md="1" sm="2" >
                    <LanguageToggle i18n={ i18n }/>
                  </Col>
                </Row>
              </Col>
            </Row>
          )
        }
      </I18n>
    );
  }
}

export default NavBar;