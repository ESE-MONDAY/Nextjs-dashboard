import Link from 'next/link'
import React from 'react';
import Image from 'next/image';
import {RxSketchLogo, RxDashboard, RxPerson} from 'react-icons/rx'
import {FiSettings } from 'react-icons/fi';
import {HiOutlineShoppingBag} from 'react-icons/hi'


const Sidebar = ({children}) => {
  return (
    <div className='flex'>
        <div className='fixed w-20 h-screen bg-white flex flex-col justify-between p-4 border-r-[1px]'>
            <div className='flex flex-col items-center'>
                <Link href="/">
                    <div className='bg-purple-900 text-white p-3 rounded-lg inline-block'>
                        <RxSketchLogo size={24} />
                    </div>
                </Link>
                <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
                <Link href="/">
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-lg my-4 p-3 inline-block'>
                        <RxDashboard size={24} />
                    </div>
                </Link>
                <Link href="/customers">
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-lg my-4 p-3 inline-block'>
                        <RxPerson size={24} />
                    </div>
                </Link>
                <Link href="/orders">
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-lg my-4 p-3 inline-block'>
                        <HiOutlineShoppingBag size={24} />
                    </div>
                </Link>
                <Link href="/">
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-lg my-4 p-3 inline-block'>
                        <FiSettings size={24} />
                    </div>
                </Link>

            </div>
            <div>

            </div>
        </div>
        <main className='ml-20 w-full'>{children}</main>
    </div>
  )
}

export default Sidebar