import { useTitle } from "../../hooks/useTitle"
import { Faq } from "./components/Faq"
import { FeaturedProduct } from "./components/FeaturedProduct"
import { Hero } from "./components/Hero"
import { Testimonial } from "./components/Testimonial"

export const Homepage = () => {
  useTitle("Access Latest Computer Science eBooks")
  return (
    <main>
        <Hero />
        <FeaturedProduct />
        <Testimonial />
        <Faq />
    </main>
  )
}


