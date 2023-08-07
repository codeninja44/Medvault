import style from './dashboard.module.css'
import image from '../images/logo.png'
// import image from '../images/home.png'

function Dashboard() {

    return (
        <div className={style.dashboardBody}>
            <div className={style.rightNav}>
                <div className={style.top}>
                    <div className={style.logo}>
                        <img src={image} alt="image" />
                    </div>
                    <div className={style.navSec}>
                        <div className={style.firstNav}>
                            <div className={style.dashboardIcon1}>
                                <img src="./src/images/homePage.png" alt="" />
                            </div>
                            <div className={style.text}>Home</div>
                        </div>
                        <div className={style.secondNav}>
                            <div className={style.dashboardIcon2}>
                                <img src="./src/images/patientIcon.png" alt="" />
                            </div>
                            <div>Staffs</div>
                        </div>
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
                        <p className={style.id}>Admin</p>
                    </div>
                </div>
                <div className={style.hospitaldetails}>
                    <div className={style.totals}>
                        <span>30+</span>
                        <p>Staffs</p>
                    </div>
                    <div className={style.totals}>
                        <span>2000+</span>
                        <p>Patients</p>
                    </div>
                </div>
                <div className={style.plans}>
                    <div className={style.planBody}>
                        <p className={style.planHeader}><span>Pl</span>ans</p>
                        <div className={style.planSec}>
                            <div className={style.planCards}>
                                <span>Regular</span>
                                <p>#250,000</p>
                            </div>
                            <div className={style.planCards2}>
                                <span>Medium</span>
                                <p>#250,000</p>
                            </div>
                            <div className={style.planCards3}>
                                <span>Premium</span>
                                <p>#250,000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard