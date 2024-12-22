import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="flex items-center text-gray-600 dark:text-gray-400">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Narayan Parab
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;