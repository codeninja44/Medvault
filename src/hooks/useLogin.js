import { useEffect, useState } from "react"

const useLogin = () => {
    const token = JSON.parse(localStorage.getItem("token"))
    const [login, setLogin] = useState(false)
    useEffect(() => {
        setLogin(!!token)
    }, [token])

    return (
        { login, setLogin }
    )
}

export default useLogin