import React from 'react'

const Contact = () => {
  return (
    <form className='ml-100 p-20 font-bold' action="contact">
      <p className='pb-5 font-bold text-2xl'>
        <h1>Contact Us Now!</h1>
      </p>

      <div className='pb-5'>
      <label htmlFor="name">Full Name</label>
      <input className='block w-100 border-2 rounded-md h-10' type="text" id='name' />
      </div>

      <div className='pb-5'>
      <label htmlFor="email">Email</label>
      <input className='block w-100 border-2 rounded-md h-10' type="text" id='name' />
      </div>

      <div className='pb-5'>
      <label htmlFor="phone number">Phone Number</label>
      <input className='block w-100 border-2 rounded-md h-10' type="number" id='phone number' />
      </div>

      <div className='pb-5'>
      <label htmlFor="name">Message</label>
      <textarea className='block w-100 border-2 rounded-md h-50' name="message" id="message"></textarea>
      </div>

      <div className='pb-5'>
      <button className='border-2 bg-green-700 text-lg rounded-md w-100 h-20' type='submit'>Submit</button>
      </div>
    </form>
   
  )
}

export default Contact