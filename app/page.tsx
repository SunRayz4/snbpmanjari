import Navbar from "@/components/navbar"
import AdmissionMarquee from "@/components/marquee"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import Footer from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, GraduationCap, Award, Clock, Users } from "lucide-react"

export default function Home() {
  return (
    <main>
      <Navbar />
      <AdmissionMarquee />
      <HeroSection />
      <FeaturesSection />

      {/* News & Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Latest <span className="text-accent">News & Events</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Annual Day Celebration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-accent mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">March 15, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Annual Day Celebration</h3>
                <p className="text-gray-600 mb-4">
                  Join us for a spectacular showcase of talent at our Annual Day celebration.
                </p>
                <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Event 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Science Exhibition"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-accent mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">April 10, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Science Exhibition</h3>
                <p className="text-gray-600 mb-4">
                  Witness innovative projects and experiments at our annual Science Exhibition.
                </p>
                <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Event 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=300&width=500" alt="Sports Day" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center text-accent mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">May 5, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Annual Sports Meet</h3>
                <p className="text-gray-600 mb-4">
                  Cheer for our athletes as they compete in various sports at our Annual Sports Meet.
                </p>
                <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <GraduationCap className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-4xl font-bold mb-2">2000+</h3>
              <p className="text-gray-300">Students</p>
            </div>
            <div>
              <Award className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-4xl font-bold mb-2">25+</h3>
              <p className="text-gray-300">Years of Excellence</p>
            </div>
            <div>
              <Clock className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-4xl font-bold mb-2">100%</h3>
              <p className="text-gray-300">Placement Rate</p>
            </div>
            <div>
              <Users className="h-12 w-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-4xl font-bold mb-2">150+</h3>
              <p className="text-gray-300">Expert Faculty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            What <span className="text-accent">Parents Say</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image src="/placeholder.svg?height=100&width=100" alt="Parent" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold">Priya Sharma</h4>
                  <p className="text-sm text-gray-500">Parent of Grade 8 Student</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "SNBP International School has provided my child with an excellent learning environment. The teachers
                are dedicated and the facilities are top-notch."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image src="/placeholder.svg?height=100&width=100" alt="Parent" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold">Rajesh Patel</h4>
                  <p className="text-sm text-gray-500">Parent of Grade 5 Student</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The holistic approach to education at SNBP has helped my daughter develop not just academically, but
                also in sports and arts. We couldn't be happier with our choice."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image src="/placeholder.svg?height=100&width=100" alt="Parent" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold">Anita Desai</h4>
                  <p className="text-sm text-gray-500">Parent of Grade 10 Student</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The individual attention given to each student is remarkable. My son has flourished academically and
                gained confidence since joining SNBP International School."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join SNBP INTERNATIONAL School?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Take the first step towards providing your child with a world-class education. Limited seats available for
            the academic year 2025-26.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-accent hover:bg-gray-100 font-semibold py-3 px-8 text-lg">
              Apply Now
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-semibold py-3 px-8 text-lg"
            >
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

