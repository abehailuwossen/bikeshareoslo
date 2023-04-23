import React from 'react';
import styles from './map-layout.module.css'

type Props = {
    children: React.ReactNode;
}

const MapLayout: React.FC<Props> = ({children}) => {
    
    return (
        <div className={styles.bk}>
            <div className={styles.container}>
                <div className={styles.mapLayout}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MapLayout;