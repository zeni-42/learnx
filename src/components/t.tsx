"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "VP of Claims Operations",
    company: "Metropolitan Insurance",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "This AI fraud detection system has revolutionized our claims process. We've reduced fraudulent payouts by 42% while improving legitimate claim processing speed by 60%. The ROI was evident within the first quarter.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    company: "AutoGuard Insurance",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "The predictive modeling accuracy is impressive. The system catches fraud patterns our human reviewers missed, and the explainable AI features help our team understand and trust the recommendations.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Senior Claims Manager",
    company: "Shield Auto Insurance",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "Implementation was seamless, and the training was excellent. Our team adapted quickly, and we're now processing 40% more claims with the same staff while maintaining higher accuracy rates.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how leading insurance companies are transforming their claims operations and reducing fraud with our
            AI-powered solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</blockquote>

                  {/* Author */}
                  <div className="flex items-center">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-violet-600 font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-8">Trusted by 200+ insurance companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Company logos would go here - using placeholder text for now */}
            <div className="text-2xl font-bold text-gray-400">MetLife</div>
            <div className="text-2xl font-bold text-gray-400">Allstate</div>
            <div className="text-2xl font-bold text-gray-400">Progressive</div>
            <div className="text-2xl font-bold text-gray-400">GEICO</div>
            <div className="text-2xl font-bold text-gray-400">State Farm</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
