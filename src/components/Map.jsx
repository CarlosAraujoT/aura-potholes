import { GoogleMap, InfoBox, LoadScript, Marker } from '@react-google-maps/api'
import { useState } from 'react'

const Map = ({ data }) => {
	const [infobox, setInfobox] = useState(null)

	const showInfobox = (marker) => {
		console.log(marker)
		setInfobox(marker)
	}

	const onLoad = (infoBox) => {
		console.log('infoBox: ', infoBox)
	}

	const options = { closeBoxURL: '', enableEventPropagation: true }

	return (
		<LoadScript googleMapsApiKey='AIzaSyA9ftZoerJ-yDmmfpHFyspbB_rfmEtcwrc'>
			<GoogleMap
				mapContainerStyle={{ height: '100%' }}
				center={{ lat: 25.683365882142517, lng: -100.35678285004195 }}
				zoom={16}
			>
				{infobox && (
					<InfoBox onLoad={onLoad} options={options} position={{ lat: infobox.lat, lng: infobox.lng }}>
						<div style={{ backgroundColor: 'yellow', opacity: 0.75, padding: 12 }}>
							<div style={{ fontSize: 16, fontColor: `#08233B` }}>Hello, World!</div>
						</div>
					</InfoBox>
				)}
				{data.map((el) => (
					<Marker
						onClick={() => showInfobox(el)}
						icon={require(`../assets/${el.type === 1 ? 'ambar' : 'red'}.png`).default}
						position={{ lat: el.lat, lng: el.lng }}
						key={el.id}
					/>
				))}
			</GoogleMap>
		</LoadScript>
	)
}

export default Map
