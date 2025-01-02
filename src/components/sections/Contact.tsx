import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const contactMethods = [
  {
    title: 'Phone',
    description: '+91 98205 13298',
    icon: Phone,
  },
  {
    title: 'Email',
    description: 'narayanp1501@gmail.com',
    icon: Mail,
  },
  {
    title: 'Address',
    description: 'Andheri East, Mumbai, India',
    icon: MapPin,
  },
];

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        form.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          setIsSent(true);
          setError(false);
          form.current!.reset();

          setTimeout(() => {
            setIsSent(false);
          }, 5000);
        },
        (error) => {
          setError(true);
          setIsSent(false);
          console.error(error.text);

          setTimeout(() => {
            setError(false);
          }, 5000);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="flex gap-12 items-start justify-between">
          <div className="flex-1">
            <div className="grid md:grid-cols-1 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden flex flex-col transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex items-center p-6">
                    <div className="bg-highlight p-3 rounded-full text-white">
                      <method.icon size={24} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-primary">{method.title}</h3>
                      <p className="text-gray-700">{method.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-1 bg-white rounded-lg shadow-lg p-8"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent text-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent text-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent text-black"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 text-white bg-highlight rounded-md shadow-lg hover:bg-accent transition duration-300 flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {isSent && (
          <motion.div
            className="fixed bottom-5 left-1/2 transform -translate-x-1/2 p-4 bg-green-500 text-white rounded-lg shadow-md flex items-center space-x-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-white rounded-full flex justify-center items-center">
                <span className="text-green-500">✔</span>
              </div>
              <p>Message Sent Successfully!</p>
            </div>
          </motion.div>
        )}

        {error && (
          <motion.div
            className="fixed bottom-5 left-1/2 transform -translate-x-1/2 p-4 bg-red-500 text-white rounded-lg shadow-md flex items-center space-x-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-white rounded-full flex justify-center items-center">
                <span className="text-red-500">✘</span>
              </div>
              <p>Failed to send message. Please try again.</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;
