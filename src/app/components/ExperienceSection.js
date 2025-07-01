import Image from "next/image";
import { experiences } from "../data/experiences"; // Assuming you have a JSON file with your experiences

export default function ExperienceSection() {
    return (
        experiences.map((experience) => (
            <div key={experience.id} className="flex flex-col lg:flex-row items-center lg:items-start shadow-lg shadow-gray-400 p-6 rounded-xl my-4 dark:bg-gray-800 dark:shadow-white-400 group/content hover:scale-105 transition duration-300 ease-in-out">
                <div className="w-24 h-auto flex-shrink-0">
                    <Image src={experience.image} alt={experience.alt} className="object-contain w-full h-auto" />
                </div>
                <div className="lg:ml-6 w-full">
                    <h3 className="text-lg font-medium pb-2 text-center lg:text-left">
                        {experience.title} <br /> {experience.company}
                    </h3>
                    <p className="text-center lg:text-left text-sm text-gray-400 dark:text-gray-300">
                        {experience.date}
                    </p>
                    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
                    <div className="hidden group-hover/content:block text-gray-800 dark:text-gray-300">
                        <u><b>Gained Skills:</b></u>
                        <ul className="list-disc ml-4">
                            {experience.gained_skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="group-hover/content:hidden text-gray-800 dark:text-gray-300">
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