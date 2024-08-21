import React from 'react'

export default function PersonInfo(props) {
const { personInfo } = props
const { name, city, country, description, avatar, avatarAlt } = personInfo
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='pt-5'>
            <img className='rounded-full w-20 h-20' src={avatar} alt={avatarAlt}>
            </img>
        </div>
        <div className='p-4 text-center'>
            <h3 className='pb-1 text-white text-xl'>
                {name}
            </h3>
            <h2 className='text-xs text-yellow-400'>
                {city}, {country}
            </h2>
        </div>
        <div className='text-center'>
            <p className='text-gray-300 text-xs'>
            {description}
            </p>
        </div>
    </div>
  )
}
