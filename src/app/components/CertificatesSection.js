import { useState } from "react";
import { FiExternalLink, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { certificates } from "../data/certificates";

function CertificateCard({ certificate }) {
    return (
        <div className="flex flex-col justify-between py-5 font-medium border-b border-gray-200 dark:border-gray-700 dark:text-white gap-2">
            <span className="text-lg">
                {certificate.name}
            </span>
            <p className="block text-md font-normal leading-normal dark:text-gray-300">
                {certificate.issuedBy}
            </p>
            <p className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
                Issued {certificate.date}
            </p>
            {certificate.link && (
                <div className="flex flex-row">
                    <a href={certificate.link} target="_blank" className="flex select-none mt-2 text-center w-max text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        Show Credentials
                        <FiExternalLink className="mt-1 ml-2" />
                    </a>
                </div>
            )}
        </div>
    );
}

export default function CertificatesSection() {
    const [showAll, setShowAll] = useState(false);
    const featured = certificates.filter((certificate) => certificate.featured);
    const older = certificates.filter((certificate) => !certificate.featured);
    const visible = showAll ? certificates : featured;

    return (
        <div className="dark:text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 md:max-w-6xl">
                {visible.map((certificate) => (
                    <CertificateCard key={certificate.name} certificate={certificate} />
                ))}
            </div>
            {older.length > 0 && (
                <button
                    onClick={() => setShowAll(!showAll)}
                    aria-expanded={showAll}
                    className="flex items-center mt-6 select-none text-teal-600 border border-teal-500 hover:bg-teal-50 font-medium rounded-full text-sm px-5 py-2.5 dark:text-teal-300 dark:border-teal-400 dark:hover:bg-gray-800"
                >
                    {showAll ? 'Show less' : `Show ${older.length} more`}
                    {showAll ? <FiChevronUp className="ml-2" /> : <FiChevronDown className="ml-2" />}
                </button>
            )}
        </div>
    );
}
