import type { Inquiry, Service, Project, Testimonial, FAQ } from "./types"

export const mockInquiries: Inquiry[] = [
  {
    id: "1",
    name: "Dr. Rajesh Sharma",
    email: "dr.sharma@example.com",
    whatsapp: "+91 98765 43210",
    message:
      "I'm interested in getting a website for my dental clinic. Can you provide more details about your services and pricing?",
    date: "2023-04-15T10:30:00",
    status: "new",
  },
  {
    id: "2",
    name: "Priya Patel",
    email: "priya@example.com",
    message:
      "I need a website for my law practice. Looking for something professional that can help me get more clients.",
    date: "2023-04-14T14:45:00",
    status: "responded",
  },
  {
    id: "3",
    name: "Amit Kumar",
    email: "amit@example.com",
    whatsapp: "+91 87654 32109",
    message: "I'm a freelance developer looking for a portfolio website. Can you help me with that?",
    date: "2023-04-13T09:15:00",
    status: "archived",
  },
  {
    id: "4",
    name: "Sneha Reddy",
    email: "sneha@example.com",
    message:
      "I run a small bakery and need an online presence. What would be the cost for a basic website with online ordering?",
    date: "2023-04-12T16:20:00",
    status: "new",
  },
  {
    id: "5",
    name: "Vikram Singh",
    email: "vikram@example.com",
    whatsapp: "+91 76543 21098",
    message:
      "Looking for a website redesign for my consulting business. Our current site is outdated and not mobile-friendly.",
    date: "2023-04-11T11:05:00",
    status: "new",
  },
  {
    id: "6",
    name: "Neha Gupta",
    email: "neha@example.com",
    message:
      "I need a simple website for my yoga studio. Something clean and minimal with class schedules and booking.",
    date: "2023-04-10T13:40:00",
    status: "responded",
  },
]

export const mockServices: Service[] = [
  {
    id: "1",
    title: "Static Website",
    description: "Fast, responsive websites perfect for small businesses and professionals.",
    icon: "Globe",
  },
  {
    id: "2",
    title: "Dynamic Website",
    description: "Content management systems that you can update yourself.",
    icon: "Database",
  },
  {
    id: "3",
    title: "App Design",
    description: "Mobile-friendly web apps for your business needs.",
    icon: "Smartphone",
  },
  {
    id: "4",
    title: "Hosting Setup",
    description: "Secure, reliable hosting with domain registration and SSL.",
    icon: "Server",
  },
  {
    id: "5",
    title: "SEO Boost",
    description: "Optimization to help customers find you on Google.",
    icon: "Search",
  },
  {
    id: "6",
    title: "Logo Design",
    description: "Professional logo design to enhance your brand identity.",
    icon: "PenTool",
  },
  {
    id: "7",
    title: "Booking System",
    description: "Online appointment scheduling for your clients.",
    icon: "Calendar",
  },
  {
    id: "8",
    title: "WhatsApp Chat",
    description: "Integrated WhatsApp button for instant customer communication.",
    icon: "MessageSquare",
  },
]

export const mockPortfolio: Project[] = [
  {
    id: "1",
    title: "Dr. Sharma Dental Clinic",
    category: "Healthcare",
    description: "A modern website for a dental clinic with appointment booking system and patient testimonials.",
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
  {
    id: "2",
    title: "Advocate Patel & Associates",
    category: "Legal",
    description: "Professional website for a law firm showcasing their expertise and services.",
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
  {
    id: "3",
    title: "Bangalore Bistro",
    category: "Restaurant",
    description: "Restaurant website with online menu, reservation system, and food delivery integration.",
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
  {
    id: "4",
    title: "CodeCraft Portfolio",
    category: "Developer",
    description: "Portfolio website for a freelance developer highlighting skills and projects.",
    image: "/placeholder.svg?height=600&width=800",
    link: "#",
  },
]

export const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Dr. Arun Kumar",
    role: "Dentist",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "Sahil created an amazing website for my dental practice. Patient appointments increased by 30% within the first month!",
    stars: 5,
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Immigration Lawyer",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "The website Sahil built for my law practice is professional and has helped me reach more clients. Excellent work!",
    stars: 5,
  },
  {
    id: "3",
    name: "Rahul Verma",
    role: "Cafe Owner",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "Our cafe website looks fantastic and the online ordering system works perfectly. Very happy with the results!",
    stars: 4,
  },
]

export const mockFAQs: FAQ[] = [
  {
    id: "1",
    question: "How much does a website cost?",
    answer:
      "Our website packages start at ₹4,999 for a basic one-page website. The final cost depends on your specific requirements, number of pages, and additional features needed. We provide transparent pricing with no hidden fees.",
  },
  {
    id: "2",
    question: "How long does it take to build a website?",
    answer:
      "A basic website typically takes 1-2 weeks to complete. More complex websites with custom features may take 3-4 weeks. We'll provide you with a specific timeline based on your project requirements during our initial consultation.",
  },
  {
    id: "3",
    question: "Do you provide website maintenance?",
    answer:
      "Yes, we offer website maintenance packages to keep your site secure, updated, and running smoothly. Our maintenance plans include regular updates, security checks, backups, and technical support.",
  },
  {
    id: "4",
    question: "Will my website be mobile-friendly?",
    answer:
      "All our websites are fully responsive and optimized for all devices including smartphones, tablets, and desktops. We test on multiple screen sizes to ensure a seamless experience for all users.",
  },
  {
    id: "5",
    question: "Do you help with domain registration and hosting?",
    answer:
      "Yes, we provide complete domain registration and hosting setup services. We'll help you choose the right domain name and set up reliable hosting that suits your website's needs and budget.",
  },
]
