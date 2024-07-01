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
import LakeheadIntl from "../../public/LakeheadIntl.png";
import Lakehead from "../../public/LakeheadCS.png";
import IPR from "../../public/IPR.png";
import Verzeo from "../../public/Verzeo.png";
import logo from "../../public/Logo-2.png";
import logodark from "../../public/logo-dark2.png";
import elsevier from "../../public/elsevier.png";
import springer from "../../public/Springer.png";
import useDownloader from "react-use-downloader";

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
                <a href="#Volunteering" className="block text-lg mt-4 lg:inline-block lg:mt-0 dark:text-teal-200 ">
                  Volunteering
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
                Data Scientist | Web Developer
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
          <div className='flex py-5 md:flex-row flex-col gap-7'>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Programming Languages
              </h5>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              C
              </span>
              </div>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Python
              </span>
              </div>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Java
              </span>
              </div>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              C++
              </span>
              </div>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              PHP
              </span>
              </div>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              C#
              </span>
              </div>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              JavaScript
              </span>
              </div>
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Databases
              </h5>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Oracle SQL
              </span>
              </div>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              MySQL
              </span>
              </div>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              MongoDB
              </span>
              </div>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              SQLite3
              </span>
              </div>
            </div>

            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Data Science & Tools
              </h5>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Data Analysis & Visualization
              </span>
              </div>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              ML
              </span>
              </div>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              DL
              </span>
              </div>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Excel
              </span>
              </div>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Tableau
              </span>
              </div>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Power BI
              </span>
              </div>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Anaconda
              </span>
              </div>
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Infrastructure & Soft Skills
              </h5>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Git
              </span>
              </div>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Github
              </span>
              </div>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Linux/Unix
              </span>
              </div>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Story telling
              </span>
              </div>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Leadership
              </span>
              </div>
            </div>

            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Frontend
              </h5>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              HTML
              </span>
              </div>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              CSS
              </span>
              </div>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Tailwind
              </span>
              </div>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Bootstrap
              </span>
              </div>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Next js
              </span>
              </div>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              React js
              </span>
              </div>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Angular
              </span>
              </div>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              D3 js
              </span>
              </div>
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Backend & Frameworks
              </h5>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Node js
              </span>
              </div>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Express js
              </span>
              </div>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Django
              </span>
              </div>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Flask
              </span>
              </div>
              <div className="select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              ASP.NET MVC
              </span>
              </div>
            </div>
          </div>
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
          <div className="lg:flex gap-10 dark:text-white">
            <div className="shadow-lg shadow-gray-400 p-10 rounded-xl my-10 dark:bg-gray-800 dark:shadow-white-400 flex-1 group/content hover:scale-105 transition duration-300 ease-in-out">
              <div width={200} height={50} className='mx-10'>
                <Image src={Lakehead} alt="LUCS" className='object-fill h-25 w-full'/>
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2 text-center ">
                Teaching Assistant <br/> Lakehead University (Dept. of CS)
              </h3>
              <p className="text-center block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                January 2024 - April 2024
              </p>
              <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <div className="group-hover/content:hidden  text-gray-800 dark:text-gray-400 ml-7">
              <u><b>Gained Skills:</b></u>
                <i><ul className="list-disc"> 
                    <li>
                      Programming Languages (C and C++)
                    </li>
                    <li>
                      Instructional Design
                    </li>
                    <li>
                      Teaching and Tutoring
                    </li>
                    <li>
                      Classroom Management
                    </li>
                    <li>
                      Assessment and Feedback
                    </li>
                    <li>
                      Team Collaboration
                    </li>
                </ul></i>
              </div>
              <div className="hidden group-hover/content:block text-gray-800 dark:text-gray-400 ml-7">
                <ul className="list-disc"> 
                    <li>
                      Assisted in organizing and conducting C programming labs for a diverse group of 45 undergraduate students, resulting in improved understanding and application of coding concepts.
                    </li>
                    <li>
                      Led C++ programming labs for approximately 70 undergrad students, offering individualized support to clarify doubts and enhance their coding abilities.
                    </li>
                    <li>
                      Graded and provided feedback on lab assignments and exams for a class of 45 students, ensuring accuracy and fairness in assessment.
                    </li>
                  </ul>
              </div>
            </div>
            <div className="shadow-lg shadow-gray-400 p-10 rounded-xl my-10 dark:bg-gray-800 dark:shadow-white-400 flex-1 group/content hover:scale-105 transition duration-300 ease-in-out">
              <div width={300} height={100} className='mx-10'>
                <Image src={LakeheadIntl} alt="LUIntl" className='object-fill h-25 w-full'/>
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2 text-center ">
                Peer Mentor <br/> Lakehead University International
              </h3>
              <p className="text-center block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                July 2023 - April 2024
              </p>
              <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <div className="group-hover/content:hidden  text-gray-800 dark:text-gray-400 ml-7">
              <u><b>Interpersonal Skills:</b></u>
                <i><ul className="list-disc"> 
                    <li>
                      Effective Communication and Supportive Mentorship
                    </li>
                    <li>
                      Relationship Building and Trust Establishment
                    </li>
                    <li>
                      Collaboration and Coordination with Program Coordinators
                    </li>
                </ul></i>
                <u><b>Administrative Skills:</b></u>
                <i><ul className="list-disc"> 
                    <li>
                      Information Management and Excel Proficiency
                    </li>
                    <li>
                      Attention to Detail in Student Records and Arrangements
                    </li>
                </ul></i>
              </div>
              <div className="hidden group-hover/content:block text-gray-800 dark:text-gray-400 ml-7">
                <ul className="list-disc"> 
                    <li>
                      Mentored around 50 new international students and helped them adjust to the university
                    </li>
                    <li>
                      Communicated with mentees regularly and resolved their issues
                    </li>
                    <li>
                      Shared Computer Science knowledge and tips with mentees
                    </li>
                    <li>
                      Provided reliable information about Lakehead University and its resources
                    </li>
                    <li>
                      Recorded student data and tracked mentees&apos; progress on Excel
                    </li>
                    <li>
                      Coordinated airport arrivals for incoming students in the fall
                    </li>
                  </ul>
              </div>
            </div>
          </div>
          <div className="lg:flex gap-10 dark:text-white">
          <div className="shadow-lg shadow-gray-400 p-10 rounded-xl my-10 dark:bg-gray-800 dark:shadow-white-400 flex-1 group/content hover:scale-105 transition duration-300 ease-in-out">
              <div width={300} height={100} className='mx-10'>
                <Image src={IPR} alt="IPR" className='object-fill h-25 w-full'/>
              </div>
              <h3 className="text-center text-lg font-medium pt-8 pb-2 ">
                Research and Project Intern <br/> Institute for Plasma Research
              </h3>
              <p className="text-center block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                December 2021 - April 2022
              </p>
              <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <div className="group-hover/content:hidden text-gray-800 dark:text-gray-400 ml-7">
                <u><b>Technical Skills:</b></u>
                <i><ul className="list-disc"> 
                    <li>
                      Deep Learning Techniques
                    </li>
                    <li>
                      Transfer Learning
                    </li>
                    <li>
                      TensorFlow for Object Detection
                    </li>
                    <li>
                      Model Integration into Web Applications (Django Framework)
                    </li>
                    <li>
                      Image Labeling (Labelimg)
                    </li>
                    <li>
                      MySQL for Data Storage
                    </li>
                </ul></i>
                <u><b>Soft Skills:</b></u>
                <i><ul className="list-disc"> 
                    <li>
                    Leadership and Team Management
                    </li>
                    <li>
                    Problem-solving and Troubleshooting
                    </li>
                    <li>
                    Effective Communication of Technical Concepts
                    </li>
                </ul></i>
              </div>
              <div className="hidden group-hover/content:block text-gray-800 dark:text-gray-400 ml-7">
                <ul className="list-disc"> 
                  <li>
                    Led a team of 4 to develop a project named “Deep Learning for Object Detection in a live video feed”.
                  </li>
                  <li>
                    Collected around 15000 images using web scrapping, pre-processed them and labelled them using Labelimg.
                  </li>
                  <li>
                    Achieved accuracies above 95% by Transfer learning from deep neural networks like MobileNet, ResNet, Inception, and VGG for image classification and did object detection using TensorFlow.
                  </li>
                  <li>
                    Integrated 4 different models into a web application using Django Framework for live object detection.
                  </li>
                </ul>
              </div>
            </div>
            <div className="shadow-lg shadow-gray-400 p-10 rounded-xl my-10 dark:bg-gray-800 dark:shadow-white-400 flex-1 group/content hover:scale-105 transition duration-300 ease-in-out">
              <div width={300} height={100} className='mx-10'>
                <Image src={Verzeo} alt="Verzeo" className='object-fill h-25 w-full'/>
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2 text-center">
                Machine Learning Intern <br/> Verzeo
              </h3>
              <p className="text-center block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                May 2020 - July 2020
              </p>
              <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <div className="group-hover/content:hidden text-gray-800 dark:text-gray-400 ml-7">
                <u><b>Python (Pandas) Skills:</b></u>
                    <i><ul className="list-disc"> 
                        <li>
                          Data Manipulation
                        </li>
                        <li>
                          Data Aggregation and Grouping
                        </li>
                        <li>
                          Time Series Analysis
                        </li>
                        <li>
                          Boolean Indexing
                        </li>
                  </ul></i>
                <u><b>ML Skills:</b></u>
                  <i><ul className="list-disc"> 
                      <li>
                        Algorithm Development
                      </li>
                      <li>
                        Extensive Data Analysis
                      </li>
                      <li>
                        Expertise in Data Visualization
                      </li>
                      <li>
                        In-depth Statistical Analysis
                      </li>
                      <li>
                        Real-time Predictive Model  
                      </li>
                      <li>
                        Hands-on ML Application
                      </li>
                </ul></i>
              </div>
              <div className="hidden group-hover/content:block  text-gray-800 dark:text-gray-400 ml-7">
                <ul className="list-disc"> 
                    <li>
                      Implemented a cutting-edge Machine Learning algorithm based on the latest research.
                    </li>
                    <li>
                      Performed descriptive and inferential statistics on a large dataset of over 7400 samples.
                    </li>
                    <li>
                      Explored the data using Seaborn and Matplotlib libraries to uncover hidden patterns and insights.
                    </li>
                    <li>
                      Leveraged the acquired knowledge to build a car price prediction model & achieved 91.1% accuracy on real-time testing.
                    </li>
                  </ul>
              </div>
            </div>

          </div>
        </section>

        <section className="py-10" id="Projects">
          <div>
            <h3 className="text-3xl py-1 dark:text-white pb-5">Projects</h3>
          </div>
          <div className='py-5'>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                <li className="mb-10 ml-6">            
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                      Medical Image Captioning on Chest X-Rays 
                      <a className='mx-2' href='https://github.com/yash-a-18/Medical-Image-Captioning-for-Chest-X-Rays' target='_blank'>
                        <AiFillGithub />
                      </a>
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3 select-none">
                        Latest
                      </span>
                    </h3>
                    <p className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Skills: Python, Long Short-Term Memory (LSTM), CheXNET Model
                    </p>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Extracted the information from Indiana University&apos;s dataset, consisting of almost 7500 images and 4000 reports.
                    <br/>Organized the unbalanced by performing data pre-processing tasks like up-sampling and down-sampling.
                    <br/>Captured the semantic meaning & relationship between the words by using GloVe vectors with 300 dimensions.
                    <br/>Fine-tuned the CheXNET Model for encoding and achieved around 90% accuracy and a loss of less than 0.01.
                    </p>
                    
                </li>
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                      Video Game Sales Dashboard
                      <a className='mx-2' href='https://github.com/yash-a-18/Video-Games-Sales-Dashboard' target='_blank'>
                        <AiFillGithub />
                      </a>
                    </h3>
                    <p className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Skills: Data Cleaning, Tableau
                    </p>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Worked on the Video Game Sales dataset from Kaggle which includes 10 attributes and more than 16000 samples.
                    <br/>Devised an interactive Dashboard on Tableau to find the insights and relationship between the genre, year and sales.
                    </p>
                </li>
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                      Currency Recognizer
                      <a className='mx-2' href='https://github.com/yash-a-18/Curreny-Recognizer' target='_blank'>
                        <AiFillGithub />
                      </a>
                    </h3>
                    <p className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Skills: Research, Computer Vision, Scale-Invariant Feature Transform (SIFT), Python, MobileNet, Data Collection
                    </p>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Collaborated on a project to replicate and enhance a research paper.
                    <br/>Developed a fine-grained currency recognizer for the visually impaired using CONGAS and SIFT-based features.
                    <br/>Engineered a system with exceptional precision and recall, employing a lightweight coarse classifier and fine-grained recognition.
                    <br/>Led the creation of a diverse dataset (300 images per US banknote) with varied conditions for robust model training and evaluation.
                    <br/>Implemented a pre-filtering classifier and utilized SIFT features to optimize recognition accuracy for visually impaired users.
                    </p>
                </li>
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                      Qualitative Bankruptcy Classification
                      <a className='mx-2' href='https://github.com/yash-a-18/MultilayerPerceptron-Qualitative_Bankruptcy-classification' target='_blank'>
                        <AiFillGithub />
                      </a>
                    </h3>
                    <p className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Skills: Analysis, Python, Multi Layer Perceptron
                    </p>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Developed a Multilayer Perceptron (MLP) from scratch, incorporating Backpropagation and Stochastic Gradient Descent with Momentum (SDGM) algorithms.
                    <br/>Attained a successful learning curve, demonstrating effective model training and optimization.
                    <br/>Utilized parameters referenced from the paper &apos;The Discovery of Experts&apos; Decision Rules from Qualitative Bankruptcy Data Using Genetic Algorithms&apos; by Myoung-Jong Kim and Ingoo Han for an existing dataset.
                    </p>
                </li>
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                      Half Adder Circuit Design using Perceptron
                      <a className='mx-2' href='https://github.com/yash-a-18/Half-Adder-Design-using-Perceptron' target='_blank'>
                        <AiFillGithub />
                      </a>
                    </h3>
                    <p className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Skills: Logic Gates, Python, Feed Forward Perceptron
                    </p>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Designed a Half Adder circuit using a Feedforward Perceptron, showcasing practical implementation skills in neural network architectures.
                    <br/>Employed the Unit Step function as an Activation Function within the circuit design, demonstrating familiarity with various activation functions.
                    <br/>Developed AND and NOT logic gates, subsequently constructing a NAND Gate, highlighting expertise in logic gate implementations and circuit design.
                    </p>
                </li>
                <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                      Online Vehicle Renting System
                      <a className='mx-2' href='https://github.com/yash-a-18/OnlineVehicleRentingSystem' target='_blank'>
                        <AiFillGithub />
                      </a>
                    </h3>
                    <p className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Skills: Bootstrap, Django Framework, Python, Jinja3, SQLite3
                    </p>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Designed and developed a web system using Django Framework for online vehicle booking/renting.
                    <br/>Accelerated the performance with optimized programming & reduced system failure metrics for parallel requests.
                    <br/>Fashioned the user interface using Bootstraps and CSS for easy single-button click navigation.
                    <br/>Operated and loaded the live user, vehicle and rent request data using Jinja.
                    </p>
                </li>
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
                <a href="#" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Accepted
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
