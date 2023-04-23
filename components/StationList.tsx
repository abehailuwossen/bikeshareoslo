import { useMap } from "./context/MapContext";
import { useEffect, useState } from "react";
import Station from "./Station";
import { StationInfo, StationStatus, StationType } from "@/types/dataTypes";
import { getStationInfo, getStationStatus } from "@/service/service";


const StationList: React.FC<Props> = ({setError}) => {
    const { map } = useMap();
    const [stations, setStations] = useState<StationType[]>([]);

    
    useEffect(() => {
        try {
            (async function() {
                const stationInfoList: StationInfo[] = await getStationInfo();
                const stationStatusList: StationStatus[] = await getStationStatus();

                let stations: StationType[] = [];
                stationInfoList.forEach((stationInfo) => {
                    const stationStatus = stationStatusList.find((stationStatus) => stationStatus.station_id === stationInfo.station_id)
                    if (stationStatus) {
                        stations.push({
                            stationId: stationInfo.station_id,
                            name: stationInfo.name,
                            lat: stationInfo.lat,
                            lon: stationInfo.lon,
                            numBikesAvailable: stationStatus.num_bikes_available,
                            numDocksAvailable: stationStatus.num_docks_available
                        })
                    }
                });
                setStations(stations);
                setError('');
            })();
        } catch(err) {
            console.log(err);
            setError('Failed to get station info.')
        }
    }, []);

    return (
        <>
            {stations.map((station) => (
                <Station 
                    key={station.stationId} 
                    station={station} map={map}
                />
            ))}
        </>
    )
}

export default StationList;


interface Props {
    setError: React.Dispatch<React.SetStateAction<string>>;
}
