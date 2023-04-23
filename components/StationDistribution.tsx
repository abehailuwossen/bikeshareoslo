'use client'
import React, { useState } from 'react'
import { MapProvider } from './context/MapContext';
import StationList from './StationList';
import StationMap from './StationMap';
import StationLoadError from './StationLoadError';


const StationDistribution = () => {
    const [error, setError] = useState('');

    return (
        <MapProvider>
            {!error ?
                <StationMap>
                    <StationList setError={setError} />
                </StationMap> : <StationLoadError error={error} />}
        </MapProvider>
    )
}

export default StationDistribution;
