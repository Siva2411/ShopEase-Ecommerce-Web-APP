import React from 'react'
import { Wishlist } from '../common/WishList'
import { Link } from 'react-router-dom'


const Footer = ({content}) => {
  return (
    <div className='bg-black text-white py-8'>
        <div className='flex justify-around'>
            {content?.items?.map((item,index)=>{
                return (
                  <div className='flex flex-col'>
                  <p className='text-[16px] pb-[10px]'>{item?.title}</p>
                    {item?.list?.map((listItem,index)=><Link  key ={listItem?.label+index} className='flex flex-col text-[12px] py-2'
                     href={listItem?.path}>{listItem?.label}</Link>)}
                     {item?.description && <p>{item?.description}</p>}
                    </div>
                )
            })}
        </div>
        <div className='flex gap-2 items-center justify-center py-4'>
          <Link href='/fb'><Wishlist /></Link>
          <Link href='/insta'><Wishlist /></Link>  
        </div>
        <p className='text-sm text-white text-center content-center'>{content?.copyright}</p>

    </div>
  )
}


export default Footer