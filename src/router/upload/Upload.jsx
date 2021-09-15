import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => {
	return {
		root: {
			height: '100%',
		},
    container: {  
      display: 'flex',
      paddingTop: '100px',
      justifyContent: 'center',
      height: '100%'
    },
		card: {
			width: 500,
      height: 300,
      border: 'dashed 3px '
		},
		title: {
			fontSize: 14,
		},
		pos: {
			marginBottom: 12,
		},
	}
})

export const Upload = () => {
	const styles = useStyles()

	return (
		<div className={styles.root}>
			<Typography variant='h3'>Subir video</Typography>
			<Typography color='textSecondary' variant='subtitle2'>
				Presione sobre el icono para empezar la subida de archivos o solo arraste el archivo sobre el
				area punteada
			</Typography>
			<div className={styles.container}>
        <div className={styles.card}>

        </div>
			</div>
		</div>
	)
}
