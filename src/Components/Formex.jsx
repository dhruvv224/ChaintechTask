import React, { useState } from 'react'
import './Form.css'
const Formex = () => {
    const [FormData,setFormData]=useState({
        firstName:'',
        lastName:'',
        phoneNumber:'',
        email:'',
        password:'',
        confirmPasss:''
    })
const handlesubmit=(e)=>{
    e.preventDefault()


}

  return (
    <div className='max-w-7xl mx-auto mt-3 main'>
        <div className='form-container'>

        <form className='form' onSubmit={handlesubmit}>
            <h2 className='text-xl font-medium text-center mb-2 text-[#919090] mb-'>Registration Form</h2>
            <div className='form-group'>
                <label htmlFor='firstName'>First Name</label>
                <input type='text' value={FormData.firstName} onChange={''} name='firstName'/>

            </div>
            <div className='form-group'>
                <label htmlFor='firstName'>Last Name</label>
                <input type='text' value={FormData.lastName} onChange={''} name='lastName'/>

            </div>
            <div className='form-group'>
                <label htmlFor='firstName'>Phonenumber</label>
                <input type='tel' value={FormData.phoneNumber} onChange={''} name='phoneNumber'/>

            </div>
            <div className='form-group'>
                <label htmlFor='firstName'>Enter email</label>
                <input type='email' value={FormData.email} onChange={''} name='email'/>

            </div>
            <div className='form-group'>
                <label htmlFor='firstName'>Password</label>
                <input type='password' value={FormData.password} onChange={''} name='password'/>

            </div>
            <div className='form-group'>
                <label htmlFor='firstName'>Confirm Password</label>
                <input type='password' value={FormData.confirmPasss} onChange={''} name='confirmPass'/>

            </div>
<button className='btn-su' type='submit'>Submit</button>

        </form>
        </div>


    </div>
  )
}

export default Formex