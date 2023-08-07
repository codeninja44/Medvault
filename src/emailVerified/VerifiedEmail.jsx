import style from './verifiedEmail.module.css'
import image from '../images/email.png'
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
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const VerifiedEmail = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get("token");
    const [verificationStatus, setVerificationStatus] = useState("");

    useEffect(() => {
        if (token) {
            // Only initiate verification if the token is present in the URL
            verifyUser(token);
        }
    }, [token]);

    const verifyUser = (token) => {
        axios
            .put(`https://medvault.onrender.com/api/verifyemail/${token}`)
            .then((res) => {
                console.log(res);
                setVerificationStatus("user verified");
            })
            .catch((err) => {
                console.log("Error response:", err);
                setVerificationStatus("error verifying user, try again");
            });
    };

    return (
        <>
            <div className={style.body}>
                <div className={style.card}>
                    <div className={style.emailImage}>
                        <img src={image} alt="Email" />
                    </div>
                    <h3 className={style.headText}>Email Veridied Successfully</h3>
                    {verificationStatus === "user verified" ? (
                        <div className={style.clickBtn}>
                            <p>Click to login</p>
                            <button className={style.loginBtn} onClick={() => nav('/login')}>Login</button>
                        </div>
                    ) : null
                        // (
                        // <>
                        //     <p>
                        //         A link was sent to you at the email address provided
                        //     </p>
                        //     <p>
                        //         Please verify your email address to complete the
                        //         registration process
                        //     </p>
                        //     <p>
                        //         Didnt get the email? Click{" "}
                        //         <span
                        //             style={{
                        //                 color: "purple",
                        //                 cursor: "pointer",
                        //             }}
                        //         >
                        //             here
                        //         </span>{" "}
                        //         to resend email
                        //     </p>
                        // </>
                        // )
                    }
                </div>
            </div>
        </>
    );
};

export default VerifiedEmail;