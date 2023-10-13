import React from 'react'
import logo from '../images/images/logo.png'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../Firebase'
import { useDispatch } from 'react-redux'
import { changeUser } from '../Redux/reducer'
export default function Login() {
  const dispatch = useDispatch()
  const handleLogin =() =>{
    signInWithPopup(auth,provider)
    .then((result)=> {
      dispatch(changeUser(result._tokenResponse))
      
    })
    .catch((error)=> console.log(error.message))

      
    
  }

  return (
    <div className='text-center pt-5'>
      <div>
        <img src={logo} alt="profile" width={400} height={400} className='pr-2'></img>
        </div>
      <div>
        <button className='btn btn-primary mt-5' onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}
