import { CSSProperties } from "react"
import React from "react"

const Loader: React.FC<{ isLoading: boolean }> = (props) => {
	const loaderStyle: CSSProperties = {
		display: props.isLoading ? "flex" : "none",
		height: "100vh",
		width: "100%",
		position: "fixed",
		top: 0,
		left: 0,
		zIndex: 9999,
		backgroundColor: "#DDD",
		opacity: 0.7,
		alignItems: "center",
		justifyContent: "center"
	}

	const contentStyle: CSSProperties = {
		fontFamily: "sans-serif",
		fontSize: "20pt"
	}

	return (
		<div style={loaderStyle}>
			<span style={contentStyle}>Loading..</span>
		</div>
	)
}

export default Loader;