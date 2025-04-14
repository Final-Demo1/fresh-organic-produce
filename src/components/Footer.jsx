import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-between m-20'>
        <section className='p-4'>
            <p className='font-bold text-lg'>Contact Us</p>
            <p>+233 789 9876</p>
            <p>greenbasket@gmail.com</p>
            <p>map</p>
        </section>
        <section className='p-4'>
            <p className='font-bold text-lg'>Social Links</p>
            <p>facebook</p>
            <p>instagram</p>
            <p>twitter</p>
        </section>

        <section className='font-bold text-lg'>
            <p>Gallery</p>
        </section>
    </footer>
  )
}

export default Footer