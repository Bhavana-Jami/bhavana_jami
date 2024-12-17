'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="hidden md:flex items-center gap-4">
        {navItems.map((item) => (
          <Button
            key={item.name}
            variant="ghost"
            className="text-zinc-200 hover:text-white hover:bg-zinc-800"
            asChild
          >
            <a href={item.href}>{item.name}</a>
          </Button>
        ))}
      </nav>

      <div className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-16 left-0 right-0 bg-zinc-900 p-4 rounded-b-lg shadow-lg"
            >
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="w-full justify-start text-zinc-200 hover:text-white hover:bg-zinc-800 mb-2"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <a href={item.href}>{item.name}</a>
                </Button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

