import React from 'react'
import Image from 'next/image'
import KmitLogo from "../../assets/sjsu_logo.jpg" // Placeholder logo

export default function About() {
  return (
    <div>
      <div>
        <p className='text-xl lg:text-2xl lg:mb-2 mb-1 heading-primary font-bold' id='education'>About</p>
        <div className='w-[75px] h-[4px] rounded-full bg-[#64ffda]' />
        <div className='flex flex-col p-[1px] rounded-lg my-4 bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-800'>
          <div className='flex flex-col p-4 rounded-lg bg-neutral-900/80'>
            <p className='text-md font-semibold lg:text-[16px]'>
            As a software developer at EKSAQ, I specialize in building scalable backend systems and real-time applications. I have a proven track record of delivering production-ready solutions from scratch, with expertise in distributed systems, cloud infrastructure, and full-stack development. I&apos;m passionate about solving complex technical challenges and creating efficient, maintainable code.
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='text-xl lg:text-2xl lg:mb-2 mb-1 heading-primary font-bold' id='education'>Education</p>
        <div className='w-[75px] h-[4px] rounded-full bg-[#64ffda]' />
        <div className='flex flex-row rounded-lg py-2 md:p-4 gap-4 lg:gap-12 items-center'>
          <div className='rounded-full'>
            <Image src={KmitLogo} alt="Keshav Memorial Institute of Technology" width={125} height={125} className="rounded-full border-2 border-gray-800 select-none" />
          </div>
          <div className='text-[14px] md:text-[16px]'>
            <p className='font-bold'>
              B.Tech in Computer Science and Engineering
            </p>
            <p className='font-semibold'>
              Keshav Memorial Institute of Technology,<br className='md:hidden' /> Hyderabad, Telangana
            </p>
            <p className='font-semibold'>
              Graduated : <br className='md:hidden' />2020 – 2024
            </p>
            <p className='font-semibold'>
              GPA: 8.6 / 10
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2 mt-6'>
        <p className='text-xl lg:text-2xl lg:mb-2 mb-1 heading-primary font-bold' id='achievements'>Achievements</p>
        <div className='w-[75px] h-[4px] rounded-full bg-[#64ffda]' />
        <div className='flex flex-col p-[1px] rounded-lg my-4 bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-800'>
          <div className='flex flex-col p-4 rounded-lg bg-neutral-900/80 gap-2'>
            <p className='text-md font-semibold lg:text-[16px] flex items-start'>
              <span className='text-[#64ffda] mr-2'>•</span>
              <span>Global Rank <b>464</b> in TCS CodeVita Season 11</span>
            </p>
            <p className='text-md font-semibold lg:text-[16px] flex items-start'>
              <span className='text-[#64ffda] mr-2'>•</span>
              <span><b>Knight Badge</b> on LeetCode (Top 4.46% globally)</span>
            </p>
            <p className='text-md font-semibold lg:text-[16px] flex items-start'>
              <span className='text-[#64ffda] mr-2'>•</span>
              <span><b>3-star</b> coder at CodeChef (nitin_0108)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}