import { Marker } from "@react-google-maps/api";
import { StationInfo, StationStatus } from "@/types/dataTypes";
import encodeMarkerSVG from "@/utils/encodeMarkerSVG";
import { getStationInfo, getStationStatus } from "@/service/service";
import { useEffect, useState } from "react";


const Station: React.FC<Props> = ({station, map}) => {
    const [infowindow, setInfoWindow] = useState<() => void>();
    const [infoWindowOn, setInfoWindowOn] = useState(false);

    const getStatusInfo = async () => {
        const statusList: StationStatus[] = await getStationStatus();
        const status = statusList.find((status) => status.stationId === station.stationId);
        
        return (
            `<p class='station-name'>${station.name}</p>
            <div class='status-item'>
                <p>Bikes</p>
                <p>${status && status.numBikesAvailable}</p>
            </div>
            <div class='status-item'>
                <p>Docks</p>
                <p>${status && status.numDocksAvailable}</p>
            </div>`
        );
    }

    
    const handleClickOutside = () => {
        setInfoWindowOn(false)
    }

    useEffect(() => {
        if (!infoWindowOn && infowindow) {
            infowindow();
            document.removeEventListener('click', handleClickOutside)
        }
    }, [infoWindowOn, infowindow]);

    return (
            <Marker
                key={station.station_id}
                position={{lat: station.lat, lng: station.lon}}
                icon={{
                    url: encodeMarkerSVG(`${station.capacity} / 12`),
                    scaledSize: new google.maps.Size(40, 57)
                }}
                onClick={ async (e) => {
                    const infowindow = new google.maps.InfoWindow({
                        content: await getStatusInfo(),
                        ariaLabel: "Uluru",
                        position: e.latLng,
                    });
                    infowindow.open({
                    map,
                    });
                    setInfoWindowOn(true);
                    setInfoWindow(() => () => infowindow.close());
                    document.addEventListener('click', handleClickOutside);
                }}
            />
    )
}

export default Station;


interface Props {
    station: StationInfo;
    map: google.maps.Map | null;
}
