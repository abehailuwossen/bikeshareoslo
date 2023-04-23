'use client'
import React, { ReactNode } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useMapDispatch } from './context/MapContext';


const containerStyle = {
  width: '100%',
  height: '80vh'
};

const StationMap: React.FC<Props> = ({ children }) => {
    const dispatch = useMapDispatch();
    const {isLoaded } = useJsApiLoader({id: 'google-map-script', googleMapsApiKey: process.env.GOOGLE_MAP_API || ''});
    

    return (
        <div style={{height: '80vh'}}>
            {isLoaded &&
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={{lat: 59.922777, lng: 10.738655}}
                zoom={12}
                onLoad={(map) => dispatch({type: 'map_loaded', payload: map})}
                onUnmount={() => dispatch({type: 'map_unmounted', payload: null})}
                options= {{
                    mapTypeControl: false, 
                    streetViewControl: false, 
                    fullscreenControl: false, 
                    zoomControl: true,
                    gestureHandling: 'greedy',
                    minZoom: 6,
                    maxZoom: 17
                }}
            >
                {children}
            </GoogleMap>}
        </div>
    )
}

export default StationMap;


interface Props {
    children: ReactNode;
}
