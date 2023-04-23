'use client'
import useStatusList from '@/hooks/useStatusList';
import styles from './status-overview.module.css';
import { useEffect, useState } from 'react';
import Loading from './Loading';

const StatusOverview = () => {
    const statusList = useStatusList();
    const [totalAvailableBikes, setTotalAvailableBikes] = useState<number>();
    const [totalAvailableDocks, setTotalAvailableDocks] = useState<number>();

    useEffect(() => {
        let bikes = 0;
        let docks = 0;
        statusList?.forEach((station) => {
            bikes += station.num_bikes_available;
            docks += station.num_docks_available;
        });
        setTotalAvailableBikes(bikes);
        setTotalAvailableDocks(docks);
    }, [statusList]);

    return (
        <div className={styles.overviewWrapper}>
            <div className={styles.overview}>
                <div className={styles.overviewItem}>
                    {!!totalAvailableBikes ? <p className={styles.itemVal}>{totalAvailableBikes}</p> : <Loading />}
                    <p className={styles.itemDescription}>The total number of bikes available now</p>
                </div>
                <div className={styles.overviewItem}>
                    {!!totalAvailableDocks ? <p className={styles.itemVal}>{totalAvailableDocks}</p> : <Loading />}
                    <p className={styles.itemDescription}>The total number of docks available now</p>
                </div>
            </div>  
        </div>
    )
}

export default StatusOverview;