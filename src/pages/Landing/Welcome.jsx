import React from 'react'
import veggies3 from '../../assets/images/veggies3.png'

export const Welcome = () => {
  return (
    <section className=' flex m-10 p-20 font-bold text-xl'>
      <div className='p-20'>
      <p className='text-3xl pb-5'>Health is Wealth!</p>
      <p>Welcome to <br />Organic <span className='text-green-500'>Green</span> Basket!</p> <br />
      <p>We value your health knowing that it is your Greatest Wealth</p>
      <a href="about">Here is <span className='text-red-600'>Our Story</span></a>
      </div>

      <div className='ml-20'>
      <img src={veggies3} alt="vegetables" />
      </div>

    </section>
    
  )
}
