import { FiExternalLink } from "react-icons/fi";
import { volunteering } from "../data/volunteering";

export default function VolunteeringSection() {
    return (
        volunteering.map((item) => (
            <div key={`${item.role}-${item.organization}-${item.date}`} className="flex flex-col justify-between w-full py-5 font-medium border-b border-gray-200 dark:border-gray-700 dark:text-white gap-3">
                <span className="text-lg flex flex-row">
                    {item.role}
                    {item.link && (
                        <a className="mt-1 mx-2" href={item.link} target="_blank">
                            <FiExternalLink />
                        </a>
                    )}
                </span>
                <p className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {item.organization} · {item.date}
                </p>
                <p className="block text-sm font-normal leading-normal text-gray-400 dark:text-gray-500">
                    {item.description.map((line, index) => (
                        <span key={index}>
                            {line}
                            {index < item.description.length - 1 && <br />}
                        </span>
                    ))}
                </p>
            </div>
        ))
    );
}
