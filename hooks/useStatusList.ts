import { getStationStatus } from "@/service/service";
import { StationStatus } from "@/types/dataTypes";
import { useEffect, useRef, useState } from "react";

const useStatusList = () => {
    const [shouldUpdate, setShouldUpdate] = useState(false);
    const [statusList, setStatusList] = useState<StationStatus[]>();
    const statusUpdateRef = useRef<NodeJS.Timer>();


    useEffect(() => {
        if (!shouldUpdate) return;
        getStatusList();

        async function getStatusList() {
            try {
                const stationStatus = await getStationStatus();
                setStatusList(stationStatus);
                setShouldUpdate(false);
            } catch(err) {
                console.log(err)
            }
        }
    }, [shouldUpdate])

    
    useEffect(() => {
        statusUpdateRef.current = setInterval(() => {
            setShouldUpdate(true);
        }, 10000);

        return () => clearInterval(statusUpdateRef.current);
    }, [])

    return statusList;
}


export default useStatusList;