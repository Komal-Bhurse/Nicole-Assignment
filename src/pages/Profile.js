import React from 'react'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.jpg'
import img8 from '../images/img8.jpg'
import {Link} from 'react-router-dom'

function Profile() {
  return (
    <div className='container m-auto p-3 sm:w-80 bg-slate-100 overflow-hidden sm:rounded-3xl'>
      <div className='flex items-center justify-between'>
        <Link to={"/"}>
      <i className="fa-solid fa-arrow-left p-3 bg-stone-200 rounded-full"></i>
      </Link>
      <span className='text-xl font-bold text-stone-700'>Profile</span>
      <i className="fa-solid fa-pen p-3 bg-black text-white rounded-full"></i>
      </div>
      <div className='py-4 flex justify-center items-center'>
        <img className='w-40 rounded-3xl z-10 rotate-12' src={img6} alt='3d human face illustrator'/>
        <img className='w-48 h-52 rounded-3xl z-20' src={img8} alt='3d human face illustrator'/>
        <img className='w-40 rounded-3xl z-30 -rotate-12' src={img7} alt='3d human face illustrator'/>
      </div>
      <h3 className='text-center text-4xl font-bold mb-2'>Lay,<span className='mx-2 font-normal'>25</span><i className="fa-solid fa-circle-check text-xl text-green-500"></i></h3>
      <p className='text-center font-medium mb-3'>Prague, Czech Republic</p>
      <div className='flex items-center justify-center gap-2 mb-5'>
      <button className='p-3 bg-stone-200 rounded-xl'><i className="fa-brands fa-telegram text-2xl text-blue-400"></i></button>
      <button className='p-3 bg-stone-200 rounded-xl'><i className="fa-brands fa-discord text-2xl text-purple-500"></i></button>
      <button className='p-3 bg-stone-200 rounded-xl'><i className="fa-brands fa-facebook-messenger text-2xl text-pink-400"></i></button>
      <button className='p-3 bg-stone-200 rounded-xl'><i className="fa-brands fa-linkedin text-2xl text-blue-500"></i></button>
      </div>
      <div className='flex items-center justify-between p-3'>
       <span className='font-semibold text-lg text-black'>Interests</span>
       <span className='text-stone-500'>Edit</span>
      </div>
      <div className='flex gap-1 flex-wrap justify-center mb-7'>
        <span className='p-2 bg-pink-100 text-pink-500 rounded-3xl font-semibold'><i className="fa-solid fa-basketball mr-1"></i>Dribble</span>
        <span className='p-2 bg-red-100 text-red-500 rounded-3xl font-semibold'><i className="fa-solid fa-bolt mr-1"></i>Boxing</span>
        <span className='p-2 bg-yellow-100 text-yellow-500 rounded-3xl font-semibold'><i className="fa-solid fa-mug-hot mr-1"></i>Coffee</span>
        <span className='p-2 bg-blue-100 text-blue-500 rounded-3xl font-semibold'><i className="fa-solid fa-music mr-1"></i>Music</span>
        <span className='p-2 bg-pink-100 text-pink-500 rounded-3xl font-semibold'><i className="fa-solid fa-scissors mr-1"></i>Design</span>
        <span className='p-2 bg-red-100 text-red-500 rounded-3xl font-semibold'><i className="fa-solid fa-person-biking mr-1"></i>Cycling</span>
      </div>
      <div className='flex items-center justify-between px-3 text-2xl'>
        <Link to={"/lastpage"}>
      <i className="fa-solid fa-paste text-stone-400"></i>
      </Link>
      <i className="fa-solid fa-envelope text-stone-400"></i>
      <i className="fa-solid fa-heart text-stone-400"></i>
      <i className="fa-solid fa-user"></i>
      </div>
    </div>
  )
}

export default Profile