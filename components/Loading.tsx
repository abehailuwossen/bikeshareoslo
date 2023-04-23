import styles from './loading.module.css'
import { RotatingLines } from 'react-loader-spinner'


const Loading = () => (
    <div className={styles.content}>
        <RotatingLines
            strokeColor="grey"
            strokeWidth="3"
            animationDuration="0.75"
            width="80"
            visible={true}
        />
    </div>
)

export default Loading;
