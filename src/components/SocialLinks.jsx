import React from 'react'

export default function SocialLinks(props) {
    const { children } = props
  return (
    <li className='bg-[#333333] hover:bg-yellow-300 px-20 py-3 rounded-md font-semibold text-center text-white text-xs hover:text-black transition duration-200 cursor-pointer'>
    {children}
    </li>
  )
}
