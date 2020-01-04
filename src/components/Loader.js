import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
	const loaderStyles = {
		height: "100vh",
		width: "100%",
		opacity: 0.7,
		fontSize: "2rem",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		zIndex: 9999,
		position: "fixed",
		top: 0,
		left: 0,
		backgroundImage: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)"
	};

	return (
		<div style={loaderStyles}>
			<Spinner animation="grow" role="status" variant="info" style={{width: "3rem", height: "3rem"}}>
				<span className="sr-only">Loading...</span>
			</Spinner>
			<Spinner animation="grow" role="status" variant="info" style={{width: "3rem", height: "3rem"}}>
				<span className="sr-only">Loading...</span>
			</Spinner>
			<Spinner animation="grow" role="status" variant="info" style={{width: "3rem", height: "3rem"}}>
				<span className="sr-only">Loading...</span>
			</Spinner>
		</div>
	);
}

export default Loader;