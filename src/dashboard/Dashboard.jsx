import style from './dashboard.module.css'
import image from '../assets/whiteLogo.png'
import { useNavigate } from 'react-router-dom'
import patientIcon from '../assets/patientIcon.png'
import profile from '../assets/profile.png'
import staff from '../assets/staff.png'
import home from '../assets/home.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Adminprofile from '../AdminProfile/Adminprofile'
import useDashboard from '../hooks/useDashboard'
import Swal from 'sweetalert2'



const token = JSON.parse(localStorage.getItem("token"))
const getId = JSON.parse(localStorage.getItem('id'))
const hospitalcode = JSON.parse(localStorage.getItem("hospitalcode"))
const staffId = JSON.parse(localStorage.getItem('staffID'))

function Dashboard() {
    const [userData, setUserData] = useState()
    const [dropDown, setDropDown] = useState(false)
    const [facilityname, setfacilityname] = useState('')
    const [email, setemail] = useState('')
    const [facilityaddress, setfacilityaddress] = useState('')
    const [facilityphone, setfacilityphone] = useState('')
    const [state, setstate] = useState('')
    const [city, setcity] = useState('')
    const [LGA, setLGA] = useState('')
    const [editLoad, setEditLoad] = useState(false)
    const [staffDetails, setStaffDetails] = useState()
    const [name, setName] = useState('')
    const [age, setage] = useState('')
    const [phoneNumber, setphoneNumber] = useState('')
    const [role, setrole] = useState('')
    const [allStaff, setallStaff] = useState([])
    const [patient, setPatient] = useState([])

    const allData = { facilityname, facilityaddress, email, facilityphone, state, city, LGA }
    const updateStaff = { name, age, phoneNumber, role }


    const login = useDashboard()

    // console.log(login.admin)

    const nav = useNavigate()

    const url = `https://medvault.onrender.com/api/logouthospital/${getId}`
 function ShowAlert(){
    Swal.fire({
        title: "Logout",
        icon: "warning",
        text: "Are you sure you want to log out?",
        showCancelButton: true,       
    }).then((result) => {
        if (result.isConfirmed){
            logout()
        }
    })
 }

    function logout() {
        // e.preventDefault()
        axios.post(url)
            .then((res) => {
                nav('/')
                localStorage.removeItem('token')
                localStorage.removeItem('hospitalcode')
                localStorage.removeItem('patientID')
                localStorage.removeItem('hospitaldetails')
                localStorage.removeItem('id')
            })
            .catch((err) => {
                console.log(err)
            })
    }




    async function getAdminData() {
        const res = axios.get(`https://medvault.onrender.com/api/gethospital/${getId}`,
            { headers: { "Authorization": `Bearer ${token}` } })
        return res
    }


    async function getStaffData() {
        const res = await axios.get(`https://medvault.onrender.com/api/getonestaff/${staffId}`,
            { headers: { "Authorization": `Bearer ${token}` } })
        return res
    }


    useEffect(() => {
        if (!token) return
        if (login.admin) {
            getAdminData().then((res) => {
                setUserData(res.data.data);
                setfacilityname(res.data.data.facilityname);
                setemail(res.data.data.email)
                setfacilityaddress(res.data.data.facilityaddress)
                setfacilityphone(res.data.data.facilityphone)
                setstate(res.data.data.state)
                setcity(res.data.data.city)
                setLGA(res.data.data.LGA)
                localStorage.setItem("hospitaldetails", JSON.stringify(userData.hospitalcode))
                console.log(res)
                setallStaff(res.data.data.staff)
                setPatient(res.data.data.patients)
            })
        }
        else {
            getStaffData().then((res) => {
                console.log(res)
                setStaffDetails(res.data.data)
                setName(res.data.data.name)
                setage(res.data.data.age)
                setphoneNumber(res.data.data.phoneNumber)
                setrole(res.data.data.role)
                setemail(res.data.data.email)
                localStorage.setItem("hospitaldetails", JSON.stringify(userData.hospitalcode))
            })

        }

    }, [token, login.admin])


    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const url3 = `https://medvault.onrender.com/api/updatehospitalinfo/${userData?.hospitalcode}`
    const updateProfile = (e) => {
        e.preventDefault()
        console.log("Hello There")
        setEditLoad(true)
        axios.put(url3, allData, config)
            .then((res) => {
                setEditLoad(false)
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
                setEditLoad(false)
            })
    }

    const url4 = `https://medvault.onrender.com/api/staffupdate/${staffDetails?.staffID}`
    const updateStaffProfile = (e) => {
        e.preventDefault()
        setEditLoad(true)
        axios.put(url4, updateStaff, config)
            .then((res) => {
                setEditLoad(false)
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
                setEditLoad(false)
            })
    }
    function payKorapay() {
        let key = `key${Math.random()}`
        window.Korapay.initialize({
            key: "pk_test_8XuQNe4HNzMi4fCLBvX1LqcKoQdmnarHUVp6iQ9s",
            reference: key,
            amount: 20000,
            currency: "NGN",
            customer: {
                name: "John Doe",
                email: "bc@gmail.com"
            },
            onClose: function () {
                // Handle when modal is closed
            },
            onSuccess: function (data) {
                // Handle when payment is successful


            },
            onFailed: function (data) {
                // Handle when payment fails
            }

        });
    }
    function payKorapay2() {
        let key = `key${Math.random()}`
        window.Korapay.initialize({
            key: "pk_test_8XuQNe4HNzMi4fCLBvX1LqcKoQdmnarHUVp6iQ9s",
            reference: key,
            amount: 50000,
            currency: "NGN",
            customer: {
                name: "John Doe",
                email: "bc@gmail.com"
            },
            onClose: function () {
                // Handle when modal is closed
            },
            onSuccess: function (data) {
                // Handle when payment is successful


            },
            onFailed: function (data) {
                // Handle when payment fails
            }

        });
    }
    function payKorapay3() {
        let key = `key${Math.random()}`
        window.Korapay.initialize({
            key: "pk_test_8XuQNe4HNzMi4fCLBvX1LqcKoQdmnarHUVp6iQ9s",
            reference: key,
            amount: 100000,
            currency: "NGN",
            customer: {
                name: "John Doe",
                email: "bc@gmail.com"
            },
            onClose: function () {
                // Handle when modal is closed
            },
            onSuccess: function (data) {
                // Handle when payment is successful


            },
            onFailed: function (data) {
                // Handle when payment fails
            }

        });
    }

    const totalStaff = allStaff.length
    const totalPatient = patient.length
    console.log(totalStaff)
    console.log(totalPatient)









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
                            {login.admin ? <div className={style.secondNav} onClick={() => nav('/staffInfo')} >
                                <div className={style.dashboardIcon2}>
                                    <img src={staff} alt="staff" />
                                </div>
                                <div className={style.text}>Staffs</div>
                            </div> : null}

                            <div className={style.navs} onClick={() => nav(`/api/hospitals/patient/${hospitalcode}`)}>
                                <div className={style.dashboardIcon}>
                                    <img src={patientIcon} alt="patientIcon" />
                                </div>
                                <div className={style.text}>Patients</div>
                            </div>
                        </div>
                    </div>
                    <div className={style.logout} onClick= {ShowAlert}style={{ cursor: 'pointer' }}>Logout</div>
                </div>
                <div className={style.leftSection}>
                    <div className={style.profile}>
                        <div className={style.profilePic} >
                            <img src={login.admin ? userData?.hospitalLogo?.url : staffDetails?.photo.url} alt="profile" />
                            <p onClick={() => setDropDown(!dropDown)} style={{ cursor: 'pointer' }}>View profile</p>
                        </div>
                        <div className={style.adminDetials}>
                            <p><span>Welcome</span>,{login.admin ? userData?.facilityname : staffDetails?.name}</p>
                            <div style={{ display: 'flex', gap: '20px', marginTop: "10px" }}>
                                <p className={style.id}>{login.admin ? 'Admin' : 'Staff'}</p>
                                <p style={{ fontSize: '15px', fontWeight: '600' }}>{login.admin ? userData?.hospitalcode : staffDetails?.staffID}</p>
                            </div>

                        </div>
                    </div>
                    <div className={style.hospitaldetails}>
                        {login.admin ? <div className={style.totals}>
                            <span>{totalStaff}</span>
                            <p>Staffs</p>
                        </div> : null}

                        <div className={style.totals}>
                            <span>{totalPatient}</span>
                            <p>Patients</p>
                        </div>
                    </div>
                    {login.admin ? <div className={style.plans}>
                        <div className={style.planBody}>
                            <p className={style.planHeader}><span>Pl</span>ans</p>
                            <div className={style.planSec}>
                                <div className={style.planCards} onClick={payKorapay}>
                                    <span>Regular</span>
                                    <p>&#8358;20,000</p>
                                </div>
                                <div className={style.planCards2} onClick={payKorapay2}>
                                    <span>Medium</span>
                                    <p>&#8358;50,000</p>
                                </div>
                                <div className={style.planCards3} onClick={payKorapay3}>
                                    <span>Premium</span>
                                    <p>&#8358;100,000</p>
                                </div>
                            </div>
                        </div>
                    </div> : null}

                </div>
            </div >
            {
                dropDown ? (<div className="dropDown">
                    <div className='Adminbody' >
                        <div className='Admincontain'>
                            <div className='Adminhead'>
                                <button style={{ height: '35px', width: '70px', borderRadius: '5px' }} onClick={login.admin ? updateProfile : updateStaffProfile}>{editLoad ? "updating..." : "Edit"}</button>
                                <div className="menu1">
                                    <span onClick={() => setDropDown(false)}>X</span>
                                </div>
                            </div>
                            <div className='Admincontainer'>
                                <div className='profileadmincontainer'>
                                    <h2>Profile</h2>
                                    <div className='curved'>

                                    </div>
                                </div>
                                <div className='adminprofilebody'>
                                    <div className='profilefnamecon'>
                                        <h2>{login.admin ? "Facility name" : 'Staff name'}</h2>

                                        <input className='profilefnameAdmin' value={login.admin ? facilityname : name} onChange={login.admin ? (e) => setfacilityname(e.target.value) : (e) => setName(e.target.value)} />
                                    </div>

                                    <div className='profilefphonecon'>
                                        <h2>{login.admin ? "Facility phone number" : 'Staff Phone Number'}</h2>
                                        <input className='profilefphoneAdmin' value={login.admin ? facilityphone : phoneNumber} onChange={login.admin ? (e) => setfacilityphone(e.target.value) : (e) => setphoneNumber(e.target.value)} />
                                    </div>

                                    <div className='profilefemailcon'>
                                        <h2>{login.admin ? "Facility Email" : 'Staff Email'}</h2>
                                        <input className='profilefemailAdmin' value={email} onChange={(e) => setemail(e.target.value)} />
                                    </div>



                                    <div className='profilefaddresscon'>
                                        <h2>{login.admin ? "Address" : 'Role'}</h2>
                                        <input className='profilefaddressAdmin' value={login.admin ? facilityaddress : role} onChange={(e) => setfacilityaddress(e.target.value)} />
                                    </div>

                                    <div className='profilefhoscon'>
                                        <h2>Hosipital Code </h2>
                                        <input className='profilefhosAdmin' value={login.admin ? userData?.hospitalcode : staffDetails?.hospitalcode} disabled />
                                    </div>

                                    <div className='profilefstatecon'>
                                        <h2>{login.admin ? "State" : 'Age'}</h2>
                                        <input className='profilefstateAdmin' value={login.admin ? state : age} onChange={login.admin ? (e) => setstate(e.target.value) : (e) => setage(e.target.value)} />
                                    </div>
                                    {login.admin ? <div style={{ height: '25%', width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column', paddingBottom: '30px', gap: '20px' }}>
                                        <div className='profilefcitycon' >
                                            <h2>City</h2>
                                            <input className='profilefcityAdmin' value={city} onChange={(e) => setcity(e.target.value)} style={{ height: "35px", width: '210px' }} />
                                        </div>

                                        <div className='profileflgacon'>
                                            <h2>L.G.A</h2>
                                            <input className='profileflgaAdmin' value={LGA} onChange={(e) => setLGA(e.target.value)} style={{ height: "35px", width: '210px' }} />
                                        </div>
                                    </div> : null
                                    }





                                </div>
                            </div>
                        </div>

                    </div>

                </div>) : null
            }
        </>

    )
}

export default Dashboard