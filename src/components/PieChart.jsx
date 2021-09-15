import { VictoryPie, VictoryTooltip } from 'victory'
import { makeStyles, Typography } from '@material-ui/core'
import classnames from 'classnames'

const useStyles = makeStyles((theme) => ({
	lastSession: {
		height: '100%',
	},
	labels: {
		display: 'flex',
		justifyContent: 'space-evenly',
		marginTop: '-30px'
	},
	squareCant: {
		marginBottom: 5,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 5
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
	cant: {
		color: 'white',
		textAlign: 'center',
	},
	chart: {
		height: 250
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
							x: data.filter((el) => el.type === 2).length,
							y: data.filter((el) => el.type === 2).length,
						},
						{
							x: data.filter((el) => el.type === 1).length,
							y: data.filter((el) => el.type === 1).length,
						},
					]}
					colorScale={['#EA4335', '#F29900']}
					innerRadius={100}
					padding={{ top: 20, bottom: 60 }}
					labelComponent={<VictoryTooltip />}
				/>
			</div>
			<div className={styles.labels}>
					<div className={styles.label}>
						<div className={classnames(styles.chartColorYellow, styles.squareCant)}>
							<Typography className={styles.cant} variant='subtitle2'>
								{ ((100 / data.length) * data.filter(el => el.type === 1).length).toFixed(1)  }%
							</Typography>
						</div>
						<Typography variant='subtitle2'>Grietas</Typography>
					</div>
					<div className={styles.label}>
						<div className={classnames(styles.chartColorRed, styles.squareCant)}>
							<Typography className={styles.cant} variant='subtitle2'>
								{ ((100 / data.length) * data.filter(el => el.type === 2).length).toFixed(1)  }%
							</Typography>
						</div>
						<Typography variant='subtitle2'>Baches</Typography>
					</div>
				</div>
		</div>
	)
}

export default PieChart
