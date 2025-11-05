import React from 'react'

const Navbar = ({currentSection, setCurrentSection }: { currentSection:number, setCurrentSection:React.Dispatch<React.SetStateAction<number>> }) => {
  return (
    <div className="rounded-t-3xl  md:rounded-none flex flex-row gap-8 text-[#ffffff] font-semibold select-none">
        <p className={`cursor-pointer transition-colors duration-300 ${currentSection === 0 ? 'text-[#64ffda]' : 'text-[#ffffff]'}`} onClick={() => setCurrentSection(0)}>About & Experience</p>
        <p className={`cursor-pointer transition-colors duration-300 ${currentSection === 1 ? 'text-[#64ffda]' : 'text-[#ffffff]'}`} onClick={() => setCurrentSection(1)}>Projects</p>
        <p className={`cursor-pointer transition-colors duration-300 ${currentSection === 2 ? 'text-[#64ffda]' : 'text-[#ffffff]'}`} onClick={() => setCurrentSection(2)}>Contact</p>
    </div>
  )
}

export default Navbar