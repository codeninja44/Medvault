import style from './verifiedEmail.module.css'
import image from '../assets/email.png'
import { useNavigate } from 'react-router-dom'

// function VerifiedEmail() {
//     const nav = useNavigate()

//     return (
//         <main className={style.body}>
//             <div className={style.card}>
//                 <div className={style.emailImage}>
//                     <img src={image} alt="Email" />
//                 </div>
//                 <div className={style.textArea}>
//                     <div className={style.headText}>Email Veridied Successfully</div>
//                     <div className={style.clickBtn}>
//                         <p>Click to login</p>
//                         <button className={style.loginBtn} onClick={() => nav('/login')}>Login</button>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     )
// }

// export default VerifiedEmail

import { useEffect, useState } from "react";
// import "./Verify.css";
import { BsFillNutFill, BsInfoCircle } from "react-icons/bs";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const VerifiedEmail = () => {
    const { token } = useParams();
    const [isVerified, setIsVerified] = useState(1)
    console.log(token)
    const nav = useNavigate()

    useEffect(() => {
        const verifyUser = () => {
            axios
                .post(`https://medvault.onrender.com/api/verifyemail/${token}`)
                .then((res) => {
                    console.log(res);
                    setIsVerified(2)
                })
                .catch((err) => {
                    console.log("Error response:", err);
                    setIsVerified(3)
                });
        };
        verifyUser()
    }, []);



    return (
        <>
            <div className={style.body}>
                <div className={style.card}>
                    <div className={style.emailImage}>
                        <img src={image} alt="Email" />
                    </div>
                    <h3 className={style.headText}>{isVerified === 1 ? "Verifying Email..." : isVerified === 2 ? "Email Verified Successfully" : "Verification Failed"}</h3>
                    <div className={style.clickBtn}>
                        <p>Click to login</p>
                        <button className={style.loginBtn} onClick={() => nav("/login")}>Login</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VerifiedEmail;