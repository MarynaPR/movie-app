import React from 'react'
export default function HeaderIcon({Icon, title}) {
    return (
        <div className='mx-4 felx flex-col cursor-pointer hover:text-yellow-300 active:text-yellow-500 lg:mx-6'>
            <Icon className="h-8"/>
            <p className='my-2'>{title}</p>
        </div>
    )
}
