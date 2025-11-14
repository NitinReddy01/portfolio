"use client"

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import EducationIcon from "../icons/educationIcon"
import EksaqLogo from "../../assets/eksaqLogo.png"
import ArrowIcon from "../icons/arrowIcon"

// Impact Metrics Component with Counter Animation
function ImpactMetric({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const duration = 1500; // 1.5 seconds

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="flex flex-col items-center p-4 rounded-lg bg-neutral-900/60 border border-neutral-700">
      <p className="text-3xl md:text-4xl font-bold text-[#64ffda]">{count}{suffix}</p>
      <p className="text-sm md:text-md text-neutral-400 font-semibold mt-1 text-center">{label}</p>
    </div>
  );
}

// Key Project Component
function KeyProject({ title, description, technologies }: { title: string, description: string, technologies: string[] }) {
  return (
    <div className="flex flex-col p-4 rounded-lg bg-neutral-900/60 border border-neutral-700 hover:border-[#64ffda] transition-all duration-300">
      <h4 className="text-lg font-bold text-[#64ffda] mb-2">{title}</h4>
      <p className="text-[14px] md:text-[16px] text-[#ffffff] mb-3">{description}</p>
      <div className="flex flex-row gap-2 flex-wrap">
        {technologies.map((tech, index) => (
          <span key={index} className="text-xs px-2 py-1 rounded-full bg-gray-800 text-teal-300">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function AboutAndExperience() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero Introduction */}
      <div>
        <p className='text-xl lg:text-2xl lg:mb-2 mb-1 heading-primary font-bold'>About Me</p>
        <div className='w-[75px] h-[4px] rounded-full bg-[#64ffda]' />
        <div className='flex flex-col p-[1px] rounded-lg my-4 bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-800'>
          <div className='flex flex-col p-4 rounded-lg bg-neutral-900/80'>
            <p className='text-md font-semibold lg:text-[16px]'>
              I&apos;m a software developer passionate about building scalable backend systems and real-time applications. I thrive in fast-paced environments where I can take ownership of products from design to deployment. With expertise in distributed systems, cloud infrastructure, and full-stack development, I enjoy tackling complex technical challenges and creating efficient, maintainable solutions. I believe in writing clean code, continuous learning, and collaborating with teams to deliver impactful products.
            </p>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-xl lg:text-2xl lg:mb-2 mb-1 heading-primary font-bold">Professional Experience</p>
          <div className="w-[75px] h-[4px] rounded-full bg-[#64ffda]" />
        </div>

        {/* Company Header */}
        <div className="rounded-3xl bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-800 p-[1px] shadow-lg">
          <div className="flex flex-col gap-6 w-full h-full bg-neutral-900/80 rounded-3xl p-4 md:p-6">

            {/* Role & Company */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <Image src={EksaqLogo} alt="EKSAQ" width={100} height={100} className="rounded-md select-none" />
                </div>
                <div>
                  <div className="flex flex-col md:flex-row md:items-center">
                    <p className="text-lg md:text-xl font-bold text-[#ffffff]">Associate Software Developer</p>
                    <p className="text-lg md:text-xl font-bold text-[#ffffff] hidden md:flex">&nbsp;|&nbsp;</p>
                    <div className="flex items-center gap-2">
                      <p className="text-lg md:text-xl font-bold text-[#64ffda]">EKSAQ</p>
                      <div className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" onClick={() => window.open('https://eksaq.in', 'mywindow')}>
                        <ArrowIcon />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm md:text-md font-semibold text-neutral-400">June 2024 – Present</p>
                </div>
              </div>
            </div>

            {/* Role Overview */}
            <div className="flex flex-col p-4 rounded-lg bg-neutral-900/60 border border-neutral-700">
              <p className="text-[14px] md:text-[16px] text-[#ffffff]">
                Joined as an entry-level developer at a fast-paced startup and quickly evolved into a <b>technical co-leader</b>, driving architecture and development decisions across <b>5+ products</b>. Work in a <b>small, agile team</b> where I collaborate directly with founders and take ownership of end-to-end product delivery—from design to deployment. Mentor junior developers while coordinating task assignments and ensuring effective team communication.
              </p>
            </div>

            {/* Impact Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ImpactMetric value={5} label="Products Built" suffix="+" />
              <ImpactMetric value={12} label="Technologies Used" suffix="+" />
            </div>

            {/* Key Projects */}
            <div>
              <h3 className="text-lg font-bold text-[#ffffff] mb-4">Key Projects & Contributions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <KeyProject
                  title="Audio Evaluation Pipeline"
                  description="Designed and implemented an automated system processing thousands of audio submissions monthly using Azure Speech SDK and RabbitMQ for distributed task handling."
                  technologies={["Azure Speech SDK", "RabbitMQ", "Node.js", "Microservices"]}
                />
                <KeyProject
                  title="API Gateway Architecture"
                  description="Architected scalable backend systems for 5+ products with Express-based API Gateway featuring auth, caching, and health-check middlewares."
                  technologies={["Express", "Node.js", "Redis", "Middleware Design"]}
                />
                <KeyProject
                  title="Real-Time Communication System"
                  description="Built a real-time communication layer supporting live updates across clients, migrating from custom WebSocket to Socket.IO for improved scalability."
                  technologies={["Socket.IO", "WebSocket", "Real-time Sync"]}
                />
                <KeyProject
                  title="Authentication Service"
                  description="Developed a secure authentication system enforcing single-session logins across platforms through centralized token validation and session management."
                  technologies={["JWT", "Session Management", "Security"]}
                />
              </div>
            </div>

            {/* Additional Achievements */}
            <div>
              <h3 className="text-lg font-bold text-[#ffffff] mb-3">Additional Achievements</h3>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-[14px] md:text-[16px] text-[#ffffff]">
                  Delivered the company&apos;s <b>first MVP within a month</b>, demonstrating rapid backend setup using Supabase integrated with React Native and Node.js APIs
                </li>
                <li className="text-[14px] md:text-[16px] text-[#ffffff]">
                  Optimized content delivery, <b>reducing database load and improving response times</b> through a Redis-based caching layer
                </li>
                <li className="text-[14px] md:text-[16px] text-[#ffffff]">
                  Streamlined deployments by <b>Dockerizing all services</b> and managing infrastructure on AWS ECS and EC2
                </li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-lg font-bold text-[#ffffff] mb-3">Technologies Used</h3>
              <div className="flex flex-row gap-2 flex-wrap">
                {["Supabase", "Node.js", "Express", "React Native", "PostgreSQL", "Prisma ORM", "Redis", "RabbitMQ", "Socket.IO", "Azure Speech SDK", "Docker", "AWS ECS/EC2"].map((tech, index) => (
                  <div key={index} className="rounded-full bg-gray-800 w-auto px-3 py-1.5">
                    <p className="font-bold text-teal-300 text-sm">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className='flex flex-col gap-2'>
        <p className='text-xl lg:text-2xl lg:mb-2 mb-1 heading-primary font-bold'>Education</p>
        <div className='w-[75px] h-[4px] rounded-full bg-[#64ffda]' />
        <div className='flex flex-row rounded-lg py-2 md:p-4 gap-4 lg:gap-12 items-center'>
          <div className='w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 p-4 md:p-6 flex items-center justify-center border-2 border-gray-700'>
            <EducationIcon />
          </div>
          <div className='text-[14px] md:text-[16px]'>
            <p className='font-bold'>
              B.Tech in Computer Science and Engineering
            </p>
            <p className='font-semibold'>
              Keshav Memorial Institute of Technology,<br className='md:hidden' /> Hyderabad, Telangana
            </p>
            <p className='font-semibold'>
              Graduated: <br className='md:hidden' />2020 – 2024
            </p>
            <p className='font-semibold'>
              GPA: 8.6 / 10
            </p>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className='flex flex-col gap-2'>
        <p className='text-xl lg:text-2xl lg:mb-2 mb-1 heading-primary font-bold'>Achievements</p>
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
