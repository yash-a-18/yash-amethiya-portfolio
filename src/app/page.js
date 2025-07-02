// To inform next js, this is a client component 
"use client"; 
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { useState } from "react";
import {
  AiFillLinkedin,
  AiFillMail,
  AiFillGithub,
} from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import mypic from "../../public/Profile-new-1.png";
import logo from "../../public/Logo-2.png";
import logodark from "../../public/logo-dark2.png";
import elsevier from "../../public/elsevier.png";
import springer from "../../public/Springer.png";
import useDownloader from "react-use-downloader";
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectSection from './components/ProjectSection';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const {download} = useDownloader();
  const fileUrl = "../../Yash-Girishbhai-Amethiya-Resume.pdf"; 
  const filename = "Yash Girishbhai Amethiya Resume.pdf";

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40" id="top">

        <section className="min-h-fit">
          <nav className="py-10 mb-auto flex items-center justify-between dark:text-white">
            <div className="flex items-center flex-shrink-0 dark:text-white mr-4 sm:mr-6 lg:mr-6 md:mr-6 select-none">
              <Image className="fill-current h-15 w-15 sm:mr-2 md:mr-2 lg:mr-2 dark:hidden" width="64" height="64"  src={logo} alt="Logo"/>
              <Image className="hidden fill-current h-15 w-15 mr-2 dark:block" width="64" height="64"  src={logodark} alt="Dark Logo"/>
              <span className="font-semibold text-xl tracking-tight">Yash Amethiya</span>
              
            </div>
            <div className="hidden w-full flex-grow lg:flex lg:items-center lg:w-auto" id="my_nav">
              <div className="text-sm lg:flex-grow">
                <a href="#top" className="block text-lg mt-4 lg:inline-block lg:mt-0 dark:text-teal-200 mr-4">
                  Home
                </a>
                <a href="#Experience" className="block text-lg mt-4 lg:inline-block lg:mt-0 dark:text-teal-200  mr-4" >
                  Experience
                </a>
                <a href="#Projects" className="block text-lg mt-4 lg:inline-block lg:mt-0 dark:text-teal-200 mr-4">
                  Projects
                </a>
                <a href="#Publications" className="block text-lg mt-4 lg:inline-block lg:mt-0 dark:text-teal-200 mr-4">
                  Publications
                </a>
                <a href="#Certificates" className="block text-lg mt-4 lg:inline-block lg:mt-0 dark:text-teal-200 mr-4">
                  Certificates
                </a>
                <a href="#Volunteering" className="block text-lg mt-4 lg:inline-block lg:mt-0 dark:text-teal-200 mr-4">
                  Volunteering
                </a>
                <a href="#Honours & Awards" className="block text-lg mt-4 lg:inline-block lg:mt-0 dark:text-teal-200 ">
                  Awards
                </a>
              </div> 
            </div>
            
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li className="hidden sm:block md:block lg:block">
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-5 select-none sm:ml-8 lg:ml-8"
                  onClick={() => download(fileUrl, filename)}
                  href='#'
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 relative overflow-hidden md:h-96 md:w-96 block sm:hidden md:hidden lg:hidden">
                <Image className="object-cover" alt="Profile Photo" src={mypic} fill/>
              </div>
          </div>
          <div className='flex items-center pb-10'>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 hidden sm:block md:block lg:block">
                <Image className="object-cover" alt="Profile Photo" src={mypic} fill/>
            </div>
            <div className="text-center pt-10 sm:pt-24 md:pt-24 lg:pt-24 pb-10 mx-auto">
              <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">
                Yash Amethiya
              </h2>
              <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                Data Scientist | Software Developer
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I am always on the lookout for my next challenge and eager to connect with professionals. 
              If you have any opportunities for data science you think I would be a good fit, don&apos;t hesitate to reach out.
              </p>
              <div className="text-5xl flex justify-center gap-4 md:gap-16 py-3 text-gray-600 dark:text-gray-400">
                <a href="https://www.linkedin.com/in/yash-ga" target='_blank' title='Linkedin'>
                  <AiFillLinkedin />
                </a>
                <a href='https://github.com/yash-a-18' target='_blank' title='Github'>
                  <AiFillGithub />
                </a>
                <a href="mailto: yashamethiya2001@gmail.com" title='Email'>
                  <AiFillMail />
                </a>
                <a href="https://scholar.google.ca/citations?user=gJ4oeJEAAAAJ&hl=en" target='_blank' title='Scholar'>
                  <SiGooglescholar />
                </a>
                
              </div>
              <div className="mt-7 block sm:hidden md:hidden lg:hidden">
                <button
                  className="w-full bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md select-none"
                  onClick={() => download(fileUrl, filename)}
                  href='#'
                >
                  Resume
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10" id="Skills, Tools & Technologies">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Skills, Tools & Technologies</h3>
          </div>
          <SkillsSection />
        </section>

        <section className="pb-10"  id="Experience">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Experience</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            As a Computer Science enthusiast with a passion for unlocking insights from 
            <span className="text-teal-500"> data</span>, 
            I am excited about leveraging my foundational programming knowledge and
            <span className="text-teal-500">  analytical skills </span>
             to delve into the dynamic world of Data Analysis and 
             <span className="text-teal-500"> Data Science</span>. 
             Eager to apply theoretical concepts in
             <span className="text-teal-500">  real-world scenarios</span>,
             I am driven to explore diverse datasets, implement statistical methodologies, and employ cutting-edge tools 
             to derive actionable intelligence and contribute meaningfully to <span className="text-teal-500"> solving complex problems </span>
            in this evolving field.
            </p>
          </div>
          <div className="flex flex-col gap-6 dark:text-white">
            <ExperienceSection />
          </div>
        </section>

        <section className="py-10" id="Projects">
          <div>
            <h3 className="text-3xl py-1 dark:text-white pb-5">Projects</h3>
          </div>
          <div className='py-5'>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                <ProjectSection />
            </ol>
          </div>
        </section>

        <section className="py-10" id="Publications">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Publications</h3>
          </div>
          <div className='py-5'>
            <div className="max-w-sm w-full lg:max-w-full lg:flex border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="https://www.sciencedirect.com/science/article/pii/S2667102621000887" target='_blank'>
                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden p-5" >
                  <Image src={springer} alt="Elsevier"/>
                </div>
              </a>
              <div className="p-5">
                <a href="https://www.sciencedirect.com/science/article/pii/S2667102621000887" target='_blank'>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Automatic Table Detection and Tabular Data Extraction from Scanned Documents
                  </h5>
                </a>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Publication: Springer, Journal: Springer-Smart Innovation, Systems and Technologies (SIST)
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  April 2024
                </p>
                <a href="https://link.springer.com/chapter/10.1007/978-981-96-0143-1_7" target='_blank' className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className='py-5'>
            <div className="max-w-sm w-full lg:max-w-full lg:flex border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="https://www.sciencedirect.com/science/article/pii/S2667102621000887" target='_blank'>
                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden p-5" >
                  <Image src={elsevier} alt="Elsevier"/>
                </div>
              </a>
              <div className="p-5">
                <a href="https://www.sciencedirect.com/science/article/pii/S2667102621000887" target='_blank'>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Comparative analysis of breast cancer detection using machine learning and biosensors
                  </h5>
                </a>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Publication: Elsevier, Journal: Intelligent Medicine
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  October 2022
                </p>
                <a href="https://www.sciencedirect.com/science/article/pii/S2667102621000887" target='_blank' className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10" id="Certificates">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Certificates</h3>
          </div>
          <div className='py-5'>
            <div className="bg-white dark:bg-gray-900 dark:text-white">
              <div className='flex flex-col md:flex-row min-w-10 md:max-w-6xl'>
                <h2 className='border-b border-gray-200 dark:border-gray-700 md:pr-40 w-full'>
                  <div className="flex flex-col justify-between py-5 font-medium dark:text-white gap-2">
                    <span className='text-lg'>
                    MTA: Introduction to Programming Using Python
                    </span>
                    <p className="block text-md font-normal leading-none dark:text-gray-300">
                      Microsoft
                    </p>
                    <p className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
                      Issued September 2020
                    </p>
                    <div className='flex flex-row'>
                      <a href="https://www.credly.com/badges/8bb68a19-a815-4a12-9e59-91c9a6f54dcc?source=linked_in_profile" target='_blank' className="flex select-none mt-2 text-center w-max text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        Show Credentials
                        <FiExternalLink className='mt-1 ml-2'/>
                      </a>
                    </div>
                  </div>
                </h2>
                <h2 className='border-b md:border-l border-gray-200 dark:border-gray-700 md:pl-40 w-full'>
                  <div className="flex flex-col justify-between py-5 font-medium dark:text-white gap-2">
                    <span className='text-lg'>
                    Data Science Math Skills
                    </span>
                    <p className="block text-md font-normal leading-none dark:text-gray-300">
                      Coursera
                    </p>
                    <p className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
                      Issued October 2020
                    </p>
                    <div className='flex flex-row'>
                      <a href="https://www.coursera.org/account/accomplishments/certificate/ABMWADKJM6B7" target='_blank' className="flex select-none mt-2 text-center w-max text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        Show Credentials
                        <FiExternalLink className='mt-1 ml-2'/>
                      </a>
                    </div>
                  </div>
                </h2>
              </div>
              <div className='flex flex-col md:flex-row min-w-10 md:max-w-6xl'>
                <h2 className='border-b border-gray-200 dark:border-gray-700 md:pr-40 w-full md:border-none'>
                  <div className="flex flex-col justify-between py-5 font-medium dark:text-white gap-2">
                    <span className='text-lg'>
                    Python for Data Science, AI & Development
                    </span>
                    <p className="block text-md font-normal leading-none dark:text-gray-300">
                      Coursera
                    </p>
                    <p className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
                      Issued October 2021
                    </p>
                    <div className='flex flex-row'>
                      <a href="https://www.coursera.org/account/accomplishments/certificate/2E6CKTZCNMYF" target='_blank' className="flex select-none mt-2 text-center w-max text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        Show Credentials
                        <FiExternalLink className='mt-1 ml-2'/>
                      </a>
                    </div>
                  </div>
                </h2>
                <h2 className='md:border-l border-gray-200 dark:border-gray-700 md:pl-40 w-full'>
                  <div className="flex flex-col justify-between py-5 font-medium dark:text-white gap-2">
                    <span className='text-lg'>
                    Introduction to Data Analytics
                    </span>
                    <p className="block text-md font-normal leading-none dark:text-gray-300">
                      Coursera
                    </p>
                    <p className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
                      Issued October 2021
                    </p>
                    <div className='flex flex-row'>
                      <a href="https://www.coursera.org/account/accomplishments/certificate/3TA5HKCFZGH9" target='_blank' className="flex select-none mt-2 text-center w-max text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        Show Credentials
                        <FiExternalLink className='mt-1 ml-2'/>
                      </a>
                    </div>
                  </div>
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10" id="Volunteering">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Volunteering</h3>
          </div>
          <div className='py-5'>
            <div className="bg-white dark:bg-gray-900 dark:text-white">
              <h2>
                <div className="flex flex-col justify-between w-full py-5 font-medium border-b border-gray-200 dark:border-gray-700 dark:text-white gap-3">
                  <span className='text-lg flex flex-row'>
                  Operations Manager & Director of Volunteers
                    <a className='mt-1 mx-2' href='https://www.tedxlakeheadu.com/team/yash-amethiya' target='_blank'>
                      <FiExternalLink />
                    </a>
                  </span>
                  <p className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  TEDxLakeheadU · January 2025 - March 2025
                  </p>
                  <p className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  I led the coordination and management of event operations, ensuring seamless execution of all activities. I oversaw the recruitment, training, and management of a dedicated volunteer team, fostering a collaborative environment to support event success.
                  <br/>My responsibilities also included streamlining logistical processes, managing timelines, and collaborating with various teams to deliver a high-quality experience for both speakers and attendees.
                  <br/>This role honed my leadership, organizational, and communication skills while delivering an impactful event that adhered to TEDx&apos;s high standards. 
                  </p>
                </div>
              </h2>
              <h2>
                <div className="flex flex-col justify-between w-full py-5 font-medium border-b border-gray-200 dark:border-gray-700 dark:text-white gap-3">
                  <span className='text-lg'>
                  International Orientation Volunteer
                  </span>
                  <p className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Lakehead University International · January 2023 & September 2023
                  </p>
                  <p className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  I guided new international students at the university and assisted a group in meeting its goals. 
                  </p>
                </div>
              </h2>
              <h2>
                <div className="flex flex-col justify-between w-full py-5 font-medium border-b border-gray-200 dark:border-gray-700 dark:text-white gap-3">
                  <span className='text-lg'>
                  Student Ambassador - C2U Expo
                  </span>
                  <p className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Lakehead University · June 2023
                  </p>
                  <p className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Community-College-University Exposition at Lakehead University, helped with the presentation setup and being room volunteer.
                  </p>
                </div>
              </h2>
              <h2>
                <div className="flex flex-col justify-between w-full py-5 font-medium border-b border-gray-200 dark:border-gray-700 dark:text-white gap-3">
                  <span className='text-lg'>
                  Marshal - Convocation
                  </span>
                  <p className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Lakehead University · May 2023
                  </p>
                  <p className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Help organize graduates by their platform card numbers and ensure they&apos;re ready to enter the auditorium 10 minutes before the ceremony starts, ensuring a seamless procession.
                  </p>
                </div>
              </h2>
              <h2>
                <div className="flex flex-col justify-between w-full py-5 font-medium border-b border-gray-200 dark:border-gray-700 dark:white gap-3">
                  <span className='text-lg'>
                    Mathematics Teacher
                  </span>
                  <p className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Rotaract Vadodara One-Anurakti · December 2019 - February 2020 
                  </p>
                  <p className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Taught math to unprivileged children in a small village every weekend.
                  </p>
                </div>
              </h2>
            </div>
          </div>
        </section>

        <section className="py-10" id="Honours & Awards">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Honours & Awards</h3>
          </div>
          <div className='py-5'>
            <div className="bg-white dark:bg-gray-900 dark:text-white">
              <div className='group/content'>
                <h2>
                  <div className="flex flex-col justify-between w-full py-5 font-medium border-b border-gray-200 dark:border-gray-700 dark:text-white gap-3 group-hover/content:border-none group-hover/content:pb-1">
                    <span className='text-lg'>
                      Best Paper Award, FICTA-2024 Conference
                    </span>
                    <p className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Issued by London Metropolitan University, UK & Springer · June 2024
                    </p>
                  </div>
                </h2>
                <div className="hidden group-hover/content:block">
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Based on the technical merit of the papers as well as performance during the presentation session.
                      Presented at 12th International Conference on Frontiers of Intelligent Computing: Theory and Applications (FICTA-2024), 
                      Organized By AI and Data Science (AI & DS) Research Group, London Metropolitan University, London, United Kingdom
                    </p>
                  </div>
                </div>
              </div>
              <div className='group/content'>
                <h2>
                  <div className="flex flex-col justify-between w-full py-5 font-medium border-b border-gray-200 dark:border-gray-700 dark:text-white gap-3 group-hover/content:border-none group-hover/content:pb-1">
                    <span className='text-lg'>
                      Lakehead Makes Leader: There is no &apos;I&apos; in EDI Equity, Diversity, and Inclusion
                    </span>
                    <p className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Issued by Lakehead University International · April 2023
                    </p>
                  </div>
                </h2>
                <div className="hidden group-hover/content:block">
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                    It promotes diverse teamwork and cultural competency through EDI-focused projects. 
                    It emphasizes the importance of equity, diversity, and inclusion. 
                    Participants gain skills in interpersonal and cultural intelligence, conflict resolution, and cross-cultural collaboration. 
                    This module offers a unique opportunity to celebrate diversity and enhance collaboration in a global workplace
                    </p>
                  </div>
                </div>
              </div>
              <div className='group/content'>
                <h2>
                  <div className="flex flex-col justify-between w-full py-5 font-medium border-b border-gray-200 dark:border-gray-700 dark:white gap-3 group-hover/content:border-none group-hover/content:pb-1">
                    <span className='text-lg'>Lakehead Makes Leaders: Think Like a Leader</span>
                    <p className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Issued by Lakehead University International · November 2022
                    </p>
                  </div>
                </h2>
                <div className="hidden group-hover/content:block">
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                    I focused on developing leadership skills essential for my future Canadian career pursuits. 
                    I learned about different leadership styles and explored my strengths. 
                    I engaged in various activities that taught me how to manage uncertainty, 
                    sharpened my critical thinking and problem-solving skills, 
                    and deepened my self-awareness and values to foster change and innovation. 
                    After completing that module, I was well on my way to becoming a Lakehead Leader, 
                    with the ability to make meaningful and impactful changes for others.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
          
      </main>
    </div>
  )
}
