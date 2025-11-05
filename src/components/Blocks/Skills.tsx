import React from "react";
import ReactIcon from "../icons/reactIcon";
import JSIcon from "../icons/javascriptIcon";
import TSIcon from "../icons/typescriptIcon";
import TailwindIcon from "../icons/tailwindIcon";
import ReduxIcon from "../icons/reduxIcon";
import GoIcon from "../icons/goIcon";
import CppIcon from "../icons/cppIcon";
import PythonIcon from "../icons/pythonIcon";
import NodejsIcon from "../icons/nodejsIcon";
import ExpressIcon from "../icons/expressIcon";
import SupabaseIcon from "../icons/supabaseIcon";
import PostgressIcon from "../icons/postgressIcon";
import RedisIcon from "../icons/redisIcon";
import SocketIOIcon from "../icons/socketioIcon";
import AwsIcon from "../icons/awsIcon";
import DockerIcon from "../icons/dockerIcon";
import PrismaIcon from "../icons/prismaIcon";
// import WebDevelopmentIcon from "../icons/webDevelopment";
// import MobileDevelopmentIcon from "../icons/mobileDevelopment";
// import BackendDevelopmentIcon from "../icons/backendDevelopment";
// import MachineLearningIcon from "../icons/machineLearningIcon";


export default function Skills() {
  return (
    <div className="flex flex-col gap-4 mt-2">
      <div className="flex flex-col gap-2">
        <p className="text-2xl mb-2 heading-primary font-bold" id="Skills">
          Skills
        </p>
        <div className='w-[75px] h-[4px] rounded-full bg-[#64ffda]' />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row flex-wrap gap-4 mt-4">
          <IndividualSkill title={'TypeScript'} SvgIcon={TSIcon} />
          <IndividualSkill title={'JavaScript'} SvgIcon={JSIcon} />
          <IndividualSkill title={'C++'} SvgIcon={CppIcon} />
          <IndividualSkill title={'Python'} SvgIcon={PythonIcon} />
          <IndividualSkill title={'Go'} SvgIcon={GoIcon} />
          <IndividualSkill title={'Node.js'} SvgIcon={NodejsIcon} />
          <IndividualSkill title={'Express'} SvgIcon={ExpressIcon} />
          <IndividualSkill title={'Supabase'} SvgIcon={SupabaseIcon} />
          <IndividualSkill title={'PostgreSQL'} SvgIcon={PostgressIcon} />
          <IndividualSkill title={'Prisma ORM'} SvgIcon={PrismaIcon} />
          <IndividualSkill title={'Redis'} SvgIcon={RedisIcon} />
          <IndividualSkill title={'Socket.IO'} SvgIcon={SocketIOIcon} />
          <IndividualSkill title={'React'} SvgIcon={ReactIcon} />
          <IndividualSkill title={'React Native'} SvgIcon={ReactIcon} />
          <IndividualSkill title={'Redux'} SvgIcon={ReduxIcon} />
          <IndividualSkill title={'Tailwind CSS'} SvgIcon={TailwindIcon} />
          <IndividualSkill title={'AWS'} SvgIcon={AwsIcon} />
          <IndividualSkill title={'Docker'} SvgIcon={DockerIcon} />
        </div>
      </div>
      {/* <div className="flex flex-col gap-2 mt-4">
        <p className="text-2xl heading-primary font-bold">What I can Build</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <WhatICanBuild title={'Web Applications'} description={'I can build web applications using React, Next.js, and Tailwind CSS.'} SvgIcon={WebDevelopmentIcon} />
          <WhatICanBuild title={'Mobile Applications'} description={'I can build mobile applications using React Native.'} SvgIcon={MobileDevelopmentIcon} />
          <WhatICanBuild title={'Backend Applications'} description={'I can build backend applications using Node.js, Express, and MongoDB.'} SvgIcon={BackendDevelopmentIcon} />
          <WhatICanBuild title={'Machine Learning'} description={'I can build Machine & Deep learning models using Python, Pytorch and TensorFlow.'} SvgIcon={MachineLearningIcon} />
        </div> */}
      {/* </div> */}
    </div>
  );
}

// function WhatICanBuild({ title, description, SvgIcon }: { title: string, description: string, SvgIcon: () => React.JSX.Element }) {
//   return (
//     <div className="rounded-lg bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-800 p-[1px] flex items-start justify-start lg:items-center lg:justify-center shadow-lg">
//       <div className="flex flex-row gap-6 w-full h-full bg-neutral-900/80 rounded-lg p-6">
//         <div className="w-12 h-12">
//           <SvgIcon />
//         </div>
//         <div className="flex flex-col gap-2">
//           <p className="font-bold text-[#ffffff] text-lg">{title}</p>
//           <p className="text-[#ffffff] text-md">{description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

function IndividualSkill({ title, SvgIcon }: { title: string, SvgIcon: () => React.JSX.Element }) {
  return (
    <div
      className="rounded-lg bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-800 p-[1px] flex justify-start items-center lg:justify-center shadow-lg">
      <div className="w-full h-full p-4 bg-neutral-900/80 rounded-lg flex  justify-start items-center lg:justify-center gap-2 shadow-lg">
        <div className="w-7 h-7">
          <SvgIcon />
        </div>
        <p className="font-bold text-[#ffffff]">{title}</p>
      </div>
    </div>
  );
}
