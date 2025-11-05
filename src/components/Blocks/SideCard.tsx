import React, { useState } from 'react'
import Image from 'next/image'
import profile from "@/assets/profile.png";
import ArrowIcon from "@/components/icons/arrowIcon";
import LocationIcon from "@/components/icons/location";
import PhoneIcon from "@/components/icons/phoneIcon";
import IconGitHub from "@/components/icons/github";
import IconLinkedin from "@/components/icons/linkedin";
import IconLeetCode from "@/components/icons/leetcode";
import EmailIcon from '../icons/emailIcon';

const SideCard = () => {
  const [showContacts, setShowContacts] = useState(false);
  return (
    <div className="p-4 relative lg:p-8 flex flex-col lg:gap-1 bg-neutral-900 border-[1px] border-neutral-700 rounded-3xl h-fit transition-all duration-300">
      <div className={`absolute flex lg:hidden top-0 right-0 w-8 h-8 md:w-36 p-[1px] items-center justify-center shadow-lg bg-gradient-to-br rounded-bl-2xl rounded-tr-3xl cursor-pointer ${showContacts ? "from-[#64ffda] via-neutral-800 to-neutral-800 transition-all duration-400" : "from-neutral-600 via-neutral-800 to-neutral-800 transition-all duration-400"}`} onClick={() => setShowContacts(prev => !prev)}>
        <div className={`bg-neutral-900 transition-all duration-300 rounded-bl-2xl rounded-tr-3xl w-full h-full flex items-center justify-center gap-2`}>
          <p className="hidden md:flex lg:hidden text-[#64ffda] font-semibold text-sm">Show Contacts</p>
          <svg xmlns="http://www.w3.org/2000/svg" className={`flex w-4 h-4 lg:hidden ${showContacts ? "rotate-180 transition-all duration-300" : "transition-all duration-300"}`} viewBox="0 0 512 512" fill="none">
            <path
              d="M112 184l144 144 144-144"
              stroke="#64ffda"
              strokeWidth="48"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-row gap-4 md:gap-8 lg:gap-2 w-full lg:flex-col items-center lg:justify-center">
          <div className="rounded-2xl w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-neutral-600 to-neutral-700 relative">
            <div className="w-full h-full overflow-hidden rounded-2xl">
              <Image
                src={profile}
                alt="profile"
                className="object-cover w-full h-full select-none"
                fill={false}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <span className="hidden lg:flex absolute -bottom-0.5 -right-0.5 size-3.5 items-center justify-center">
              <span
                className="absolute inline-flex h-full w-full rounded-full bg-green-400 animate-ping opacity-75"
              ></span>
              <span className="relative inline-flex size-2.5 rounded-full bg-green-500"></span>
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold text-[#ffffff] text-center">
              Nitin Reddy Gogula
            </p>
            <div className="flex flex-col gap-4 items-start lg:items-center text-md font-semibold">
                <p className="flex px-4 py-1 rounded-md">
                  Associate Software Developer
                </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`
        grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        lg:grid-rows-[1fr] lg:opacity-100
        ${showContacts ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
      `}
      >
        <div className="overflow-hidden lg:overflow-visible">
          <div className={`lg:flex w-full h-px my-4 bg-neutral-700`} />
          <div className='w-full flex gap-4 flex-col lg:items-center'>
            <div className={`flex`}>
              <div className="rounded-lg bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-800 p-[0.75px] shadow-lg flex items-center justify-center">
                <div className="px-4 py-1 rounded-lg bg-neutral-900/80 flex flex-row items-center cursor-pointer view-full-resume-archive" onClick={() => { window.open('https://drive.google.com/file/d/1zafrWETh6iuBet0MFMYsIfpCVKY1AoZO/view?usp=drive_link', "mywindow"); }}>
                  <p className="text-md font-bold text-[#64ffda]">View Resume</p>
                  <div className="resume-icon w-5 h-5"><ArrowIcon /></div>
                </div>
              </div>
            </div>
            <PersonalInfoIcons />
          </div>
          <div className={`lg:flex w-full h-px my-4 bg-neutral-700`} />
          <div className={`lg:flex flex-row flex gap-4 cursor-pointer lg:items-center lg:justify-center`}>
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </div>
  )
}

function SocialMediaIcons() {
  return (
    <div className="flex-row flex gap-4 cursor-pointer items-center justify-center" >
      <div id="githubLogo" className="w-5 h-5 rounded-full" onClick={() => { window.open('https://github.com/NitinReddy01', "mywindow"); }}>
        <IconGitHub />
      </div>
      <div
        id="linkedinLogo"
        className="w-5 h-5 rounded-md flex items-center justify-center cursor-pointer"
        onClick={() => { window.open('https://www.linkedin.com/in/nitingogula/', "mywindow"); }}
      >
        <IconLinkedin />
      </div>
      <div
        id="leetcodeLogo"
        className="w-5 h-5 rounded-md flex items-center justify-center cursor-pointer"
        onClick={() => { window.open('https://leetcode.com/nitingogula/', "mywindow"); }}
      >
        <IconLeetCode />
      </div>
    </div>
  )
}

function PersonalInfoIcons() {
  return (
    <div className={`flex flex-col gap-4`}>
      <div className="flex flex-row gap-4">
        <div
          className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-800 p-[0.75px] flex items-center justify-center">
          <div className="w-full h-full bg-neutral-900/80 rounded-xl flex items-center justify-center shadow-lg">
            <div className="w-5 h-5">
              <EmailIcon />
            </div>
          </div>
        </div>
        <div>
          <p className="text-md font-bold text-neutral-400">Email</p>
          <p
            className="text-md text-[#ffffff] font-semibold cursor-pointer hover:underline hover:text-[#64ffda]"
            onClick={() => window.open('mailto:nitingogula@gmail.com', '_self')}
          >
            nitingogula@gmail.com
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div
          className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-800 p-[0.75px] flex items-center justify-center">
          <div className="w-full h-full bg-neutral-900/80 rounded-xl flex items-center justify-center shadow-lg">
            <div className="w-5 h-5">
              <PhoneIcon />
            </div>
          </div>
        </div>
        <div>
          <p className="text-md font-bold text-neutral-400">Phone</p>
          <p className="text-md text-[#ffffff] font-semibold">+91 7729827723</p>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div
          className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-800 p-[1px] flex items-center justify-center">
          <div className="w-full h-full bg-neutral-900/80 rounded-xl flex items-center justify-center shadow-lg">
            <div className="w-5 h-5">
              <LocationIcon />
            </div>
          </div>
        </div>
        <div>
          <p className="text-md font-bold text-neutral-400">Location</p>
          <p className="text-md text-[#ffffff] font-semibold">Hyderabad, India</p>
        </div>
      </div>
    </div>
  )
}
export default SideCard