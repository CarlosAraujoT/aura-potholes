import { makeStyles } from '@material-ui/styles'
import DashboardIcon from '@material-ui/icons/Dashboard'
import { NavLink } from 'react-router-dom'
import logo from '../assets/aura_logo.svg'
import { Typography } from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import classNames from 'classnames'
import SettingsIcon from '@material-ui/icons/Settings';
import HistoryIcon from '@material-ui/icons/History';

const useStyles = makeStyles((theme) => ({
		root: {
			width: '240px',
			minWidth: '240px',
			backgroundColor: theme.palette.primary.main,
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			paddingTop: '50px',
			position: 'fixed',
		},
		logo: {
			marginBottom: '100px',
		},
		link: {
			textDecoration: 'none',
			display: 'flex',
			color: theme.palette.text.unactive,
			alignItems: 'center',
			padding: '15px 30px',
			borderLeft: '3px solid ' + theme.palette.primary.main,
			transition: 'all .2s ease',
		},
		ul: {
			width: '100%',
			padding: 0,
		},
		menuItem: {},
		active: {
			borderLeft: '3px solid white',
			backgroundColor: 'rgba(0, 0, 0, .1)',
			color: 'white',
		},
		icon: {
			marginRight: '30px',
		},
		settings: {
			position: 'absolute',
			bottom: '67px'
		}
}))

export const Aside = (props) => {
	const styles = useStyles(props)

	return (
		<div className={styles.root}>
			<img className={styles.logo} src={logo} width={100} alt='' />
			<div className={styles.ul}>
				{routes.map(({ to, Icon, title }) => {
					return (
						<NavLink
							key={title}
							exact
							className={classNames(styles.link, 'menu-item')}
							activeClassName={styles.active}
							to={to}
						>
							<Icon className={styles.icon} />
							<Typography variant='subtitle1'>{title}</Typography>
						</NavLink>
					)
				})}
			</div>
			<div className={classNames(styles.ul, styles.settings)}>
				<NavLink
					exact
					className={classNames(styles.link, 'menu-item')}
					activeClassName={styles.active}
					to='/settings'
				>
					<SettingsIcon className={styles.icon} />
					<Typography variant='subtitle1'>Settings</Typography>
				</NavLink>
			</div>
		</div>
	)
}

const routes = [
	{
		title: 'Dashboard',
		Icon: DashboardIcon,
		to: '/',
	},
	{
		title: 'Upload',
		Icon: CloudUploadIcon,
		to: '/upload',
	},
	{
		title: 'Historial',
		Icon: HistoryIcon,
		to: '/history',
	},
]
