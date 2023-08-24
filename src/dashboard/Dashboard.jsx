import style from './dashboard.module.css'
// import style from './dashboardmobile.module.css'
import image from '../assets/whiteLogo.png'
import { useNavigate } from 'react-router-dom'
import patientIcon from '../assets/patientIcon.png'
import profile from '../assets/profile.png'
import staff from '../assets/staff.png'
import home from '../assets/home.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Adminprofile from '../AdminProfile/Adminprofile'

// import profileIcon from '../assets/profileIcon.png'
// import dashboard from '../assets/dashboard.png'


const token = JSON.parse(localStorage.getItem("token"))
const getId = JSON.parse(localStorage.getItem('id'))
const hospitalcode = JSON.parse(localStorage.getItem("hospitalcode"))

// import image from '../images/home.png'

function Dashboard() {
    const [userData, setUserData] = useState(null)
    const nav = useNavigate()

    const url = `https://medvault.onrender.com/api/logouthospital/${getId}`

    function logout(e) {
        e.preventDefault
        axios.post(url)
            .then((res) => {
                nav('/')
                localStorage.setItem("token", JSON.stringify(''))
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    async function getData() {
        const res = axios.get(`https://medvault.onrender.com/api/gethospital/${getId}`,
            { headers: { "Authorization": `Bearer ${token}` } })
        return res
    }

    useEffect(() => {
        getData().then((res) => setUserData(res.data.data))

    }, [])




    console.log(userData)
    const hospitaldetails = localStorage.setItem("hospitaldetails", JSON.stringify(userData))
    // const nav = useNavigate()

    return (
        <>
            <div className={style.dashboardBody}>
                <div className={style.rightNav}>
                    <div className={style.top}>
                        <div className={style.logo} onClick={() => nav('/')}>
                            <img src={image} alt="image" />
                        </div>
                        <div className={style.navSec}>
                            <div className={style.firstNav} onClick={() => nav('/')}>
                                <div className={style.dashboardIcon1}>
                                    <div className={style.dashboardhomeicon}>
                                        <img src={home} alt="" />
                                    </div>
                                </div>
                                <div className={style.text}>Home</div>
                            </div>
                            <div className={style.secondNav} onClick={() => nav('/staffInfo')}>
                                <div className={style.dashboardIcon2}>
                                    <img src={staff} alt="staff" />
                                </div>
                                <div className={style.text}>Staffs</div>
                            </div>
                            <div className={style.navs} onClick={() => nav(`/api/hospitals/patient/${hospitalcode}`)}>
                                <div className={style.dashboardIcon}>
                                    <img src={patientIcon} alt="patientIcon" />
                                </div>
                                <div className={style.text}>Patients</div>
                            </div>
                        </div>
                    </div>
                    <div className={style.logout} onClick={logout} style={{ cursor: 'pointer' }}>Logout</div>
                </div>
                <div className={style.leftSection}>
                    <div className={style.profile}>
                        <div className={style.profilePic}>
                            <img src={userData?.hospitalLogo?.url} alt="profile" />
                            <p>View profile</p>
                        </div>
                        <div className={style.adminDetials}>
                            <p><span>Welcome</span>,{userData?.facilityname}</p>
                            <p className={style.id}>Admin</p>
                            <p>{userData?.hospitalCode}</p>
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
            </div >
            <Adminprofile />
        </>

    )
}

export default Dashboard