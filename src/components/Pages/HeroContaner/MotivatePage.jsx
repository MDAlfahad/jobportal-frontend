import React from 'react'
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { GoArrowRight } from "react-icons/go"

const MotivatePage = () => {
  return (
    <div className='flex flex-col items-center gap-8 max-w-[1800px] m-auto py-4 lg:py-20 px-6 md:px-12 dark:bg-black'>
        <div>
            <h1 className='text-4xl lg:text-6xl xl:text-8xl font-semibold flex items-center gap-2 dark:text-white '>Why Choose Us  <GoArrowRight /></h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:w-[800px]'>
            <div className='px-6 py-4 bg-gray-50 rounded-xl border border-gray-300 shadow-sm lg:w-96 h-40 flex items-center justify-center gap-2 dark:bg-gray-900 dark:border-none dark:text-white'>
                <span className='text-3xl font-semibold'>Smart</span> Design For Better Exper ience
            </div>
            <div className='px-6 py-4 bg-gray-50 rounded-xl border border-gray-300 shadow-sm lg:w-96 h-40 flex items-center justify-center gap-2 dark:bg-gray-900 dark:border-none dark:text-white'>
                <span className='text-3xl font-semibold'>50+ </span>Jobs/Internship Post Weekly
            </div>
            <div className='px-6 py-4 rounded-xl border border-gray-300 shadow-sm  lg:w-96 h-40 flex items-center justify-center gap-2 bg-secondary dark:border-none dark:text-white '>
                <span className='text-3xl font-semibold'>50+</span> Companies
            </div>
            <div className='px-6 py-4 rounded-xl border border-gray-300 shadow-sm  lg:w-96 h-40 flex items-center justify-center gap-2  dark:text-white '>
                <span className='text-3xl font-semibold'>Daily 10+</span> Internship posts
            </div>
        </div>
    </div>
  )
}

export default MotivatePage