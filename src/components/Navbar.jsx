import React from 'react'
import { useState,useEffect } from 'react'
const Navbar = ({setpopup}) => {
    const [contacts, setcontacts] = useState([])
    const [input, setinput] = useState("")
    

    return (
        <div className='flex h-[11vh] w-screen  justify-around items-center bg-slate-900'>
            <div>
                <p><img className='h-40 w-40' src="./firebase.svg" alt="" /></p>
            </div>
            <div className='flex justify-center items-center gap-5'>
                <input onChange={(e)=>{setinput(e.target.value)}} placeholder='Search contact...' className='border border-white rounded-lg text-white h-7 w-72 px-2 py-5' type="text" />
                <button onClick={() => { setpopup((prev) => !prev) }} className='flex justify-center items-center hover:cursor-pointer hover:scale-105 transition-all duration-200'><span class="material-symbols-outlined bg-white text-black rounded-full px-1.5 py-1.5  hover:cursor-pointer hover:scale-105 transition-all duration-200">add</span></button>
            </div>
        </div>
    )
}

export default Navbar
