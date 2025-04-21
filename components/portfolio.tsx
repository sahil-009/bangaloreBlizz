"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Dr. Sharma Dental Clinic",
    category: "Healthcare",
    description: "A modern website for a dental clinic with appointment booking system and patient testimonials.",
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
  {
    id: 2,
    title: "Advocate Patel & Associates",
    category: "Legal",
    description: "Professional website for a law firm showcasing their expertise and services.",
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
  {
    id: 3,
    title: "Bangalore Bistro",
    category: "Restaurant",
    description: "Restaurant website with online menu, reservation system, and food delivery integration.",
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
  {
    id: 4,
    title: "CodeCraft Portfolio",
    category: "Developer",
    description: "Portfolio website for a freelance developer highlighting skills and projects.",
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
]

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="portfolio" className="section-padding bg-[#F9FAFB]">
      <div className="container-custom">
        <h2 className="section-title">Our Portfolio</h2>
        <p className="section-subtitle">Check out some of our recent projects</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-2">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-sm text-[#2E8EFF] font-medium">{project.category}</p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#2E8EFF] transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="secondary-btn">View All Projects</Button>
        </div>
      </div>
    </section>
  )
}
