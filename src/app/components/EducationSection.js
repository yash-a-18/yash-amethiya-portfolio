import { education } from "../data/education";

export default function EducationSection() {
    return (
        education.map((item) => (
            <div key={item.degree} className="flex flex-col justify-between w-full py-5 font-medium border-b border-gray-200 dark:border-gray-700 dark:text-white gap-2">
                <span className="text-lg">
                    {item.degree}, {item.field}
                </span>
                <p className="block text-md font-normal leading-none dark:text-gray-300">
                    {item.school}
                </p>
                <p className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
                    {item.location} · {item.date}
                </p>
                <ul className="flex flex-wrap gap-2 mt-1">
                    {item.details.map((detail, index) => (
                        <li key={index} className="text-sm font-normal text-teal-700 bg-teal-50 rounded-full px-3 py-1 dark:bg-gray-800 dark:text-teal-300">
                            {detail}
                        </li>
                    ))}
                </ul>
            </div>
        ))
    );
}
