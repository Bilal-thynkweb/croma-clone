import React from 'react'

const Card=({key,id,img,title,pricesell,pricedisc}) => {
  return (
    <div className='bg-[#1e1e1e] p-5 min-w-[280px]'>
        <div className=''> 
           <img src={img} alt='images'/>
         </div>
         <div className=''>
           {/* {title} */}
         </div>
    </div>
  )
}

export default Card