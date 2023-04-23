import styles from './navbar.module.css'


const Navbar = () => {

    return (
        <div className={styles.bk}>
            <div className={styles.container}>
                <div className={styles.navbar}>
                    <div className={styles.navItems}>
                        <div className={styles.navItem}>
                            <span className={styles.logo}>Bike Share Oslo</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar