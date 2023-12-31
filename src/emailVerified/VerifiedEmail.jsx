import style from './verifiedEmail.module.css'
import image from '../assets/email.png'
import { useNavigate } from 'react-router-dom'


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
                    // localStorage.setItem()
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
                    <h3 className={style.headText} style={{ paddingTop: "20px" }}>
                        {isVerified === 1 ? "Verifying Email..." : isVerified === 2 ? <div className={style.clickBtn}>
                            <p>Email Verified Successfully</p>
                            <p>Click to login</p>
                            <button className={style.loginBtn} onClick={() => nav("/login")}>Login</button>
                        </div> : "Verification Failed"}</h3>
                </div>

            </div>
        </>
    );
};

export default VerifiedEmail;