export interface Inquiry {
  id: string
  name: string
  email: string
  whatsapp?: string
  message: string
  date: string
  status: "new" | "responded" | "archived"
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface Project {
  id: string
  title: string
  category: string
  description: string
  image: string
  link: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  image: string
  quote: string
  stars: number
}

export interface FAQ {
  id: string
  question: string
  answer: string
}
