import { Avatar, Typography } from '@material-ui/core'
import { deepOrange } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
	root: {
		borderBottom: '1px solid rgba(0, 0, 0, .1)',
    height: '100px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'end',
		backgroundColor: theme.palette.custom.background,
		padding: 25,
		position: 'fixed',
		width: 'calc(100% - 240px)',
		zIndex: 1
	},
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
		height: theme.spacing(7),
		width: theme.spacing(7)
  },
	user: {
		borderRadius: '15px',
		display: 'flex',
		width: 'max-content',
		alignItems: 'center',
		padding: 10
	},
	name: {
		marginRight: 10
	}
}))

export const Topbar = () => {
	const styles = useStyles()

	return <div className={styles.root}>
		{/* <Typography variant='h3' draggable>Aura Surface</Typography> */}
		<div className={styles.user}>
			<Typography className={styles.name} variant='h6' color='textSecondary'>Carlos Araujo</Typography>
			<Avatar className={styles.orange}>CA</Avatar>
		</div>
	</div>
}
