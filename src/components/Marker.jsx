import { makeStyles } from '@material-ui/core'
import { InfoBox, Marker as GoogleMarker } from '@react-google-maps/api'
import { useState } from 'react';

const useStyles = makeStyles(theme => ({
  infobox: {
    width: '300px',
    height: '300px',
    backgroundColor: 'red'
  }
}))

export const Marker = ({ element }) => {
  const [show, setShow] = useState(false);

  const styles = useStyles()

	return (
		<GoogleMarker
			icon={require(`../assets/${element.type === 1 ? 'ambar' : 'red'}.png`).default}
			position={{ lat: element.lat, lng: element.lng }}
		>
      {/* <InfoBox   >
        <div className={styles.infobox}>

        </div>
      </InfoBox> */}
    </GoogleMarker>
	)
}
