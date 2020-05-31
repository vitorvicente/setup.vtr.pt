import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { withStyles } from "@material-ui/styles";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import "../styles/main.css";

const styles = {
  series: {
    padding: "100px 0 100px 0",
  },
  box: {
	padding: "30px",
	position: "relative",
	overflow: "hidden",
	borderRadius: "10px",
	margin: "0 10px 40px 10px",
	background: "#fff",
	border: "1px solid #e6e6e6",
	boxShadow: "0 10px 29px 0 rgba(68, 88, 144, 0.1)",
	transition: "all 0.3s ease-in-out",
	"&:hover": {
      '-webkit-transform': 'translateY(-5px)',
	  transform: 'translateY(-5px)'
	},
  },
  title: {
	marginLeft: "40px",
	fontWeight: "700",
	marginBottom: "15px",
	fontSize: "18px",
    "& a": {
	  color: "#111",
	  "&:hover": {
		color: "#007bff",
		textDecoration: "none",
	  },
    },
  },
  description: {
	fontSize: "14px",
	marginLeft: "40px",
	lineHeight: "24px",
	marginBottom: "0px",
  },
};



const Videos = ({classes}) => (
  <div className={classes.series}>
	<section>
      <Container>
		
        <Row>
		
          <Col>
            <div className={classes.box}>
              <h4 className={classes.title}><a>Desktop</a></h4>
              <p className={classes.description}><strong>GPU:</strong> Asus STRIX GTX 980</p>
			  <p className={classes.description}><strong>Motherboard:</strong> Asus X99-A</p>
			  <p className={classes.description}><strong>CPU:</strong> Intel® Core™ i7-5820K Processor</p>
			  <p className={classes.description}><strong>Storage:</strong> 512GB Samsung 850 Pro SSD + 1TB HDD</p>
			  <p className={classes.description}><strong>RAM:</strong> 16GB DDR4-2133 CL14 (4x4)</p>
            </div>
          </Col>
          <Col>
            <div className={classes.box}>
              <h4 className={classes.title}><a>Gaming Laptop</a></h4>
              <p className={classes.description}><strong>Display:</strong> 15.6" IPS-Level 144Hz</p>
			  <p className={classes.description}><strong>GPU:</strong> NVIDIA GeForce RTX2080 8G GDDR6</p>
			  <p className={classes.description}><strong>CPU:</strong>  Intel Core i7-8750H 2.2 - 4.1GHz</p>
			  <p className={classes.description}><strong>Storage:</strong> 512GB NVMe SSD + 1TB HDD</p>
			  <p className={classes.description}><strong>RAM:</strong> 16GB DDR4 2666MHz</p>
            </div>
          </Col>

        </Row>
		
        <Row>
		
          <Col>
            <div className={classes.box}>
              <h4 className={classes.title}><a>Monitors</a></h4>
              <p className={classes.description}><strong>Desktop Displays:</strong> x3 Asus VC239H Ecran PC LED 23" 1920 x 1080 5ms</p>
			  <p className={classes.description}><strong>Laptop External Display:</strong> x1 Acer SB220Q bi 21.5 inches Full HD</p>
            </div>
          </Col>
          <Col>
            <div className={classes.box}>
              <h4 className={classes.title}><a>Periferals</a></h4>
              <p className={classes.description}><strong>Mouse:</strong> Razer DeathAdder Elite</p>
			  <p className={classes.description}><strong>Keyboard:</strong> Razer BlackWidow Chroma V2 Green Switches</p>
			  <p className={classes.description}><strong>Mousepad:</strong> Razer Goliathus Chroma</p>
            </div>
          </Col>

        </Row>
		
        <Row>
		
          <Col>
            <div className={classes.box}>
              <h4 className={classes.title}><a>Audio Gear</a></h4>
              <p className={classes.description}><strong>Headset:</strong> Astro A50 Wireless Headset</p>
			  <p className={classes.description}><strong>Mic:</strong> Antlion Audio ModMic Wireless</p>
			  <p className={classes.description}><strong>Lavalier Mic:</strong> Purple Panda Lavalier Mic</p>
            </div>
          </Col>
          <Col>
            <div className={classes.box}>
              <h4 className={classes.title}><a>Camera Gear</a></h4>
              <p className={classes.description}><strong>Webcam:</strong> Logitech - HD Webcam C920s</p>
			  <p className={classes.description}><strong>Camera:</strong> Sony A5100 16-50mm</p>
			  <p className={classes.description}><strong>GoPro:</strong> HERO5 Session Action Camera</p>
            </div>
          </Col>

        </Row>
		
        <Row>
		
          <Col>
            <div className={classes.box}>
              <h4 className={classes.title}><a>Other Recording Periferals</a></h4>
              <p className={classes.description}>Elgato Stream Deck 15 Keys</p>
			  <p className={classes.description}>Elgato Game Capture HD</p>
            </div>
          </Col>
          <Col>
            <div className={classes.box}>
              <h4 className={classes.title}><a>Other Tech Gear</a></h4>
              <p className={classes.description}>Surface Pro 7</p>
			  <p className={classes.description}>Samsung Galaxy S8+</p>
            </div>
          </Col>

        </Row>
		
		

      </Container>
	</section>
  </div>
);

export default withStyles(styles)(Videos);
