import './alert.css'
import { useNavigate } from 'react-router-dom'

function Alert() {
  const nav = useNavigate()


  return (
    <>
      <div className='contain'>
        <div className='card'>
          <h2 className='passtext'>Password reset successful</h2>
          <button className='btnlog' onClick={() => nav('/login')}>Login</button>
        </div>
      </div>
    </>
  )
}

export default Alert
