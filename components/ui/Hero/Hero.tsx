import React, { FC } from 'react'
import { Container } from '@components/ui'
import { ArrowRight } from '@components/icons'
import s from './Hero.module.css'
import Link from 'next/link'
interface HeroProps {
  className?: string
  headline: string
  description: string
}

const Hero: FC<HeroProps> = ({ headline, description }) => {
  return (
    <div className="sm:text-base lg:text-left">
    <div className='relative pl-10 '>
    <h1 className=" pt-10 text-3xl md:text-4xl tracking-tight font-mediumtext-gray-900 sm:text-5xl md:text-6xl">
      <span className="block xl:inline "> Welcome to</span> <br/>{' '}
      <span className=" font-semibold block text-2xl md:text-8xl text-indigo-600 xl:inline">OneColourHoodie</span>
    </h1>
    <p className=" mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
      We sell OneColourHoodies
    </p>
    <div className=" mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
      <div className="rounded-md shadow">
        <a
          href="/search"
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
        >
          Get started
        </a>
      </div>

    </div>
   </div>
   <div className="lg: lg:inset-y-0 lg:top-0 -mt-80 -z-0">
              <img
          className="h-full w-full object-cover sm:bg-cover sm:h-72 md:h-full lg:w-full lg:full"
          src="./main.jpg"
          alt=""
                />


    </div>
    </div>

  )
}

export default Hero
