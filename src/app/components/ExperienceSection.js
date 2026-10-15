import Image from "next/image";
import { FaUniversity } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { experiences } from "../data/experiences"; // Assuming you have a JSON file with your experiences

export default function ExperienceSection({ category }) {
    return (
        experiences.filter((experience) => experience.category === category).map((experience) => (
            <div key={`${experience.title}-${experience.company}-${experience.date}`} className="flex flex-col lg:flex-row items-center lg:items-start bg-white shadow-lg shadow-gray-400 p-6 rounded-xl my-4 dark:bg-gray-800 dark:shadow-white-400 group/content">
                <div className="w-24 h-auto flex-shrink-0">
                    {experience.image ? (
                        <Image src={experience.image} alt={experience.alt} className="object-contain w-full h-auto" />
                    ) : (
                        <div className="flex items-center justify-center w-24 h-24 rounded-full bg-teal-50 text-teal-600 dark:bg-gray-700 dark:text-teal-300" title={experience.alt}>
                            <FaUniversity size={40} />
                        </div>
                    )}
                </div>
                <div className="lg:ml-6 w-full">
                    <h3 className="text-lg font-medium pb-2 text-center lg:text-left">
                        {experience.title} <br />
                        <span className="inline-flex items-center">
                            {experience.company}
                            {experience.link && (
                                <a className="mx-2" href={experience.link} target="_blank" title={`Visit ${experience.company}`}>
                                    <FiExternalLink />
                                </a>
                            )}
                        </span>
                    </h3>
                    <p className="text-center lg:text-left text-sm text-gray-400 dark:text-gray-300">
                        {experience.date}
                    </p>
                    {experience.partners && (
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 pt-3">
                            {experience.partners.map((partner) => (
                                <div key={partner.alt} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                                    <span>{partner.label}</span>
                                    <Image src={partner.image} alt={partner.alt} title={partner.alt} className="h-8 w-auto object-contain" />
                                </div>
                            ))}
                        </div>
                    )}
                    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
                    {/* Hover swap to the skills list, disabled for now. To re-enable, uncomment this block
                        and add `group-hover/content:hidden` back to the job list's className below.
                    <div className="hidden group-hover/content:block text-gray-800 dark:text-gray-300">
                        <u><b>Gained Skills:</b></u>
                        <ul className="list-disc ml-4">
                            {experience.gained_skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    */}
                    <div className="text-gray-800 dark:text-gray-300">
                        <ul className="list-disc ml-4">
                            {experience.job.map((task, index) => (
                                <li key={index}>{task}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        ))
    );
}
