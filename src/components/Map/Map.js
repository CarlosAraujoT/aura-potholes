import { GoogleMap, withGoogleMap } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/withScriptjs";
import Marker from "../Marker/";
import styles from "./style";

const MyMapComponent = ({ points = [], idToShow, setIdToShow }) => {
	return (
		<GoogleMap
			defaultCenter={{ lat: 25.68115497363564, lng: -100.35720998612886 }}
			defaultZoom={16}
			options={{
				styles: styles,
				disableDefaultUI: true,
			}}
		>
			{points.map((item, i) => (
				<Marker
					idToShow={idToShow}
					setIdToShow={setIdToShow}
					key={`marker-${i}`}
					data={item}
				/>
			))}
		</GoogleMap>
	);
};

export default withScriptjs(withGoogleMap(MyMapComponent));
// 25.677229279857862, -100.36167318156714
