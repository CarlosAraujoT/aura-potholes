import { useContext } from "react";
import { Marker } from "react-google-maps";
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";
import dot from "../../assets/dot-25.png";
import { ItemSelectedContext } from "../../context";

const MarkerCustom = ({ data }) => {
	const { itemState, setIdItem, resetIdItem } = useContext(ItemSelectedContext);

	const setShow = () => {
		if (itemState.id === data.id) {
			resetIdItem();
		} else {
			setIdItem(data.id);
		}
	};
	
	const AnyReactComponent = ({ text }) => <div style={{width: '100px', height: '100px', backgroundColor: 'black'}} >{text}</div>;
	return (
		<Marker
			position={{ lat: data.lat, lng: data.lng }}
			// defaultIcon={require(`../../assets/${data.id}.png`).default}
			defaultIcon={dot}
			onClick={setShow}
		>
			<AnyReactComponent text='Hola' />

			<InfoBox
				visible={itemState.id === data.id}
				options={{
					closeBoxURL: ``,
					boxStyle: {
						marginBottom: "35px",
						marginLeft: "-90px",
						boxShadow: "5px 5px 10px -5px rgba(0,0,0,0.5)",
						borderRadius: "5px",
					},
					alignBottom: true,
				}}
			>
				<div style={style.infobox}>
					<img
						src={require(`../../assets/${data.id}.png`).default}
						width='170px'
						height='112px'
						alt='test'
						style={style.image}
					/>
				</div>
			</InfoBox>
		</Marker>
	);
};

const style = {
	infobox: {
		height: "152px",
		width: "180px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
		borderRadius: "5px",
	},
	image: {
		borderRadius: "5px",
		animations: "all 1s ease",
		marginBottom: "20px",
	},
};

export default MarkerCustom;
