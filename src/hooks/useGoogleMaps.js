import { useState, useEffect, useRef } from "react";
import { useGoogleMapsApi } from "./useGoogleMapsApi";

export function useGoogleMaps(apiKey, options) {
  const google = useGoogleMapsApi(apiKey) || undefined;
  const ref = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    if (!google || !ref) {
      return;
    } else {
      const googleAux = new google.maps.Map(ref.current, options);
      setMap(googleAux);
    }
  }, [google, ref]);

  return { ref, map, google };
}
