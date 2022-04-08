import React from 'react'
import Image from 'next/image'
import HeaderIcon from './HeaderIcon'
import { HomeIcon, UserIcon, PhoneIcon, InformationCircleIcon } from '@heroicons/react/solid'


export default function Header() {
    return (
        <div className='bg-slate-900 text-rose-50  flex flex-col items-center p-6 select-none sm:flex-row justify-between'>
            <div className='flex'>
                <HeaderIcon Icon={HomeIcon} title="HOME" />
                <HeaderIcon Icon={InformationCircleIcon} title="ABOUT" />
                <HeaderIcon Icon={UserIcon} title="ACCOUNT" />
                <HeaderIcon Icon={PhoneIcon} title="CONTACT" />
            </div>
            <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/220px-IMDB_Logo_2016.svg.png"
                alt=''
                width={100}
                height={50}
                className="cursor-pointer active:brightness-125"
            />

        </div>

    )
}
