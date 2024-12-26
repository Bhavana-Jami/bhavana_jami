
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'


export default function ScrollDownIcon({ size = 24, color = 'currentColor' }) {
  return (
    <motion.div
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'loop',
      }}
      className="cursor-pointer mt-8"
      onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
    >
      <ChevronDown size={size} color={color} />
    </motion.div>
  )
}

