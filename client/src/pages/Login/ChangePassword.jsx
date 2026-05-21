import React , {useState, useEffect} from 'react'
import { useForm } from 'react-router-dom'

function ChangePassword() {
  const [email, setEmail]=useState('')
  const {register, handleSubmit,
     formstate:{error}}=useForm()
  return (
    <div>
      <h1>ChangePassword</h1>
      <br />
      <input type="email" onChange={(e)=>{setEmail(e.target.value)}} className='border' placeholder='abc@email.com'/>
    </div>
  )
}

export default ChangePassword