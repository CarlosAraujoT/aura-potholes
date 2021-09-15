import { useState } from 'react'
import classNames from 'classnames'
import { Grid, makeStyles, Paper, Typography, Button } from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
// import Map from '../../components/Map'
import { Timeline } from '../../components/Timeline'
import potholes from '../../db/data'
import video from '../../assets/video.mp4'
import { VideoModal } from '../../components/VideoModal'
import PieChart from '../../components/PieChart'
import { MapTest } from '../../components/MapTest'

const useStyles = makeStyles((theme) => ({
	root: {
		height: '90%',
	},
	total: {
		textAlign: 'center',
		backgroundColor: theme.palette.success.main,
		color: 'white',
		padding: '40px 0px',
	},
	lastSession: {
		padding: theme.spacing(1),
		marginTop: theme.spacing(2),
		maxHeight: 500,
		overflow: 'scroll',
		overflowX: 'hidden',
		scrollbarColor: 'rgba(0, 0, 0, .1) white',
		scrollbarWidth: 'thin',
	},
	gridItem: {
		padding: theme.spacing(2),
	},
	header: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	map: {
		height: '100%',
		minHeight: 1000
	}
}))

export const Home = () => {
	const styles = useStyles()
	const [showModal, setShowModal] = useState(false)

	return (
		<Grid className={styles.root} container>
			<Grid item xs={4}>
				{/* TOTAL */}
				<Grid container>
					<Grid className={styles.gridItem} item xs={12}>
						<Paper className={styles.total}>
							<Typography variant='h2'>{potholes.length}</Typography>
							<Typography variant='h6'>Total de baches</Typography>
						</Paper>
					</Grid>
					<Grid className={styles.gridItem} item xs={12}>
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
					<Grid className={styles.gridItem} item xs={12}>
						<PieChart data={potholes} />
					</Grid>
				</Grid>
				{/* CHARTS */}
			</Grid>

			<Grid className={classNames(styles.gridItem, styles.map)} item xs={8}>
				{/* MAPA */}
				{/* <Map data={potholes} /> */}
				<MapTest data={potholes} />
			</Grid>
			<VideoModal video={video} showModal={showModal} onClose={() => setShowModal(false)} />
		</Grid>
	)
}
