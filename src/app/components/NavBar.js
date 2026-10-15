import { useEffect, useState } from "react";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import logo from "../../../public/Logo-2.png";
import logodark from "../../../public/logo-dark2.png";

// Shown inline on wide screens; the rest sit under "More".
const primaryLinks = [
  { href: '#About', label: 'About' },
  { href: '#Education', label: 'Education' },
  { href: '#Publications', label: 'Publications' },
  { href: '#Talks', label: 'Talks' },
  { href: '#Awards', label: 'Awards' },
  { href: '#Research', label: 'Experience', sections: ['Research', 'Experience'] },
  { href: '#Teaching', label: 'Teaching' },
];

const moreLinks = [
  { href: '#Projects', label: 'Projects' },
  { href: '#Skills', label: 'Skills' },
  { href: '#Certificates', label: 'Certificates' },
  { href: '#Volunteering', label: 'Volunteering' },
];

const allLinks = [...primaryLinks, ...moreLinks];
const sectionsOf = (link) => link.sections ?? [link.href.slice(1)];
const sectionIds = allLinks.flatMap(sectionsOf);

const linkClass = (active) =>
  active
    ? 'text-teal-600 font-semibold dark:text-teal-300'
    : 'hover:text-teal-600 dark:text-teal-200 dark:hover:text-teal-400';

export default function NavBar({ onToggleDarkMode, onDownloadResume }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');
  const [progress, setProgress] = useState(0);

  // Track scroll progress and the section currently under the header.
  useEffect(() => {
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0);

      let current = '';
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= window.innerHeight * 0.35) {
          current = id;
        }
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const isActive = (link) => sectionsOf(link).includes(activeId);
  const activeLink = allLinks.find(isActive);

  // Close the mobile menu first, then scroll once the layout has settled;
  // otherwise the collapsing menu throws off the browser's smooth-scroll target.
  const goToSection = (event, href) => {
    event.preventDefault();
    event.currentTarget.blur(); // lets the hover/focus "More" dropdown close
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      history.replaceState(null, '', href);
    }, 0);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200 dark:bg-gray-900/90 dark:border-gray-800 dark:text-white">
      <nav className="flex items-center justify-between gap-4 px-6 py-3 md:px-10 max-w-7xl mx-auto">
        <a href="#top" className="flex items-center flex-shrink-0 select-none gap-2">
          <Image className="dark:hidden" width="44" height="44" src={logo} alt="Logo" />
          <Image className="hidden dark:block" width="44" height="44" src={logodark} alt="Dark Logo" />
          <span className="font-semibold text-xl tracking-tight">Yash Amethiya</span>
          {activeLink && (
            <span className="xl:hidden hidden sm:inline text-sm text-teal-600 dark:text-teal-300">
              · {activeLink.label}
            </span>
          )}
        </a>

        <div className="hidden xl:flex items-center gap-6 text-base">
          {primaryLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(event) => goToSection(event, link.href)}
              aria-current={isActive(link) ? 'location' : undefined}
              className={`relative py-1 transition-colors ${linkClass(isActive(link))}`}
            >
              {link.label}
              <span className={`absolute left-0 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 transition-all duration-300 ${isActive(link) ? 'w-full' : 'w-0'}`} />
            </a>
          ))}
          <div className="relative group">
            <button className={`flex items-center gap-1 ${linkClass(moreLinks.some(isActive))}`} aria-haspopup="true">
              {moreLinks.find(isActive)?.label ?? 'More'} <HiChevronDown />
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition absolute right-0 top-full pt-3">
              <div className="flex flex-col min-w-[10rem] py-2 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                {moreLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={(event) => goToSection(event, link.href)} className={`px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${linkClass(isActive(link))}`}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <button onClick={onToggleDarkMode} title="Toggle dark mode" aria-label="Toggle dark mode">
            <BsFillMoonStarsFill className="text-2xl" />
          </button>
          <a
            className="hidden sm:block bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md select-none"
            onClick={onDownloadResume}
            href="#"
          >
            Resume
          </a>
          <button
            className="xl:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="xl:hidden border-t border-gray-200 dark:border-gray-800">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 px-6 py-4 md:px-10 max-w-7xl mx-auto">
            {allLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => goToSection(event, link.href)}
                className={`px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 ${linkClass(isActive(link))} ${isActive(link) ? 'bg-teal-50 dark:bg-gray-800' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}

      <div
        className="absolute left-0 -bottom-px h-0.5 w-full origin-left bg-gradient-to-r from-cyan-500 to-teal-500"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
    </header>
  );
}
