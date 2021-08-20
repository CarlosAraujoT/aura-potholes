import React, { useState } from "react";
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";
import { points } from "./db/data";
import logo from "./assets/logo 320x320.png";

export const App = () => {
	const [pointSelected, setPointSelected] = useState(1);

	const onHandlershow = id => {
		setPointSelected(id);
	};

	return (
		<div style={styles.container}>
			<div style={styles.sidebar}>
				<Sidebar data={points} />
			</div>
			<div style={styles.map}>
				<Map
					idToShow={pointSelected}
					setIdToShow={onHandlershow}
					points={points}
					isMarkerShown
					googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyA9ftZoerJ-yDmmfpHFyspbB_rfmEtcwrc&v=3.exp&libraries=geometry,drawing,places'
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ height: "100%" }} />}
					mapElement={<div style={{ height: `100%` }} />}
				/>
				<img alt='logo' style={styles.image} src={logo} />
			</div>
		</div>
	);
};

const styles = {
	container: {
		display: "flex",
		height: "100%",
		overflow: "hidden",
	},
	sidebar: {
		width: "400px",
		boxShadow: "5px 5px 10px -5px rgba(0,0,0,0.5)",
		zIndex: 10,
		overflowY: "scroll",
	},
	map: {
		flex: "1",
		position: "relative",
	},
	image: {
		position: "absolute",
		bottom: "10px",
		right: "10px",
		width: "30px",
		opacity: ".7",
	},
};
