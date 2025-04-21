"use client"

import { motion } from "framer-motion"
import { Globe, Database, Smartphone, Server, Search, PenTool, Calendar, MessageSquare } from "lucide-react"

const services = [
  {
    icon: <Globe size={32} />,
    title: "Static Website",
    description: "Fast, responsive websites perfect for small businesses and professionals.",
  },
  {
    icon: <Database size={32} />,
    title: "Dynamic Website",
    description: "Content management systems that you can update yourself.",
  },
  {
    icon: <Smartphone size={32} />,
    title: "App Design",
    description: "Mobile-friendly web apps for your business needs.",
  },
  {
    icon: <Server size={32} />,
    title: "Hosting Setup",
    description: "Secure, reliable hosting with domain registration and SSL.",
  },
  {
    icon: <Search size={32} />,
    title: "SEO Boost",
    description: "Optimization to help customers find you on Google.",
  },
  {
    icon: <PenTool size={32} />,
    title: "Logo Design",
    description: "Professional logo design to enhance your brand identity.",
  },
  {
    icon: <Calendar size={32} />,
    title: "Booking System",
    description: "Online appointment scheduling for your clients.",
  },
  {
    icon: <MessageSquare size={32} />,
    title: "WhatsApp Chat",
    description: "Integrated WhatsApp button for instant customer communication.",
  },
]

export default function Services() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="services" className="section-padding bg-[#F9FAFB]">
      <div className="container-custom">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Comprehensive web solutions tailored to your specific needs</p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={item} className="card hover:border-l-4 hover:border-l-[#2E8EFF]">
              <div className="text-[#2E8EFF] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
