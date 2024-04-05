import React, { useEffect, useState } from 'react'
import DropdownItem from './DropdownItem'
import { PiStorefrontThin } from 'react-icons/pi';
import { CiTrophy } from 'react-icons/ci';
import { TbGiftCard } from 'react-icons/tb';
import {TfiAngleRight} from "react-icons/tfi"
import axios from 'axios';

const Menu = (props) => {
  const [menu, setMenu] = useState([])
  useEffect(()=>{
    axios({
      method: "GET",
      url:"https://academics.newtonschool.co/api/v1/ecommerce/electronics/categories",
      headers:{
        projectID: "f104bi07c490"
      }
      }).then(res => {
        setMenu(res.data.data)
      // console.log("res", res)
      })
      .catch(e => {
      console.error(e)
      })
  },[])
  if(props.show===false) return null
  
  return (
    <div className='absolute top-[2rem] left-[-10rem] w-[20rem] bg-[#353535] overflow-y-scroll'>
                    <section>
                      <ul className='pb-[1rem]'>
                        <li className=' px-[1rem] pt-[1rem] group hover:bg-[lightblue]'>
                          <div className='flex items-center gap-[.5rem] pb-[10px] border-b border-b-[white]'>
                          <CiTrophy className='group-hover:text-black text-[25px]' />
                          <a href='#' className='group-hover:text-black text-md font-semibold'>Exclusive At Croma</a>
                          </div>
                        </li>
                        <li className=' px-[1rem] pt-[1rem] group hover:bg-[lightblue]'>
                          <div className='flex items-center gap-[.5rem] pb-[10px] border-b border-b-[white]'>
                          <CiTrophy className='group-hover:text-black text-[25px]' />
                          <a href='#' className='group-hover:text-black text-md font-semibold'>Top Brands</a>
                          </div>
                        </li>
                        <li className=' px-[1rem] pt-[1rem] group hover:bg-[lightblue]'>
                          <div className='flex items-center gap-[.5rem] pb-[10px] border-b border-b-[white]'>
                          <PiStorefrontThin className='group-hover:text-black text-[25px]' />
                          <a href='#' className='group-hover:text-black text-md font-semibold'>Croma Store Locator</a>
                          </div>
                        </li>
                        <li className=' px-[1rem] pt-[1rem] group hover:bg-[lightblue]'>
                          <div className='flex items-center gap-[.5rem] pb-[10px]'>
                          <TbGiftCard  className='group-hover:text-black text-[25px]' />
                          <a href='#' className='group-hover:text-black text-md font-semibold'>Gift Card</a>
                          </div>
                        </li>
                        </ul>
                      </section>
                      <section className='bg-black'>
                        <div className='flex items-center font-bold px-[1rem] pt-[1rem] mt-1.5'>Shop by Category</div>
                         <ul className='grid '>
                          {
                            menu.map((item,index)=>{
                              return(
                                <li key={item} className=' px-[1rem] pt-[1rem] group hover:bg-[lightblue]'>
                                <div className='flex items-center justify-between gap-[.5rem] pb-[10px]'>
                                <a href='#' className='group-hover:text-black text-md text-[15px]'>{item}</a>
                                <TfiAngleRight className='group-hover:text-black row-start-1 row-end-4 text-[15px] '/>
                                </div>
                              </li>
                              )
                            })
                          }
                        
                        {/* <li className=' px-[1rem] pt-[1rem] group hover:bg-[lightblue]'>
                          <div className='flex items-center justify-between gap-[.5rem] pb-[10px]'>
                          <a href='#' className='group-hover:text-black text-md text-[15px]'>Home Appliances</a>
                          <TfiAngleRight className='text-[15px] '/>
                          </div>
                        </li>
                        <li className=' px-[1rem] pt-[1rem] group hover:bg-[lightblue]'>
                          <div className='flex items-center justify-between gap-[.5rem] pb-[10px]'>
                          <a href='#' className='group-hover:text-black text-md text-[15px]'>Phones & Wearables</a>
                          <TfiAngleRight className='text-[15px] '/>
                          </div>
                        </li>
                        <li className=' px-[1rem] pt-[1rem] group hover:bg-[lightblue]'>
                          <div className='flex items-center justify-between gap-[.5rem] pb-[10px]'>
                          <a href='#' className='group-hover:text-black text-md text-[15px]'>Computers & Tablets</a>
                          <TfiAngleRight className='text-[15px] '/>
                          </div>
                        </li>
                        <li className=' px-[1rem] pt-[1rem] group hover:bg-[lightblue]'>
                          <div className='flex items-center justify-between gap-[.5rem] pb-[10px]'>
                          <a href='#' className='group-hover:text-black text-md text-[15px]'>Kitchen Appliances</a>
                          <TfiAngleRight className='text-[15px] '/>
                          </div>
                        </li>
                        <li className=' px-[1rem] pt-[1rem] group hover:bg-[lightblue]'>
                          <div className='flex items-center justify-between gap-[.5rem] pb-[10px]'>
                          <a href='#' className='group-hover:text-black text-md text-[15px]'>Audio & Video</a>
                          <TfiAngleRight className='text-[15px] '/>
                          </div>
                        </li>
                        <li className=' px-[1rem] pt-[1rem] group hover:bg-[lightblue]'>
                          <div className='flex items-center justify-between gap-[.5rem] pb-[10px]'>
                          <a href='#' className='group-hover:text-black text-md text-[15px]'>Health & Fitness</a>
                          <TfiAngleRight className='text-[15px] '/>
                          </div>
                        </li>
                        <li className=' px-[1rem] pt-[1rem] group hover:bg-[lightblue]'>
                          <div className='flex items-center justify-between gap-[.5rem] pb-[10px]'>
                          <a href='#' className='group-hover:text-black text-md text-[15px]'>Grooming & Personal Care</a>
                          <TfiAngleRight className='text-[15px] '/>
                          </div>
                        </li>
                        <li className=' px-[1rem] pt-[1rem] group hover:bg-[lightblue]'>
                          <div className='flex items-center justify-between gap-[.5rem] pb-[10px]'>
                          <a href='#' className='group-hover:text-black text-md text-[15px]'>Cameras & Accessories</a>
                          <TfiAngleRight className='text-[15px] '/>
                          </div>
                        </li>
                        <li className=' px-[1rem] pt-[1rem] group hover:bg-[lightblue]'>
                          <div className='flex items-center justify-between gap-[.5rem] pb-[10px]'>
                          <a href='#' className='group-hover:text-black text-md text-[15px]'>Smart Devices</a>
                          <TfiAngleRight className='text-[15px] '/>
                          </div>
                        </li>
                        <li className=' px-[1rem] pt-[1rem] group hover:bg-[lightblue]'>
                          <div className='flex items-center justify-between gap-[.5rem] pb-[10px]'>
                          <a href='#' className='group-hover:text-black text-md text-[15px]'>Gaming</a>
                          <TfiAngleRight className='text-[15px] '/>
                          </div>
                        </li>
                        <li className=' px-[1rem] pt-[1rem] group hover:bg-[lightblue]'>
                          <div className='flex items-center justify-between gap-[.5rem] pb-[10px]'>
                          <a href='#' className='group-hover:text-black text-md text-[15px]'>Zipcare</a>
                          </div>
                        </li> */}
                           
                         </ul>
                      </section> 
                  </div>
//     <div className='menu'>
//         <div className='menu-container'>
//             <div>
//                 <DropdownItem closeModal={closeModal}/>
//             </div>
//         </div>
//     </div>
  )
}

export default Menu