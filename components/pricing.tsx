"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const pricingPlans = [
  {
    name: "Basic",
    price: "₹4,999",
    description: "Perfect for professionals who need a simple online presence",
    features: ["1 page website", "Mobile responsive", "Contact form", "Social media links", "Fast loading speed"],
    popular: false,
  },
  {
    name: "Pro",
    price: "₹9,999",
    description: "Ideal for growing businesses that need more functionality",
    features: [
      "3-5 page website",
      "Mobile responsive",
      "Contact form",
      "SEO optimization",
      "Google Maps integration",
      "Social media integration",
      "Basic analytics",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹14,999+",
    description: "Complete solution for businesses that need advanced features",
    features: [
      "Custom multi-page website",
      "Admin panel",
      "Logo design",
      "Booking system",
      "WhatsApp integration",
      "Custom animations",
      "Advanced SEO",
      "Analytics dashboard",
      "Priority support",
    ],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title">Affordable Pricing</h2>
        <p className="section-subtitle">Budget-friendly packages designed for small businesses and professionals</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`card relative ${plan.popular ? "border-2 border-[#2E8EFF] shadow-lg" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FFB800] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.name !== "Premium" && <span className="text-gray-500"> one-time</span>}
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="text-[#2E8EFF] mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className={plan.popular ? "primary-btn w-full" : "secondary-btn w-full"}>Get Started</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
