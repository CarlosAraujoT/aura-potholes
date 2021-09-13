import { Button, makeStyles } from '@material-ui/core'
import CameraIcon from '@material-ui/icons/Videocam'


const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
		position: 'absolute',
		top: '30px',
		right: '30px',
	},
	extendedIcon: {
		marginRight: theme.spacing(1),
	},
}))

export const VideoBtn = ({ onClick }) => {
	const classes = useStyles()

	return (
		<>
			<Button
				variant='contained'
				color='primary'
				size='large'
				className={classes.button}
				startIcon={<CameraIcon />}
				onClick={onClick}
			>
				See video
			</Button>
		</>
	)
}
