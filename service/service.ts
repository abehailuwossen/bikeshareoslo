import { StationInfo, StationStatus } from "@/types/dataTypes";
import axios from "axios";

export async function getStationInfo() {
    try {
        const { data } = await axios.get('https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json');
        const stationsInfo = data.data.stations.map((station: StationInfo) => {
            const {
                station_id: stationId,
                name,
                address,
                lat,
                lon
            } = station;

            return {stationId, name, address, lat, lon};
        })
        return stationsInfo;
    } catch(err) {
       throw Error('Failed to get station info.');
    }
}


export async function getStationStatus() {
        
    const { data } = await axios.get('https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json');
    const stationsStatus = data.data.stations.map((station: StationStatus) => {
        const {
            station_id: stationId,
            num_bikes_available: numBikesAvailable,
            num_docks_available: numDocksAvailable,
        } = station;

        return {stationId, numBikesAvailable, numDocksAvailable};
    });

    return stationsStatus;
}