"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { batchesPage } from "@/app/constant"
import { Clock, Users, Calendar, MapPin, Monitor, ExternalLink } from "lucide-react"

export default function BatchesPage() {
  const { heroSection, statsSection, batchesSection, whyChooseUsSection, ctaSection } = batchesPage

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="background text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-4 bg-white text-sky-600">{heroSection.badge}</Badge>
            <h1 className="heading" dangerouslySetInnerHTML={{ __html: heroSection.title }} />
            <p className="description max-w-3xl mx-auto">{heroSection.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsSection.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl mb-2">{stat.emoji}</div>
                <div className="text-3xl font-bold text-sky-600 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Batches Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-cyan-100 text-cyan-700">{batchesSection.badge}</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4" dangerouslySetInnerHTML={{ __html: batchesSection.title }} />
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">{batchesSection.description}</p>
          </motion.div>

          {/* Course Cards Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {batchesSection.batches.map((batch, index) => (
              <motion.div
                key={batch.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full bg-white/90 backdrop-blur-sm group hover:-translate-y-2">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 ${batch.iconBg} rounded-2xl flex items-center justify-center text-white text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        {batch.icon}
                      </div>
                      <div className="flex-1">
                        <Badge className="mb-2 bg-sky-100 text-sky-700 text-xs">
                          {batch.category}
                        </Badge>
                        <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                          {batch.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Duration */}
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                        <Clock className="h-4 w-4 text-cyan-600" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">Duration</p>
                        <p className="font-semibold text-gray-900">{batch.duration}</p>
                      </div>
                    </div>

                    {/* Faculty */}
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4 text-sky-600" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">Faculty</p>
                        <p className="font-semibold text-gray-900">{batch.faculty}</p>
                      </div>
                    </div>

                    {/* New Batch */}
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">New Batch</p>
                        <p className="font-semibold text-gray-900">{batch.newBatch}</p>
                      </div>
                    </div>

                    {/* Sessions */}
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">Schedule</p>
                        <p className="font-semibold text-gray-900">{batch.sessions}</p>
                      </div>
                    </div>

                    {/* Mode */}
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        {batch.mode.includes("Online") ? 
                          <Monitor className="h-4 w-4 text-orange-600" /> : 
                          <MapPin className="h-4 w-4 text-orange-600" />
                        }
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">Mode</p>
                        <p className="font-semibold text-gray-900">{batch.mode}</p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 space-y-3 border-t border-gray-100">
                      <Button className="w-full icon-button-color hover:from-sky-600 hover:to-blue-700 text-white font-semibold py-3">
                        ENROLL NOW
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full border-red-500 text-red-600 hover:bg-red-500 hover:text-white font-semibold py-3"
                      >
                        View Course <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-sky-100 text-sky-700">{whyChooseUsSection.badge}</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4" dangerouslySetInnerHTML={{ __html: whyChooseUsSection.title }} />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsSection.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{feature.emoji}</div>
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 background text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: ctaSection.title }} />
            <p className="description mb-8 max-w-2xl mx-auto">{ctaSection.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {ctaSection.buttons.map((button, index) => (
                <Button
                  key={index}
                  size="lg"
                  className={button.className}
                >
                  {button.text}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}