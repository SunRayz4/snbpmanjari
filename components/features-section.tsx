import { BookOpen, Users, Trophy, Globe } from "lucide-react"

const features = [
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Academic Excellence",
    description: "Comprehensive curriculum designed to nurture critical thinking and creativity.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Experienced Faculty",
    description: "Dedicated teachers committed to bringing out the best in every student.",
  },
  {
    icon: <Trophy className="h-10 w-10 text-primary" />,
    title: "Extracurricular Activities",
    description: "Wide range of sports, arts, and cultural activities for holistic development.",
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Global Perspective",
    description: "International curriculum preparing students for a global future.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Why Choose <span className="text-accent">SNBP INTERNATIONAL</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

