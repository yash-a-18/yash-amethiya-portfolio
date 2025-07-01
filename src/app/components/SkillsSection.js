// components/SkillsSection.js
import SkillChip from './SkillsChip';
import { skills } from '../data/skills';

const groupedSkills = [
  {
    title: 'Languages & Databases',
    categories: ['Programming Languages', 'Databases'],
  },
  {
    title: 'Data Science & Infrastructure',
    categories: ['Data Science & Tools', 'Infrastructure & Soft Skills'],
  },
  {
    title: 'Frontend & Backend',
    categories: ['Frontend', 'Backend & Frameworks'],
  },
];

export default function SkillsSection() {
  return (
    <div className="flex py-5 md:flex-row flex-col gap-7">
      {groupedSkills.map((group) => (
        <div
          key={group.title}
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
        >
          {group.categories.map((categoryTitle) => {
            const category = skills.find((c) => c.title === categoryTitle);
            return (
              <div key={category.title}>
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  {category.title}
                </h5>
                {category.items.map((skill) => (
                  <SkillChip
                    key={skill.label}
                    label={skill.label}
                    gradient={skill.gradient}
                  />
                ))}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
