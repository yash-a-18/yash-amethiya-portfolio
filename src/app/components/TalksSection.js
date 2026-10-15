import { talks } from "../data/talks";

export default function TalksSection() {
    return (
        talks.map((talk) => (
            <div key={`${talk.venue}-${talk.title}`} className="flex flex-col justify-between w-full py-5 font-medium border-b border-gray-200 dark:border-gray-700 dark:text-white gap-2">
                <span className="text-lg">
                    {talk.title}
                </span>
                <div className="flex flex-wrap items-center gap-2">
                    <p className="text-md font-normal dark:text-gray-300">
                        {talk.venue}
                    </p>
                    <span className="text-xs font-normal text-teal-700 bg-teal-50 rounded-full px-3 py-1 dark:bg-gray-800 dark:text-teal-300">
                        {talk.type}
                    </span>
                </div>
                <p className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
                    {talk.authors} · {talk.location} · {talk.date}
                </p>
            </div>
        ))
    );
}
