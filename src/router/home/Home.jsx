import { useState } from 'react'
import { Grid, makeStyles, Paper, Typography, Button } from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import { Timeline } from '../../components/Timeline'
import potholes from '../../db/data'
import video from '../../assets/video.mp4'
import { VideoModal } from '../../components/VideoModal'
import PieChart from '../../components/PieChart'
import { MapTest } from '../../components/MapTest'
import { Total } from '../../components/Total'

const useStyles = makeStyles((theme) => {
	return {
		root: {
			height: '100%',
		},
		lastSession: {
			padding: theme.spacing(1),
			marginTop: theme.spacing(2),
			height: '90%',
			overflow: 'hidden scroll',
			scrollbarColor: 'rgba(0, 0, 0, .1) white',
			scrollbarWidth: 'thin',
			maxHeight: '650px'
		},
		gridItem: {
			padding: theme.spacing(2),
			height: '100%',
		},
		header: {
			display: 'flex',
			justifyContent: 'space-between',
			marginTop: '40px'
		},
		map: {
			height: 1000,
			paddingTop: 32
		},
	}
})

export const Home = () => {
	const styles = useStyles()
	const [showModal, setShowModal] = useState(false)

	return (
		<Grid className={styles.root} container>


			<Grid className={styles.gridItem} item xs={7}>



				<Grid style={{ height: 300 }} container>
					<Grid item className={styles.gridItem} xs={3}>
						<Total total={potholes.length} />
					</Grid>
					<Grid item className={styles.gridItem} xs={6}>
						<PieChart data={potholes} />
					</Grid>
					<Grid item className={styles.gridItem} xs={3}>
						<Total total={potholes.length} />
					</Grid>
				</Grid>


				<Grid style={{ height: '75%' }} container>
					<Grid item className={styles.gridItem} xs={12}>
						<div className={styles.header}>
							<Typography variant='h6'>Ultima sesión</Typography>
							<Button
								variant='contained'
								color='primary'
								size='small'
								className={styles.button}
								startIcon={<PlayArrowIcon />}
								onClick={() => setShowModal(true)}
							>
								Ver video
							</Button>
						</div>
						<Paper className={styles.lastSession}>
							<Timeline potholes={potholes} />
						</Paper>
					</Grid>
				</Grid>


			</Grid>



			<Grid className={styles.map} item xs={5}>
				<MapTest data={potholes} />
			</Grid>



			<VideoModal video={video} showModal={showModal} onClose={() => setShowModal(false)} />
		</Grid>
	)
}
