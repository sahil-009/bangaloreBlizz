"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { register } from "swiper/element/bundle"

const testimonials = [
  {
    id: 1,
    name: "Dr. Arun Kumar",
    role: "Dentist",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "Sahil created an amazing website for my dental practice. Patient appointments increased by 30% within the first month!",
    stars: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Immigration Lawyer",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "The website Sahil built for my law practice is professional and has helped me reach more clients. Excellent work!",
    stars: 5,
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Cafe Owner",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "Our cafe website looks fantastic and the online ordering system works perfectly. Very happy with the results!",
    stars: 4,
  },
]

export default function Testimonials() {
  const swiperRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    register()

    const swiperContainer = swiperRef.current

    const params = {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    }

    // Assign parameters to swiper element
    Object.assign(swiperContainer!, params)

    // Initialize swiper
    swiperContainer?.initialize()
  }, [])

  const handlePrev = () => {
    swiperRef.current?.swiper.slidePrev()
  }

  const handleNext = () => {
    swiperRef.current?.swiper.slideNext()
  }

  return (
    <section id="testimonials" className="section-padding bg-[#F9FAFB]">
      <div className="container-custom">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">Hear from businesses and professionals who have worked with us</p>

        <div className="relative mt-12">
          <swiper-container ref={swiperRef} init="false" class="py-8">
            {testimonials.map((testimonial) => (
              <swiper-slide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="card h-full flex flex-col"
                >
                  <div className="flex items-center mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < testimonial.stars ? "fill-[#FFB800] text-[#FFB800]" : "text-gray-300"}
                      />
                    ))}
                  </div>

                  <blockquote className="text-gray-600 italic flex-grow">"{testimonial.quote}"</blockquote>
                </motion.div>
              </swiper-slide>
            ))}
          </swiper-container>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
