import React from 'react'
import DropdownCheckboxButton from '../components/Dropdown/Dropdown'
import DropdownbrandCheckboxButton from '../components/Dropdown/Dropdownbrand'
import DropdownpriceCheckboxButton from '../components/Dropdown/Dropdownprice'
import ProductCard from '../components/productCard/ProductCard'


function productListing() {
  return (
    <>
    
    <h1 className='text-white text-[30px] w-100 mt-[18px] ml-[100px] font-bold'>Results For "..."</h1>
    <div className='flex ml-[75px] pt-[26px] gap-[7px]'>
    <DropdownCheckboxButton />
    <DropdownbrandCheckboxButton />
    <DropdownpriceCheckboxButton />
    </div>
    <div className='flex py-[70px] ml-[75px]'>
      <ProductCard />
    </div>
    
    </>
  )
}

export default productListing