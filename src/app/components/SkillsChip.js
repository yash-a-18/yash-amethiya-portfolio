export default function SkillChip({ label, gradient }) {
  return (
    <div
      className={`select-none relative inline-flex items-center justify-center p-0.5 mb-2 me-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br ${gradient} hover:text-white dark:text-white focus:ring-4 focus:outline-none`}
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {label}
      </span>
    </div>
  );
}
