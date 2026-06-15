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
              Software Engineer with 2+ years building scalable, distributed backend systems. Co-led architecture for a School &amp; Learning Management System serving 30K+ users, built async pipelines processing 120,000+ audio submissions/month, and currently shipping production Go services. Hands-on across Node.js, Go, PostgreSQL, Redis, RabbitMQ, and AWS with a focus on system design, performance, and reliability.
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

        {/* Role 1 — Associate Software Developer */}
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
                  <p className="text-sm md:text-md font-semibold text-neutral-400">Jun 2024 – Present</p>
                </div>
              </div>
            </div>

            {/* Role Overview */}
            <div className="flex flex-col p-4 rounded-lg bg-neutral-900/60 border border-neutral-700">
              <p className="text-[14px] md:text-[16px] text-[#ffffff]">
                Co-led an <b>8-member team</b> architecting scalable, RESTful microservices for a <b>School &amp; Learning Management System</b>, driving backend architecture decisions for <b>30K+ users</b> across cross-functional web and mobile teams.
              </p>
            </div>

            {/* Impact Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <ImpactMetric value={30} label="Users Served" suffix="K+" />
              <ImpactMetric value={120} label="Monthly Audio Submissions" suffix="K+" />
              <ImpactMetric value={5} label="Products Built" suffix="+" />
            </div>

            {/* Key Projects */}
            <div>
              <h3 className="text-lg font-bold text-[#ffffff] mb-4">Key Projects &amp; Contributions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <KeyProject
                  title="Audio Evaluation Pipeline"
                  description="Scaled an audio evaluation pipeline with RabbitMQ, processing 120,000+ submissions/month with real-time throughput and zero message loss."
                  technologies={["RabbitMQ", "Node.js", "Microservices", "Async Processing"]}
                />
                <KeyProject
                  title="Bulk School Onboarding Engine"
                  description="Engineered an event-driven, async bulk-processing engine importing 500+ students and teachers per school from Excel with real-time job status updates and zero client-facing timeouts."
                  technologies={["Node.js", "PostgreSQL", "Event-Driven", "Async"]}
                />
                <KeyProject
                  title="Redis Deduplication Layer"
                  description="Designed a Redis-backed deduplication layer to enforce idempotency across distributed operations, visibly eliminating duplicate API calls on retried requests confirmed through production log analysis."
                  technologies={["Redis", "Idempotency", "Distributed Systems"]}
                />
                <KeyProject
                  title="CI/CD & Infrastructure"
                  description="Dockerized services and managed deployments on AWS ECS and EC2; set up Bitbucket CI/CD with blue-green deployments and Nginx for zero-downtime releases across multiple environments."
                  technologies={["Docker", "AWS ECS/EC2", "Nginx", "CI/CD", "Blue-Green"]}
                />
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-lg font-bold text-[#ffffff] mb-3">Technologies Used</h3>
              <div className="flex flex-row gap-2 flex-wrap">
                {["Node.js", "Express", "PostgreSQL", "Prisma ORM", "Redis", "RabbitMQ", "Docker", "AWS ECS/EC2", "Nginx"].map((tech, index) => (
                  <div key={index} className="rounded-full bg-gray-800 w-auto px-3 py-1.5">
                    <p className="font-bold text-teal-300 text-sm">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Role 2 — Software Engineering Intern */}
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
                    <p className="text-lg md:text-xl font-bold text-[#ffffff]">Software Engineering Intern</p>
                    <p className="text-lg md:text-xl font-bold text-[#ffffff] hidden md:flex">&nbsp;|&nbsp;</p>
                    <div className="flex items-center gap-2">
                      <p className="text-lg md:text-xl font-bold text-[#64ffda]">EKSAQ</p>
                      <div className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" onClick={() => window.open('https://eksaq.in', 'mywindow')}>
                        <ArrowIcon />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm md:text-md font-semibold text-neutral-400">Dec 2023 – Jun 2024</p>
                </div>
              </div>
            </div>

            {/* Role Overview */}
            <div className="flex flex-col p-4 rounded-lg bg-neutral-900/60 border border-neutral-700">
              <p className="text-[14px] md:text-[16px] text-[#ffffff]">
                Developed an <b>English Language Assessment Platform</b> serving <b>1,000+ learners</b> with real-time pronunciation and fluency feedback via Supabase, React Native, and Redux.
              </p>
            </div>

            {/* Key Projects */}
            <div>
              <h3 className="text-lg font-bold text-[#ffffff] mb-4">Key Projects &amp; Contributions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <KeyProject
                  title="Language Assessment Platform"
                  description="Improved adaptive scoring by post-processing Azure Speech SDK outputs, lifting engagement and assessment accuracy by 50%."
                  technologies={["Azure Speech SDK", "Supabase", "React Native", "Redux"]}
                />
                <KeyProject
                  title="Authentication Service"
                  description="Established authentication and authorization with Redis session caching, DB fallback, and strict single-session enforcement, preventing concurrent logins and reducing unauthorized access risk."
                  technologies={["Redis", "JWT", "Session Management", "Node.js"]}
                />
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-lg font-bold text-[#ffffff] mb-3">Technologies Used</h3>
              <div className="flex flex-row gap-2 flex-wrap">
                {["Supabase", "React Native", "Redux", "Azure Speech SDK", "Redis", "Node.js"].map((tech, index) => (
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
