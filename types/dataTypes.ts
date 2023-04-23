
export interface StationInfo {
	station_id: string;
	name: string;
	address: string;
	lat: number;
	lon: number;
	capacity: number;
}

export interface StationStatus {
	is_installed: number;
	is_renting: number;
	num_bikes_available: number;
	num_docks_available: number;
	last_reported: string;
	is_returning: number;
	station_id: string;
}

export interface StationType {
	stationId: string;
	name: string;
	lat: number;
	lon: number;
	numBikesAvailable: number;
	numDocksAvailable: number;
}