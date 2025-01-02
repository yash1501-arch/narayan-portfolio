import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

type EducationItem = {
  degree: string;
  school: string;
  year: string;
  description: string;
};

const education: EducationItem[] = [
  {
    degree: 'Bachelor of Engineering in Information Technology',
    school: 'Atharva College of Engineering',
    year: '2021-2024',
    description: 'Major in Computer Science with focus on Software Engineering',
  },
  {
    degree: 'Diploma in Information Technology',
    school: 'Government Polytechnic Mumbai',
    year: '2019-2021',
    description: 'Learn different technology fields like programming languages.',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-primary via-accent to-highlight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-extrabold text-white mb-4 animate-pulse">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </motion.div>

        {/* Education List */}
        <div className="space-y-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl transform hover:scale-105 hover:rotate-3 transition-all duration-500 relative flex flex-col md:flex-row"
            >
              {/* Degree & School */}
              <div className="flex-1">
                {/* Degree Name */}
                <motion.h3
                  className="text-2xl font-extrabold text-gray-900 dark:text-white mb-3"
                  whileHover={{ y: -5, color: '#FF6347' }}
                >
                  {edu.degree}
                </motion.h3>
                
                {/* School Name */}
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">{edu.school}</p>

                {/* Year */}
                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>{edu.year}</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mt-4">{edu.description}</p>
              </div>

              {/* Icon (Degree Icon) */}
              <motion.div
                className="flex items-center justify-center mt-8 md:mt-0 md:w-32 md:h-32 rounded-full bg-primary text-white p-6"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2, rotate: 45 }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <GraduationCap size={28} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
