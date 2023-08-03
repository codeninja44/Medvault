import styles from './popUp.module.css'
// import style from './mobile.module.css'
import image from '../images/verifyMail.png'

function EmailPopUp() {

    return (
        <div className={styles.popUp} >
            <div className={styles.card}>
                <div className={styles.popUpImg}>
                    <img src={image} alt="image" />
                </div>
                <div className={styles.popUpText}>
                    <div className={styles.innerContent}>
                        <p className={styles.text}>A link has Been sent to your email</p>
                        <p className={styles.text}>Check email to verify...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmailPopUp