import React from 'react'
import img1 from '../images/img1.jpg'
import img6 from '../images/img6.jpg'
import img3 from '../images/img3.jpg'
import img8 from '../images/img8.jpg'
import {Link} from 'react-router-dom'

function LastPage() {
  return (
    <div className='container m-auto p-3 sm:w-80 bg-slate-100 overflow-hidden sm:rounded-3xl'>
     <div className='flex items-center justify-between'>
      <div className='flex items-center justify-center gap-2'>
      <img className='w-10 h-10 rounded-full' src={img8} alt='profile'/>
      <span className='font-bold text-lg'><span className='text-stone-600 font-semibold mr-1'>Hi,</span>Lay</span>
      </div>
      <span className=' text-xl text-center'>
      <i className="fa-solid fa-location-dot mr-4"></i>
      <i className="fa-solid fa-bell"></i>
      </span>
     </div>
     <div className=' relative mb-44 mt-7'>
      <img className='m-auto w-64 h-72 rotate-[40deg] translate-x-20 rounded-3xl' src={img3} alt='profile'/>
      <img className='absolute left-16 top-4 w-64 h-72 rotate-[20deg] rounded-3xl' src={img1} alt='profile'/>
      <img className='absolute left-5 top-12 w-64 h-96 rounded-3xl' src={img6} alt='profile'/>
      <i className="fa-solid fa-video p-3 bg-gray-200 text-white rounded-full absolute top-16 left-9"></i>
      <i className="fa-solid fa-volume-high p-3 bg-gray-100 text-orange-300 rounded-full absolute top-28 left-9"></i>
      <i className="fa-solid fa-microphone p-3 px-4 bg-gray-200 text-white rounded-full absolute top-40 left-9"></i>
      <h3 className='absolute top-60 left-9 text-center text-4xl font-bold mb-2 text-white'>Jenny,<span className='mx-2 font-normal'>25</span></h3>
      <p className='absolute top-72 left-9 text-center font-medium mb-3 text-white'>Prague, indonesia</p>
      <span className='absolute p-2 py-3 top-96 left-28 bg-white rounded-full'>
        <span className='px-1 py-5 border-stone-800 rounded-full border-r-2 border-b-2'>
        <i className="p-4 px-5 bg-stone-800 text-white rounded-full fa-solid fa-pause"></i>
        </span>
      </span>
      
     </div>
     <div className='flex items-center justify-center gap-5 mb-5'>
     <i className="fa-solid fa-xmark text-3xl p-2 px-3 bg-red-400 text-white rounded-full"></i>
     <i className="fa-solid fa-hand-dots text-2xl text-yellow-400"></i>
     <i className="fa-solid fa-heart text-2xl p-3 bg-purple-500 text-white rounded-full"></i>
     </div>
     <div className='flex items-center justify-between px-3 text-2xl'>
      <i className="fa-solid fa-paste"></i>
      <i className="fa-solid fa-envelope text-stone-400"></i>
      <i className="fa-solid fa-heart text-stone-400"></i>
      <Link to={"/profile"}>
      <i className="fa-solid fa-user text-stone-400"></i>
      </Link>
      </div>
    </div>
  )
}

export default LastPage