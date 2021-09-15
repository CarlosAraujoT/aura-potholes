import { Button, createTheme, Fade, makeStyles, Modal, Paper, ThemeProvider } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
	modalContainer: {
		display: 'flex',
		marginTop: '150px',
		justifyContent: 'center',
	},
	modal: {
		width: 800 * 1.6,
		height: 450 * 1.8,
		padding: '60px 30px',
		backgroundColor: theme.palette.primary.main,
	},
	videoContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	detailsButton: {
		marginTop: '30px',
	},
}))

const theme = createTheme({
	palette: {
		primary: {
			main: 'rgba(255, 255, 255, 1)'
		},
	},
})

export const VideoModal = ({ showModal, onClose, video }) => {
	const styles = useStyles()

	return (
		<Modal open={showModal} onClose={onClose} className={styles.modalContainer}>
			<Fade in={showModal}>
				<Paper className={styles.modal}>
					<div className={styles.videoContainer}>
						<video width={800 * 1.4} controls src={video} />
						<ThemeProvider theme={theme}>
							<Button className={styles.detailsButton} variant='contained' color='primary'>
								Ver detalles
							</Button>
						</ThemeProvider>
					</div>
				</Paper>
			</Fade>
		</Modal>
	)
}
