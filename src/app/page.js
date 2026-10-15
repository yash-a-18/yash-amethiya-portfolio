// To inform next js, this is a client component
"use client";
import { useState, useEffect } from "react";
import {
  AiFillLinkedin,
  AiFillMail,
  AiFillGithub,
} from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";
import Image from "next/image";
import mypic from "../../public/Profile-new-1.png";
import useDownloader from "react-use-downloader";
import NavBar from './components/NavBar';
import Section from './components/Section';
import {
  FiUser, FiBookOpen, FiFileText, FiMic, FiAward, FiSearch,
  FiBriefcase, FiUsers, FiCode, FiTool, FiCheckCircle, FiHeart,
} from "react-icons/fi";
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectSection from './components/ProjectSection';
import AwardsSection from './components/AwardsSection';
import PublicationSection from './components/PublicationSection';
import TalksSection from './components/TalksSection';
import CertificatesSection from './components/CertificatesSection';
import VolunteeringSection from './components/VolunteeringSection';
import { FaArrowUp } from "react-icons/fa";

const researchInterests = [
  'Neurosymbolic AI',
  'Knowledge Graphs',
  'Human-AI Collaboration',
  'Health Informatics',
  'Electronic Health Records',
  'Clinical Decision Support',
  'Computer-Aided Design for Healthcare',
  'Domain-Specific Languages',
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const {download} = useDownloader();
  const fileUrl = "../../Yash-Girishbhai-Amethiya-Resume.pdf";
  const filename = "Yash Girishbhai Amethiya Resume.pdf";
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <NavBar
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        onDownloadResume={() => download(fileUrl, filename)}
      />
      <main className="bg-white dark:bg-gray-900" id="top">

        <section className="min-h-fit px-10 md:px-20 lg:px-40">
          <div className="pt-10 sm:pt-0">
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
                PhD Student in Health | Software Engineer
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I research and build software for healthcare: from clinical modelling languages and patient workflow
              visualizations to AI tools for education and health research networks.
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

        <Section id="About" title="About" icon={FiUser} tinted>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I am a PhD student in <span className="text-teal-500">Health (Health Systems Management & Health Data Analytics)</span> at
          York University&apos;s School of Health Policy and Management, supported by the
          <span className="text-teal-500"> Connected Minds Doctoral Scholarship</span>,
          and a member of the <a href="https://yorku-heal-lab.github.io/" target="_blank" className="text-teal-500 underline underline-offset-4 hover:text-teal-600">Health Equity and AI (HEAL) Lab</a>,
          which uses AI to reduce health disparities and build fairness into health prediction models.
          Alongside my research, I work as a software engineer on health and education technology:
          a <span className="text-teal-500">domain-specific language and VS Code tooling</span> for patient care plans at Aurora Constellations,
          the <span className="text-teal-500">ARCAND Map</span> research network platform at the Dr. Gilles Arcand Centre for Health Equity, and
          <span className="text-teal-500"> PathwAI</span>, an AI platform for credit transfer between Ontario institutions.
          I am based in the Greater Toronto Area.
          </p>
          <h4 className="text-xl pt-4 pb-2 dark:text-white">Research Interests</h4>
          <ul className="flex flex-wrap gap-2">
            {researchInterests.map((interest) => (
              <li key={interest} className="text-sm text-teal-700 bg-white ring-1 ring-teal-200 rounded-full px-3 py-1 dark:bg-gray-800 dark:ring-gray-700 dark:text-teal-300">
                {interest}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="Education" title="Education" icon={FiBookOpen}>
          <EducationSection />
        </Section>

        <Section id="Publications" title="Publications" icon={FiFileText} tinted>
          <PublicationSection />
        </Section>

        <Section id="Talks" title="Talks & Presentations" icon={FiMic}>
          <TalksSection />
        </Section>

        <Section id="Awards" title="Honours, Awards & Funding" icon={FiAward} tinted>
          <div className="dark:text-white">
            <AwardsSection />
          </div>
        </Section>

        <Section id="Research" title="Research Experience" icon={FiSearch}>
          <div className="flex flex-col gap-6 dark:text-white">
            <ExperienceSection category="research" />
          </div>
        </Section>

        <Section id="Experience" title="Professional Experience" icon={FiBriefcase} tinted>
          <div className="flex flex-col gap-6 dark:text-white">
            <ExperienceSection category="professional" />
          </div>
        </Section>

        <Section id="Teaching" title="Teaching & Mentoring" icon={FiUsers}>
          <div className="flex flex-col gap-6 dark:text-white">
            <ExperienceSection category="teaching" />
          </div>
        </Section>

        <Section id="Projects" title="Projects" icon={FiCode} tinted>
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <ProjectSection />
          </ol>
        </Section>

        <Section id="Skills" title="Skills, Tools & Technologies" icon={FiTool}>
          <SkillsSection />
        </Section>

        <Section id="Certificates" title="Certificates" icon={FiCheckCircle} tinted>
          <CertificatesSection />
        </Section>

        <Section id="Volunteering" title="Volunteering & Community" icon={FiHeart}>
          <div className="dark:text-white">
            <VolunteeringSection />
          </div>
        </Section>

      </main>
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-teal-500 text-white shadow-lg hover:bg-teal-600 transition-colors duration-300"
          title="Back to Top"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </div>
  )
}
