import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Globe,
  Server,
  Cpu,
  GitBranch,
  Layout,
  Terminal
} from 'lucide-react';

const skills = [
  { name: 'React', level: 90, icon: Code2, color: 'text-blue-500' },
  { name: 'JavaScript', level: 85, icon: Globe, color: 'text-yellow-500' },
  { name: 'TypeScript', level: 80, icon: Code2, color: 'text-blue-600' },
  { name: 'Node.js', level: 75, icon: Server, color: 'text-green-500' },
  { name: 'Python', level: 70, icon: Terminal, color: 'text-yellow-600' },
  { name: 'SQL', level: 85, icon: Database, color: 'text-purple-500' },
  { name: 'HTML/CSS', level: 95, icon: Layout, color: 'text-orange-500' },
  { name: 'Git', level: 80, icon: GitBranch, color: 'text-red-500' }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full bg-gray-100 dark:bg-gray-700 ${skill.color}`}>
                    <Icon size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="ml-auto text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    className="h-2.5 rounded-full bg-blue-500"
                    initial={{ width: '0%' }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
