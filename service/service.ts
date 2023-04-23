import axios from "axios";

export async function getStationInfo() {
    try {
        const { data } = await axios.get('https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json');
        return data.data.stations
    } catch(err) {
       throw Error('Failed to get station info.');
    }
}


export async function getStationStatus() {
        
    const { data } = await axios.get('https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json');
   return data.data.stations
}