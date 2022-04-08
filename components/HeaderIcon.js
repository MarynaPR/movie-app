import React from 'react'
export default function HeaderIcon({Icon, title}) {
    return (
        <div className='mx-4 felx flex-col cursor-pointer hover:text-rose-500 active:text-slate-400 lg:mx-6'>
            <Icon className="h-8"/>
            <p className='my-2'>{title}</p>
        </div>
    )
}
