import React from 'react'
import { CiTrophy } from 'react-icons/ci';
import { PiStorefrontThin } from 'react-icons/pi';
import { TbGiftCard } from 'react-icons/tb';
import { Link, Navigate } from 'react-router-dom'; 
import menuData from './menuData';

const DropdownItem = ({closeModal}) => {

  return (
    <>
    <div className='text-white mt-8 mb-5 fixed-item'>
        <h3 className='p-3 flex items-center font-sm'>
            <span className='text-3xl font-extralight mr-2'><PiStorefrontThin/></span>
            Exclusive at Croma
        </h3>

        <hr/>
        <h3 className='p-3 flex items-center font-sm'>
            <span className='text-3xl font-extralight mr-2'><CiTrophy/></span>
            Top Brands
        </h3>
        <hr />
        <h3 className='p-3 flex items-center font-sm'>
            <span className='text-3xl font-extralight mr-2'><CiTrophy/></span>
            Croma Store Locator
        </h3>
        <hr />
        <h3 className='p-3 flex items-center font-sm'>
            <span className='text-3xl font-extralight mr-2'><TbGiftCard/></span>
            Gift Card
        </h3>
    </div>
   
   </>
  )
}

export default DropdownItem