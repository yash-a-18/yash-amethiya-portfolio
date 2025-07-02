import Image from "next/image";
import { publications } from "../data/publications";

export default function PublicationSection() {
    return (
        publications.map((publication) => (
            <div key={publication.title} className='py-5'>
                <div className="max-w-sm w-full lg:max-w-full lg:flex border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href={publication.link} target='_blank'>
                        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l overflow-hidden p-5" >
                            <Image src={publication.image} alt={publication.alt} />
                        </div>
                    </a>
                    <div className="p-5">
                        <a href={publication.link} target='_blank'>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {publication.title}
                            </h5>
                        </a>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Publication: {publication.publisher}, Journal: {publication.journal}
                        </p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {publication.date}
                        </p>
                        <a href={publication.link} target='_blank' className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        ))
    );
}