import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    height: 'calc(100% - 100px)',
    padding: '30px',
    margin: '100px 0px'
  },
  container: {
    maxWidth: 1700,
    margin: '0 auto'
  }
}))


export const Main = ({children}) => {

  const styles = useStyles()

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  )
}