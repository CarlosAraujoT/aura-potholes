import { Card, makeStyles, Typography } from '@material-ui/core'
import {
	Timeline as TimelineMaterial,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineSeparator,
} from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
	red: {
		backgroundColor: theme.palette.custom.red,
	},
	ambar: {
		backgroundColor: theme.palette.custom.ambar,
	},
	card: {
		padding: 15,
	},
}))

export const Timeline = ({ potholes }) => {
	const styles = useStyles()

	return (
		<TimelineMaterial align='left'>
			{potholes.map((pothole) => (
				<TimelineItem key={pothole.id}>
					<TimelineSeparator>
						{pothole.type === 2 ? (
							<TimelineDot className={styles.red} />
						) : (
							<TimelineDot className={styles.ambar} />
						)}
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<Card className={styles.card} variant='outlined'>
							<Typography variant='body2'>{pothole.address}</Typography>
							<Typography variant='body2'>{new Date(pothole.date).toLocaleString()}</Typography>
						</Card>
					</TimelineContent>
				</TimelineItem>
			))}
		</TimelineMaterial>
	)
}
