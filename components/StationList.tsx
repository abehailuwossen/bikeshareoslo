import { useMap } from "./context/MapContext";
import { useEffect, useState } from "react";
import Station from "./Station";
import { StationInfo } from "@/types/dataTypes";
import { getStationInfo } from "@/service/service";

const StationList: React.FC<Props> = ({setError}) => {
    const { map } = useMap();
    const [stations, setStations] = useState<StationInfo[]>([]);

    
    useEffect(() => {
        try {
            (async function() {
                const stationInfo = await getStationInfo();
                setStations(stationInfo);
                setError('');
            })();
        } catch(err) {
            console.log(err);
            setError('Failed to get station info.')
        }
    }, []);

    return (
        <>
            {stations.map((stationItem) => (
                <Station 
                    key={stationItem.stationId} 
                    station={stationItem} map={map}
                />
            ))}
        </>
    )
}

export default StationList;


interface Props {
    setError: React.Dispatch<React.SetStateAction<string>>;
}
