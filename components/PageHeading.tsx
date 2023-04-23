import styles from './page-heading.module.css';


const PageHeading = () => {

    return (
        <div className={styles.heading}>
            <p className={styles.headingText}>
                The fun,<br/>
                flexible and affordable way<br/>
                to navigate Oslo
            </p>
        </div>
    )
}

export default PageHeading;

