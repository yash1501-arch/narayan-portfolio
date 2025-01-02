import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Grow-Me Organic Assignment',
    description: 'The "Grow Me Organic Assignment" project includes API fetching using PrimeReact and creating a responsive app with Vite, TypeScript, and PrimeReact components for a seamless user experience on all devices.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    demoUrl: 'https://narayan-grow-me-organic-assignment-v3ot.vercel.app/',
    githubUrl: 'https://github.com/yash1501-arch/GrowMeOrganic-Assignment',
    tags: ['Vite', 'Type-script', 'Prime-react']
  },
  {
    title: 'Habot Assignment',
    description: 'The "Habot Assignment" focuses on making a website responsive, achieved using React JavaScript with SWC for Fast Refresh to enhance development speed and performance.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    demoUrl: 'https://narayan-habot-assignment.vercel.app/',
    githubUrl: 'https://github.com/yash1501-arch/narayan-habot-assignment',
    tags: ['Vite', 'JavaScript', 'SWC']
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard with interactive maps and forecasts',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800',
    demoUrl: 'https://example.com/demo3',
    githubUrl: 'https://github.com/yourusername/project3',
    tags: ['React', 'OpenWeatherAPI', 'ChartJS']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden flex flex-col transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-1 cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 transform hover:scale-110"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
                <p className="text-gray-900 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-accent text-white rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex justify-between">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-highlight transition-colors duration-300"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent hover:text-highlight transition-colors duration-300"
                  >
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
