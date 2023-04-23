import { createContext, Dispatch, useContext, useReducer } from "react";



const MapContext = createContext<Map>({map: null});

const MapDispatchContext = createContext<Dispatch<Action>>(() => null);

export const MapProvider: React.FC<Props> = ({children}) => {
    const [map, dispatch] = useReducer(mapReducer, {map: null});

    
    return (
        <MapContext.Provider value={map}>
            <MapDispatchContext.Provider value={dispatch}>
                {children}
            </MapDispatchContext.Provider>
        </MapContext.Provider>
    );
}


export function useMap() {
    return useContext(MapContext);
}

export function useMapDispatch() {
    return useContext(MapDispatchContext);
}

interface Props {
    children: React.ReactNode;
}

interface Map {
    map: google.maps.Map | null;
}

interface Action {
    type: string;
    payload: any
}

function mapReducer(map: Map, action: Action): Map {
    switch(action.type) {
        case 'map_loaded':
            return {
                ...map,
                map: action.payload
            };
        case 'map_unmounted':
            return {
                ...map,
                map: null
            };
        default:
            return map;
    }
}
