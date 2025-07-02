import { awards } from "../data/awards";
import { AiFillGithub } from "react-icons/ai";

export default function AwardsSection() {
    return (
        awards.map((award) => (
            <div key={award.award_name} className='group/content'>
                <h2>
                  <div className="flex flex-col justify-between w-full py-5 font-medium border-b border-gray-200 dark:border-gray-700 dark:text-white gap-3 group-hover/content:border-none group-hover/content:pb-1">
                    <span className='text-lg'>
                      {award.award_name}
                    </span>
                    <p className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Issued by {award.issuedBy} · {award.date}
                    </p>
                  </div>
                </h2>
                <div className="hidden group-hover/content:block">
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      {award.description}
                    </p>
                  </div>
                </div>
              </div>
        ))
    );
}