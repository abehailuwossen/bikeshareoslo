import Image from "next/image";


const StationLoadError: React.FC<Props> = ({error}) => {

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}}>
            {/* <p style={{padding: '16px'}}>{error}</p> */}
            <Image width={75.62} height={107.13} src={'/map-icon.svg'} alt= '' />
        </div>
    )
}

export default StationLoadError;


interface Props {
    error: string;
}
