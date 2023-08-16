import styles from './createStaffAlert.module.css'

function CreateStaffAlert() {
    return (
        <div className={styles.body}>
            <div className={styles.card}>
                <p>New staff created successfully</p>
            </div>
        </div>
    )
}

export default CreateStaffAlert