import React from 'react'
import OutSideClickHandler from "react-outside-click-handler"
import Title from "../ui/Title";
import {GiCancel} from "react-icons/gi"

const Search = ({setIsSearchModal}) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50
    after:content-[''] after:w-screen after:h-screen after:bg-white
    after:absolute after:top-0 after:left-0 after:opacity-60 grid place-content-center">
        <OutSideClickHandler onOutsideClick={()=>setIsSearchModal(false)}>
          <div className='w-full h-full grid place-content-center relative'>
          <div className='relative z-50 w-[600px] h-[600px bg-white border-2 p-5]'> 
            <Title addClass="text-[40px] text-center">Search</Title>
            <input
            type='text'
            placeholder='Search...'
            className='border w-full my-10'/>
            <ul>

            </ul>
            <button className='absolute top-4 right-4'
            onClick={()=>setIsSearchModal(false)}>
                <GiCancel size={25} className="transition-all"/>
            </button>
            </div>
          </div>
          </OutSideClickHandler>
    </div>
  )
}

export default Search