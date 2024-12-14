import { motion } from 'framer-motion'
import { Copy, Check, Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const email = "your.email@example.com"

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/yourusername',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/yourusername',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/yourusername',
    },
  ]

  return (
    <section className="h-screen text-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="flex-grow max-w-3xl mx-auto w-full">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center text-sky-400"
        >
          Contact Me
        </motion.h1>

        {/* Email Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex flex-col items-center space-y-4">
            <Mail className="w-8 h-8 text-[#00c8ff]" />
            <button
              onClick={handleCopyEmail}
              className="group relative flex items-center space-x-2 bg-[#121226] px-6 py-3 rounded-full hover:bg-[#1a1a36] transition-colors duration-300"
            >
              <span className="text-gray-300">{email}</span>
              {copied ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <Copy className="w-5 h-5 text-[#00c8ff] group-hover:text-white transition-colors duration-300" />
              )}
            </button>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center space-x-8"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-[#121226] hover:bg-[#1a1a36] transition-colors duration-300"
            >
              <social.icon className="w-6 h-6 text-[#00c8ff]" />
              <span className="sr-only">{social.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      {/* <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center text-sm text-gray-500"
      >
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </motion.footer> */}
    </section>
  )
}

