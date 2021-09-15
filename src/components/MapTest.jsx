import { useCallback } from 'react'
import { CircularProgress } from '@material-ui/core'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import MarkerClusterer from '@googlemaps/markerclustererplus'
import { grey } from '../helpers/mapStyles'

const infoWindow = new window.google.maps.InfoWindow()

export function MapTest({ data }) {
	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: 'AIzaSyA9ftZoerJ-yDmmfpHFyspbB_rfmEtcwrc',
		styles: grey
	})

	const RenderMap = () => {
		const onLoad = useCallback(function onLoad(mapInstance) {

			const markers = []

			if(data.length) {


				data.forEach(e => {
					const marker = new window.google.maps.Marker({
						position: { lat: e.lat, lng: e.lng },
						map: mapInstance,
						title: `${e.street} ${e.number}`,
						icon: require(`../assets/${e.type === 1 ? 'ambar' : 'red'}.png`).default
					})

					markers.push(marker)

					marker.addListener('click', () => {	
						infoWindow.close()
						infoWindow.setContent(generateHTML(e))
						infoWindow.open(marker.getMap(), marker)
					})					
				});
			}

			// new MarkerClusterer(mapInstance, markers, {
			// 	imagePath: `https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m`
			// })

		}, [])

		return (
			<GoogleMap
				mapContainerStyle={{ height: '100%', minHeight: '1000px' }}
				onLoad={onLoad}
				center={{ lat: 25.683365882142517, lng: -100.35678285004195 }}
				zoom={16}
				clickableIcons={false}
			/>
		)
	}

	if (loadError) {
		return <div>Map cannot be loaded right now, sorry.</div>
	}

	return isLoaded ? <RenderMap /> : <CircularProgress />
}

const generateHTML = (marker) => {
	return `<div class="infobox-image">
		<img width=200 src="${require(`../assets/${marker.id}.png`).default}" />
		<span style="font-weight: bold;">${marker.street} ${marker.number} ${marker.col}</span>
		<span>${marker.city}</span>
		<span>${new Date(marker.date).toLocaleString()}</span>
	</div>`
}