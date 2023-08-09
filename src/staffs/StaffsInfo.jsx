import style from './staffsInfo.module.css'
import { useNavigate } from 'react-router-dom'

function StaffsInfo() {
    const nav = useNavigate()

    return (
        <div className={style.staffsInfo}>
            <div className={style.innerBody}>
                <div className={style.search}>
                    <div className={style.searchIcon}></div>
                    <p>Search</p>
                </div>
                <div className={style.info}>
                    <div className={style.infoDisplay}>
                        <div className={style.profileInfo}>
                            <div className={style.image}></div>
                            <p>Frank Ikenga</p>
                        </div>
                        <button className={style.delete}>Delete</button>
                    </div>
                </div>
                <div className={style.line}></div>
                <button className={style.create} onClick={() => nav('/createStaff')} style={{ cursor: 'pointer' }}>Create</button>
            </div>
        </div>
    )
}

export default StaffsInfo