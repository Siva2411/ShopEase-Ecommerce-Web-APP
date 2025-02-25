import React from 'react'

function SectionHeading({title}) {
  return (
    <div className='flex flex-row my-2 px-12 py-2 items-center gap-4'>
      <span className='bg-black w-1.5 h-10 border rounded'></span>
      <h2 className='font font-semibold text-black text-2xl'>{title}</h2>
    </div>
  )
}

export default SectionHeading