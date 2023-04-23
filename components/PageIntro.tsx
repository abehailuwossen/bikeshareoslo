import PageHeading from "./PageHeading";
import StatusOverview from "./StatusOverview";
import styles from './page-intro.module.css';


const PageIntro = () => {

    return (
        <div className={styles.bk}>
            <div className={styles.container}>
                <div className={styles.pageIntro}>
                    <PageHeading />
                    <StatusOverview />
                </div>
            </div>
        </div>
    )
}

export default PageIntro;