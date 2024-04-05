import React from 'react'
import {AiFillStar} from 'react-icons/ai'

const ratingArr=[1,2,3,4,5]
const Card=({key,id,img,title,pricesell,pricedis,rating,name}) => {
  //console.log("rating", rating)

  if(rating) rating=Math.round(rating)

  return (
    <div className='bg-[#1e1e1e] p-5 min-w-[280px]'>
        <div className=''> 
           <img src={img} alt='images'/>
         </div>
         <div className='font-medium text-lg my-1'>
           {title}
         </div>
         <div className='font-medium text-lg my-1'>
           {name}
         </div>
         <div className='text-lg font-medium gap-1 flex items-center'>
              <span>{pricesell}</span>
              <delete className='font-normal text-sm line-through text-gray-500'>{pricedis}</delete>
         </div>
         <div className='text-gray-500 flex text-lg my-1'>
            {ratingArr.map((item)=>{
              let color = ''
              if(item <= rating) {
              color = 'text-[#12daa8]'
              }
            
            return(
               <AiFillStar className={color} key={item}/>
            )  
           })
              
            }
         </div>
    </div>
  )
}

export default Card