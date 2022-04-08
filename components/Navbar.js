import React from 'react'
import requests from '../utils/requests'
import { useRouter } from 'next/router'

export default function Navbar() {

  const router = useRouter()

  return (
    <dev className= "flex justify-center bg-slate-700 text-rose-500 select-none text-xl lg:text-2xl">
      {Object.entries(requests).map(([key, { title, url }]) => (

      <h2 onClick ={ ()=>(router.push(`?genre=${key}`))} className='m-6 cursor-pointer hover:text-white active:text-yellow-200'
      key={key}>{title}</h2>
    
   )) }
    </dev>
  )
}
