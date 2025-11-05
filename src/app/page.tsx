"use client";
import AboutAndExperience from "@/components/Blocks/AboutAndExperience";
import Projects from "@/components/Blocks/Projects";
import Skills from "@/components/Blocks/Skills";
import SideCard from "@/components/Blocks/SideCard";
import Navbar from "@/components/Blocks/Navbar";
import { useState, useRef } from "react";
import Contact from "@/components/Blocks/Contact";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance (in px) to trigger navigation
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0); // Reset
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentSection < 2) {
      // Swipe left = next section
      setCurrentSection(prev => prev + 1);
    }
    if (isRightSwipe && currentSection > 0) {
      // Swipe right = previous section
      setCurrentSection(prev => prev - 1);
    }
  };

  return (
    <div className="relative bg-black p-4 md:p-8 md:px-24 lg:p-16 flex flex-col lg:flex-row gap-8 2xl:px-64">
      <SideCard />
      <div
        ref={contentRef}
        className="relative overflow-y-scroll p-4 md:p-8 bg-neutral-900 rounded-3xl border-[1px] border-neutral-700 gap-4 w-full mb-16 lg:mb-0 transition-all duration-500 ease-in-out"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="absolute hidden md:flex top-0 right-0 w-fit px-8 py-6 border-b-[1px] border-l-[1px] border-neutral-700 z-10 bg-neutral-800/90 rounded-bl-3xl">
          <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
        </div>
        <div className="transition-all duration-700 ease-in-out transform">
          {currentSection === 0 && (
            <div id="about-experience" className="w-full animate-fadeIn">
              <AboutAndExperience />
              <div className="mt-8">
                <Skills />
              </div>
            </div>
          )}
          {currentSection === 1 && (
            <div id="projects" className="w-full animate-fadeIn">
              <Projects />
            </div>
          )}
          {currentSection === 2 && (
            <div id="contact" className="w-full animate-fadeIn">
              <Contact />
            </div>
          )}
        </div>
      </div>
      <div className="fixed flex md:hidden bottom-0 left-0 w-full h-16 z-10 items-center justify-center bg-neutral-800/30 rounded-t-2xl backdrop-blur-xl" >
        <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      </div>
    </div>
  );
}