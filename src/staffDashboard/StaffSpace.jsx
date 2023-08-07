import style from './staffDashboard.module.css'
import image from '../images/logo.png'
// import image from '../images/home.png'

function StaffSpace() {

    return (
        <div className={style.dashboardBody}>
            <div className={style.rightNav}>
                <div className={style.top}>
                    <div className={style.logo}>
                        <img src={image} alt="image" />
                    </div>
                    <div className={style.navSec}>
                        <div className={style.navs}>
                            <div className={style.dashboardIcon}>
                                <img src="./src/images/profileIcon.png" alt="" />
                            </div>
                            <div>Patients</div>
                        </div>
                    </div>
                </div>
                <div className={style.logout}>Logout</div>
            </div>
            <div className={style.leftSection}>
                <div className={style.profile}>
                    <div className={style.profilePic}>
                        <img src="./src/images/Ellipse 1870 (1).png" alt="" />
                        <p>View profile</p>
                    </div>
                    <div className={style.adminDetials}>
                        <p><span>Welcome</span>,Elvis</p>
                        <p className={style.id}>Staff</p>
                    </div>
                </div>
                <div className={style.hospitaldetails}>
                    <div className={style.totals}>
                        <span>2000+</span>
                        <p>Patients</p>
                    </div>
                </div>
                <div className={style.plans}>
                    <div className={style.planBody}>
                        At MedVault, we are dedicated to shaping a future where patient-centric care and
                        advanced technology converge seamlessly. Our commitment to excellence and
                        innovation drives us to  create solutions that empower healthcare providers to deliver
                        the best possible care to their patients
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StaffSpace