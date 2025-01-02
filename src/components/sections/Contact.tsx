import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useRef } from 'react';
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
          alert('Message sent successfully!');
          form.current!.reset();
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.error(error.text);
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

        {/* Flex container for both sections */}
        <div className="flex gap-12 items-start justify-between">

          {/* Contact Methods */}
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
                    <div className="bg-accent p-3 rounded-full text-white">
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

          {/* Contact Form */}
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
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"
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
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"
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
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 text-white bg-accent rounded-md shadow-lg hover:bg-highlight transition duration-300 flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
