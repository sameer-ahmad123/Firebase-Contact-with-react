import React from 'react'
import { useState, useEffect } from 'react'
const Main = ({popup}) => {
   
    return (
        <div className='w-screen h-[83vh] flex items-center flex-col mt-6  relative '>
            {popup ? <div className="popup fixed z-1   border border-white bg-white h-60 w-[40%] rounded-2xl flex justify-center items-center gap-5 flex-col">
    <div className='flex justify-center items-center gap-3.5'>
    <p className='text-2xl'>Enter your name :</p>
    <input className='border border-black rounded-2xl px-4 py-1' type="text" placeholder='Enter Username'/>
    </div>
    <div  className='flex justify-center items-center gap-3.5'>
    <p className='text-2xl'>Enter your email :    </p>
    <input  className='border border-black rounded-2xl px-4 py-1' type="text border border-white" placeholder='Enter Email'/>
    </div>
</div> : ""}

            <div className='w-[40%] h-auto  flex justify-center items-center flex-col rounded-2xl z-0 absolute'>

                <div className='h-10 w-96 flex justify-around items-center py-8   rounded-3xl bg-amber-200 '>
                    <div className="left flex justify-center items-center gap-2">
                        <div className='logo'>
                            <span class="material-symbols-outlined !text-[40px] text-red-500 hover:text-red-700 hover:cursor-pointer transition-all">
                                account_box
                            </span>
                        </div>
                        <div className='info'>
                            <div className="username">Sameer ahmad</div>
                            <div className="email text-sm">sameerahmad@gmail.com</div>
                        </div>
                    </div>
                    <div className="right">
                        <div className='icons'>
                            <span class="material-symbols-outlined !text-[35px]  hover:text-red-700 hover:cursor-pointer transition-all">
                                edit
                            </span>
                            <span class="material-symbols-outlined !text-[35px] text-blue-500 hover:text-red-700 hover:cursor-pointer transition-all">
                                delete
                            </span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Main
