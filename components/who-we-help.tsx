"use client"

import { motion } from "framer-motion"
import { Stethoscope, Scale, Code, Building2 } from "lucide-react"

const clientTypes = [
  {
    icon: <Stethoscope size={40} />,
    title: "Doctors",
    description: "Patient-friendly websites with appointment booking and medical information.",
  },
  {
    icon: <Scale size={40} />,
    title: "Lawyers",
    description: "Professional websites that build trust and showcase your expertise.",
  },
  {
    icon: <Code size={40} />,
    title: "Developers",
    description: "Portfolio websites that highlight your skills and attract clients.",
  },
  {
    icon: <Building2 size={40} />,
    title: "Small Businesses",
    description: "Affordable websites that drive sales and grow your local presence.",
  },
]

export default function WhoWeHelp() {
  return (
    <section id="who-we-help" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title">Who We Help</h2>
        <p className="section-subtitle">Tailored web solutions for professionals and small businesses</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {clientTypes.map((client, index) => (
            <motion.div
              key={client.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group"
            >
              <div className="text-[#2E8EFF] mb-4 group-hover:text-[#FFB800] transition-colors duration-300">
                {client.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{client.title}</h3>
              <p className="text-gray-600">{client.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
