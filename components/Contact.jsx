import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Twitter, X } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:vrigukumar710@gmail.com',
      color: 'hover:text-red-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/bhrigukumardeka/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/BhriguKumarDeka',
      color: 'hover:text-white'
    }
  ];

  return (
    <section id="contact" className="bg-black text-white px-6 py-20 border-t border-slate-900">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-slate-400 text-sm md:text-base mb-8">
            Got a project in mind? Want to collaborate or just say hello? Feel free to reach out!
          </p>

          {/* Email CTA Button */}
          <motion.a
            href="mailto:vrigukumar710@gmail.com"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-linear-to-r from-slate-900 to-slate-800 border border-slate-700 rounded-lg font-medium text-white hover:border-slate-600 transition-all mb-12 shadow-lg"
          >
            Send Me an Email
          </motion.a>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-6 mb-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.2 }}
                  className={`p-3 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-300 transition-all ${social.color}`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>

          {/* Quick Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-500 text-sm"
          >
            <p>
              <span className="text-slate-400">Location:</span> India
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
