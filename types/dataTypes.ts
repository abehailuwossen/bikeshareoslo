
export interface StationInfo {
	stationId: string;
	name: string;
	address: string;
	lat: number;
	lon: number;
	capacity: number;
	station_id: string;
}

export interface StationStatus {
	stationId: string;
	numBikesAvailable: number;
	numDocksAvailable: number;
	is_installed: number;
	is_renting: number;
	num_bikes_available: number;
	num_docks_available: number;
	last_reported: string;
	is_returning: number;
	station_id: string;
}