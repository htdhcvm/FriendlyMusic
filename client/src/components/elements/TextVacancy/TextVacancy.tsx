import { Typography } from '@material-ui/core';
import { FunctionComponent, memo, useCallback, useState } from 'react';

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

import './TextVacancy.scss';

interface Props {
    Buttons: FunctionComponent;
    description: string;
    experience?: string;
    responsibility?: string;
    requirement?: Array<string>;
    offer?: Array<string>;
    quality?: Array<string>;
    willPlus?: Array<string>;
    skills?: Array<string>;
    latlon: Array<number>;
}

const TextVacancy: FunctionComponent<Props> = ({
    Buttons,
    experience,
    description,
    responsibility,
    requirement,
    offer,
    quality,
    skills,
    willPlus,
    latlon,
}) => {
    return (
        <div className="TextVacancy">
            <div className="wrapper">
                <Buttons />
                <span className="experience">Требуемый опыт: {experience}</span>
                <ItemContent content={description} title="Описание" />
                <ItemContent content={requirement} title="Требования" />
                <ItemContent content={responsibility} title="Обязанности" />
                <ItemContent content={willPlus} title="Будет преимуществом" />
                <ItemContent content={offer} title="Мы предлагаем" />
                <ItemContent content={quality} title="Качества" />
                <ItemContent content={skills} title="Ключевые навыки" />
                <MapGoogle latlon={latlon} />
            </div>
        </div>
    );
};

interface ContentProp {
    content: string | Array<string> | undefined;
    title: string;
}

const ItemContent = memo(({ content, title }: ContentProp) => {
    if (content)
        return (
            <div className="itemContent">
                <Typography variant="h4" className="title">
                    {title}
                </Typography>
                {Array.isArray(content) ? (
                    content.map((item) => (
                        <Typography key={item} variant="body1">
                            — {item[0].toUpperCase() + item.slice(1)}
                        </Typography>
                    ))
                ) : (
                    <Typography variant="body1">{content}</Typography>
                )}
            </div>
        );
    return null;
});

interface MapGoogleProps {
    latlon: Array<number>;
}

const MapGoogle = ({ latlon }: MapGoogleProps) => {
    const coordinates = { lat: +latlon[0], lng: +latlon[1] };

    console.log('coordinates', coordinates);
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API
            ? process.env.REACT_APP_GOOGLE_API
            : '',
    });

    const [map, setMap] = useState(null);

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = useCallback(function callback(map) {
        setMap(null);
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
            onUnmount={onUnmount}
        >
            <Marker
                position={{ lat: coordinates.lat, lng: coordinates.lng }}
            ></Marker>
        </GoogleMap>
    ) : null;
};

export default TextVacancy;
