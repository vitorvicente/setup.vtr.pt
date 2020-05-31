import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { withStyles } from "@material-ui/styles";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import img from "../assets/header.jpg";
import "../styles/main.css";

const styles = {
  overlay: {
	marginRight: "0px",
	height:"100%",
	width:"100%",
	backgroundColor:"#212529",
	opacity:".5",
  },
  masthead: {
    marginBottom: "50px",
    background: "no-repeat center center",
    backgroundColor: "#868e96",
    backgroundAttachment: "scroll",
    position: "relative",
    backgroundSize: "cover",
    backgroundImage: `url(${img})`,
  },
  mastheadSiteHeading: {
	textAlign: "center",
    padding: "200px 0 150px",
    color: "#fff",
    "@media only screen and (min-width:768px)": {
      padding: "200px 0!important",
    },
	"& h1": {
	  fontSize:"50px",
	  marginTop:0,
	  "@media only screen and (min-width:768px)": {
	    fontSize: "80px !important",
	  },
	},
  },
};



const Header = ({classes}) => (
    <div className={classes.masthead}>
	  <div className={classes.overlay} />
      <Container>
        <Row>
          <Col>
            <div className={classes.mastheadSiteHeading}>
			  <h1>Setup</h1>
			</div>
          </Col>
        </Row>
      </Container>
    </div>
);

export default withStyles(styles)(Header);
