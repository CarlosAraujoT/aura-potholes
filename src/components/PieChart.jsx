import { VictoryPie } from 'victory'
import { makeStyles, Typography } from '@material-ui/core'
import classnames from 'classnames'

const useStyles = makeStyles((theme) => ({
	lastSession: {
		padding: theme.spacing(1),
		marginTop: theme.spacing(2),
		maxHeight: 500,
		overflowX: 'hidden',
		scrollbarColor: 'rgba(0, 0, 0, .1) white',
		scrollbarWidth: 'thin',
	},
	labels: {
		display: 'flex',
		padding: '0px 40px',
		justifyContent: 'space-evenly',
	},
	squareCant: {
		height: 25,
		width: 35,
		marginBottom: 10,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	chartColorYellow: {
		backgroundColor: '#F29900',
	},
	chartColorRed: {
		backgroundColor: '#EA4335',
	},
	label: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
  chart: {
    height: 350
  },
	cant: {
		color: 'white',
		textAlign: 'center'
	}
}))

const PieChart = ({ data }) => {
	const styles = useStyles()

	return (
		<div className={styles.lastSession}>
			<div className={styles.chart}>
				<VictoryPie
					data={[
						{
							x: data.filter(el => el.type === 2).length, 
							y: data.filter(el => el.type === 2).length
						}, 
						{
							x: data.filter(el => el.type === 1).length, 
							y: data.filter(el => el.type === 1).length							
						}]}
					colorScale={['#EA4335', '#F29900']}
					innerRadius={100}
					padding={{ top: 20, bottom: 60 }}
				/>
			</div>
				<div className={styles.labels}>
					<div className={styles.label}>
						<div className={classnames(styles.chartColorYellow, styles.squareCant)}>
							<Typography className={styles.cant} variant='subtitle2'>
								{ (100 / data.length) * data.filter(el => el.type === 1).length  }
							</Typography>
						</div>
						<Typography variant='subtitle2'>Grietas</Typography>
					</div>
					<div className={styles.label}>
						<div className={classnames(styles.chartColorRed, styles.squareCant)}>
							<Typography className={styles.cant} variant='subtitle2'>
								{ (100 / data.length) * data.filter(el => el.type === 2).length  }
							</Typography>
						</div>
						<Typography variant='subtitle2'>Baches</Typography>
					</div>
				</div>
		</div>
	)
}

export default PieChart
