import { makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  total: {
    textAlign: 'center',
    backgroundColor: theme.palette.success.main,
    color: 'white',
    padding: '40px 0px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
}))

export const Total = ({ total }) => {

	const styles = useStyles()

	return (
		<Paper className={styles.total}>
			<Typography variant='h2'>{total}</Typography>
			<Typography variant='h6'>Total de baches</Typography>
		</Paper>
	)
}
