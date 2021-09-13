import { GoogleMap, withGoogleMap } from 'react-google-maps'
import withScriptjs from 'react-google-maps/lib/withScriptjs'
import Marker from '../Marker/'
import styles from './style'
import { VideoBtn } from './VideoBtn'
import Modal from '@material-ui/core/Modal'
import { makeStyles, Paper } from '@material-ui/core'
import { useState } from 'react'
import video from '../../assets/video.mp4'

const useStyles = makeStyles((theme) => ({
	paper: {
		width: '60%',
		margin: '100px auto',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
	},
	video: {
		height: '100%',
		width: '100%',
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: '30px'
	},
	videoContainer: {
		borderRadius: '5px',
		width: '800px',
		height: '450px',
		overflow: 'hidden',
	}
}))

const MyMapComponent = ({ points = [], idToShow, setIdToShow }) => {
	const [open, setOpen] = useState(false)
	const classes = useStyles()

	return (
		<GoogleMap
			// defaultCenter={{ lat: 25.68115497363564, lng: -100.35720998612886 }}
			defaultCenter={{ lat: 25.678765218479764, lng: -100.36271392476512 }}
			defaultZoom={18}
			options={{
				styles: styles,
				disableDefaultUI: true,
			}}
		>
			{points.map((item, i) => (
				<Marker idToShow={idToShow} setIdToShow={setIdToShow} key={`marker-${i}`} data={item} />
			))}
			<VideoBtn onClick={() => setOpen(true)} />
			<Modal open={open} onClose={() => setOpen(false)}>
				<Paper className={classes.paper}>
					<video autoPlay controls className={classes.video} src={video} />
				</Paper>
			</Modal>
		</GoogleMap>
	)
}

export default withScriptjs(withGoogleMap(MyMapComponent))
