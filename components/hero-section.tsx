"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Lottie from "lottie-react"
import developerAnimation from "@/lib/developer-animation"

export default function HeroSection() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-[#F9FAFB] to-white">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Get a Website That <span className="text-[#2E8EFF]">Works</span> for You.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Websites for doctors, freelancers, lawyers & local businesses in Bangalore.
            <span className="block mt-2">Budget-friendly. Professional. Effective.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="primary-btn text-lg" size="lg">
              See Pricing
            </Button>
            <Button className="secondary-btn text-lg" size="lg">
              Book Free Call
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <Lottie animationData={developerAnimation} className="w-full max-w-lg" />
        </motion.div>
      </div>
    </section>
  )
}
