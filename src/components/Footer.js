import React from "react";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faYoutube,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";
import { withStyles } from "@material-ui/styles";

const styles = {
  footer: {
    backgroundColor: "#004a99",
    textAlign: "center",
	paddingTop: "20px",
	paddingBottom: "20px",
  },
  footerIcon: {
    color: "white",
    fontSize: "75px",
    transition: "all .3s linear",
    paddingLeft: "5px",
    paddingRight: "5px",
	paddingTop: "10px",
    "&:hover": {
      color: "#ecf5ff",
      "-webkit-transform": "translateY(-5px)",
      transform: "translateY(-5px)",
      transition: "all .3s linear",
    },
  },
  footerLinks: {
    paddingBottom: "20px",
    paddingTop: "10px",
  },
  footerCopyright: {
	backgroundColor: "#00428a",
    textAlign: "center",
    paddingTop: "25px",
	"& p": {
	  color: "#fff",
	  fontWeight: "600",
	},
  },
};

const Footer = ({classes}) => (
	<div>
      
	  <div className={classes.footer}>
        <Container>
		  <Row> 
            
			<Col className={classes.footerLinks}>
              <span>
                <a href="http://yt.vtr.pt">
                  <FontAwesomeIcon
                    className={classes.footerIcon}
                    icon={faYoutube}
                  />
                </a>
              </span>
              <span>
                <a href="http://fb.vtr.pt">
                  <FontAwesomeIcon
                    className={classes.footerIcon}
                    icon={faFacebookSquare}
                  />
                </a>
              </span>
              <span>
                <a href="http://twitch.vtr.pt">
                  <FontAwesomeIcon
                    className={classes.footerIcon}
                    icon={faTwitch}
                  />
                </a>
              </span>
			  <span>
                <a href="http://twitter.vtr.pt">
                  <FontAwesomeIcon
                    className={classes.footerIcon}
                    icon={faTwitterSquare}
                  />
                </a>
              </span>
			  <span>
                <a href="http://yt2.vtr.pt">
                  <FontAwesomeIcon
                    className={classes.footerIcon}
                    icon={faYoutube}
                  />
                </a>
              </span>
            </Col>
          
		  </Row>
	    </Container>
	  </div>
	  
	  <div className={classes.footerCopyright}>
		<Container>
		  <Row>
		  
		    <Col>
              <p>Copyright &copy; Grandmen123</p>
            </Col>
		  
		  </Row>
		</Container>
      </div>
	  
	</div>
);

export default withStyles(styles)(Footer);
