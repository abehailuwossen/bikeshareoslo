import styles from './footer.module.css'

const Footer = () => {

    return (
        <div className={styles.bk}>
            <div className={styles.container}>
                <div className={styles.footer}>

                    <p className={`${styles.footerList} ${styles.footerLogo}`}>Bike Share Oslo</p>

                    <div className={styles.footerList}>
                        <p style={{fontSize: '16px', fontWeight: '500', marginBottom: '24px'}}>About</p>
                        <ul>
                            <li style={{lineHeight: '20px', marginBottom: '16px'}}>
                                <a style={{fontSize: '14px', fontWeight: '300'}} href='#'>Career</a>
                            </li>
                            <li style={{lineHeight: '20px', marginBottom: '16px'}}>
                                <a style={{fontSize: '14px', fontWeight: '300'}} href='#'>Legal Notice</a>
                            </li>
                            <li style={{lineHeight: '20px', marginBottom: '16px'}}>
                                <a style={{fontSize: '14px', fontWeight: '300'}} href='#'>Privacy Notice</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footerList}>
                        <p style={{fontSize: '16px', fontWeight: '500', marginBottom: '24px'}}>Resource</p>
                        <ul>
                            <li style={{lineHeight: '20px', marginBottom: '16px'}}>
                                <a style={{fontSize: '14px', fontWeight: '300'}} href='https://oslobysykkel.no/apne-data/sanntid'>Bike Staions API</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;