import { useEffect, useState } from "react"
import axios from "axios"

const useDashboard = () => {
    const [admin, setAdmin] = useState(false)
    const token = JSON.parse(localStorage.getItem("token"))
    const getId = JSON.parse(localStorage.getItem('id'))


    async function getData() {
        const res = axios.get(`https://medvault.onrender.com/api/gethospital/${getId}`,
            { headers: { "Authorization": `Bearer ${token}` } })
        return res
    }

    useEffect(() => {
        getData().then((res) => {
            setAdmin(res.data.data.isAdmin)
            console.log(res)
        })

    }, [getId])

    return (
        { admin }
    )
}

export default useDashboard