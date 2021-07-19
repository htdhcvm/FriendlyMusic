import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useCallback } from 'react';

interface MapGoogleProps {
    latlon: Array<number>;
}

const MapGoogle = ({ latlon }: MapGoogleProps) => {
    const coordinates = { lat: +latlon[0], lng: +latlon[1] };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API
            ? process.env.REACT_APP_GOOGLE_API
            : '',
    });

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
    }, []);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={{
                width: '100%',
                height: '400px',
            }}
            center={coordinates}
            zoom={12}
            onLoad={onLoad}
        >
            <Marker
                position={{ lat: coordinates.lat, lng: coordinates.lng }}
            ></Marker>
        </GoogleMap>
    ) : null;
};

export default MapGoogle;
