
function Resendmail() {
    const email = JSON.parse(localStorage.getItem("email"))
    console.log(email)
    return (
        <div>
            <input type="text" placeholder="Email" value={email} disabled />
            <button>send email</button>
        </div>
    )
}

export default Resendmail