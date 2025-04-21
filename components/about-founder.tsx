"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Github } from "lucide-react"

export default function AboutFounder() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title">About the Founder</h2>

        <div className="flex flex-col md:flex-row items-center gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-[#2E8EFF]">
              <Image src="/placeholder.svg?height=400&width=400" alt="Sahil - Founder" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3"
          >
            <h3 className="text-2xl font-bold mb-4">Hi, I'm Sahil</h3>
            <p className="text-lg text-gray-600 mb-6">
              A developer from Bangalore helping local businesses get online affordably. With over 5 years of experience
              in web development, I understand the challenges small businesses face when trying to establish their
              online presence.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              My mission is to provide budget-friendly, high-quality websites that actually work for your business -
              helping you attract more clients and grow your brand.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#2E8EFF] transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#2E8EFF] transition-colors" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#2E8EFF] transition-colors" aria-label="GitHub">
                <Github size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
