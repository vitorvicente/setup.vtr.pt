import React, { useState, useEffect } from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { withFirebase } from "vtr-react-components/dist/Firebase";
import { VtrHeader } from "vtr-react-components/dist/VtrHeader";
import { VtrFooter } from "vtr-react-components/dist/VtrFooter";

import { getDoc } from "firebase/firestore";

const StyledCard = styled.div`
	text-align: center;
	position: relative;
	overflow: hidden;
	border-radius: 5px;
	margin: 0 10px 40px 10px;
	box-shadow: 0 10px 29px 0 rgba(68, 88, 144, 0.1);
	transition: all 0.3s ease-in-out;
	&:hover {
	    -webkit-transform: translateY(-5px);
		transform: translateY(-5px);

		
		& h3 {
			color: #007bff;
			padding-bottom: 20px;
			padding-top: 20px;
		}
	}

	
	& h3 {
		padding-bottom: 20px;
		padding-top: 20px;
	}
	
	& h4 {
		padding-bottom: 20px;
		padding-top: 20px;
		color: #007bff;
	}
	
`;

const ArrayCard = ({title, data}) => {
	const Details = () => data.map((item, index) => (
		<p key={index}>{item}</p>
	));

	return (
		<Col>
			<StyledCard>
				<h3>{title}</h3>
				<Details />
			</StyledCard>
		</Col>
	);
}

const MapCard = ({title, data}) => {
	const Details = () => Object.entries(data).map((item, index) => (
		<p key={index}><strong>{item[0]}:</strong>  {item[1]}</p>
	));

	return (
		<Col>
			<StyledCard>
				<h3>{title}</h3>
				<Details />
			</StyledCard>
		</Col>
	);
}

const App = ({ firebase }) => {
	const [setup, setSetup] = useState(null);

	useEffect(() => {
		async function loadData() {
			const setupDoc = await getDoc(firebase.config("setup"));
			
			if (setupDoc.exists())
				setSetup(setupDoc.data());
		}
		
		loadData();
	}, [firebase]);

	const SetupCards = () => Object.entries(setup).map((item, index) => {
		if (item[1] instanceof Array)
			return (<ArrayCard key={index} title={item[0]} data={item[1]} />);
		else
			return (<MapCard key={index} title={item[0]} data={item[1]} />);
	});

	return (
		<>
			<VtrHeader />
		
			<Container style={{minHeight: "50vh"}}>
				<Row lg={2} md={2} sm={1} xl={2} xs={1}>
					{!!setup && <SetupCards />}
				</Row>
			</Container>
			
			<VtrFooter />
		</>
	);
};

const Landing = withFirebase(App);

export default Landing;
