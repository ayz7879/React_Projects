import React from 'react'

const Navbar = () => {
  return (
    <nav className='d-flex justify-content-around bg-dark text-light p-3 text-center'>
        <h3 className='bg-dark '>To-Do-List App Create By Ashish...</h3>
        <div className='d-flex gap-5 bg-dark  '>
            <h3 style={{fontSize:"1.5rem"}} className='bg-dark  btn btn-primary py-0 px-5 font-monospace text-center'>Home</h3>
            <h3 style={{fontSize:"1.5rem"}} className='bg-dark btn btn-danger py-0 px-5 font-monospace '>Contact</h3>
        </div>
    </nav>
  )
}

export default Navbar