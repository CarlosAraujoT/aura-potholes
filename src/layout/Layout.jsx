import { makeStyles } from '@material-ui/core'
import { Aside } from './Aside'
import { Topbar } from './Topbar'
import { Main } from './Main'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		height: '100%',
	},
	right: {
		width: '100%',
		marginLeft: 240
	},
}))

export const Layout = ({ children }) => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Aside />
			<div className={classes.right}>
				<Topbar />
				<Main>{children}</Main>
			</div>
		</div>
	)
}
