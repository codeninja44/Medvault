import { useNavigate } from 'react-router-dom'
import styles from './createStaffAlert.module.css'

function CreateStaffAlert() {
    const nav = useNavigate()
    return (
        <div className={styles.body}>
            <div className={styles.card}>
                <p>New staff created successfully</p>
            </div>
        </div>
    )
}

export default CreateStaffAlert