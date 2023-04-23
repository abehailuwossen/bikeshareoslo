import { Marker } from "@react-google-maps/api";
import { StationStatus, StationType } from "@/types/dataTypes";
import encodeMarkerSVG from "@/utils/encodeMarkerSVG";
import { getStationStatus } from "@/service/service";
import { useEffect, useState } from "react";


const Station: React.FC<Props> = ({station, map}) => {
    const [infowindow, setInfoWindow] = useState<() => void>();
    const [infoWindowOn, setInfoWindowOn] = useState(false);

    const makeInfoWindowContent = async () => {
        const stationStatusList: StationStatus[] = await getStationStatus();
        const stationStatus = stationStatusList.find((stationStatus) => stationStatus.station_id === station.stationId);

        if (stationStatus) {
            return (
                `<p class='station-name'>${station.name}</p>
                <div class='status-item'>
                    <p>Available Bikes</p>
                    <p>${stationStatus.num_bikes_available}</p>
                </div>
                <div class='status-item'>
                    <p>Available Docks</p>
                    <p>${stationStatus.num_docks_available}</p>
                </div>`
            );
        }
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
                key={station.stationId}
                position={{lat: station.lat, lng: station.lon}}
                icon={{
                    url: encodeMarkerSVG(`${station.numBikesAvailable} / ${station.numDocksAvailable}`),
                    scaledSize: new google.maps.Size(45, 64)
                }}
                onClick={ async (e) => {
                    const infowindow = new google.maps.InfoWindow({
                        content: await makeInfoWindowContent(),
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
    station: StationType;
    map: google.maps.Map | null;
}
