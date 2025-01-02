import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-primary dark:bg-gray-900 z-50 flex items-center justify-center">
      <motion.div
        className="w-20 h-20 border-4 border-highlight border-t-white rounded-full"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default Loader;