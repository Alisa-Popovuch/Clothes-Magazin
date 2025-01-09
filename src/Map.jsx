import React from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
    width: '420px',
    height: '420px',
}

const center = {
    lat: 48.85851,
    lng: 8.20965,
}

function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyAu_9415wGOqm2lzkysYyqusG5LHA4iRGk',
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)

    setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
        {}
        <></>
        </GoogleMap>
    ) : (
    <></>
    )
}

export default React.memo(Map)