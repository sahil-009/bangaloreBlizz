"use client"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How much does a website cost?",
    answer:
      "Our website packages start at ₹4,999 for a basic one-page website. The final cost depends on your specific requirements, number of pages, and additional features needed. We provide transparent pricing with no hidden fees.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A basic website typically takes 1-2 weeks to complete. More complex websites with custom features may take 3-4 weeks. We'll provide you with a specific timeline based on your project requirements during our initial consultation.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes, we offer website maintenance packages to keep your site secure, updated, and running smoothly. Our maintenance plans include regular updates, security checks, backups, and technical support.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "All our websites are fully responsive and optimized for all devices including smartphones, tablets, and desktops. We test on multiple screen sizes to ensure a seamless experience for all users.",
  },
  {
    question: "Do you help with domain registration and hosting?",
    answer:
      "Yes, we provide complete domain registration and hosting setup services. We'll help you choose the right domain name and set up reliable hosting that suits your website's needs and budget.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-[#F9FAFB]">
      <div className="container-custom max-w-4xl">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Find answers to common questions about our services</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
