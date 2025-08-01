"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { freshersPage } from "@/app/constant"
import { ArrowRight, Calendar, CheckCircle, Star } from "lucide-react"

export default function FreshersPage() {
  const { heroSection, statsSection, programsSection, testimonialsSection, applicationFormSection } = freshersPage

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-500 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <Badge className="bg-white text-sky-600 hover:bg-gray-100">{heroSection.badge}</Badge>
                <h1 className="heading" dangerouslySetInnerHTML={{ __html: heroSection.title }} />
                <p className="description max-w-lg">{heroSection.description}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {heroSection.buttons.map((button, index) => (
                  <Button
                    key={index}
                    size="lg"
                    variant={"outline"}
                    className={button.className}
                  >
                    {button.text} {button.icon && <button.icon className="ml-2 h-5 w-5" />}
                  </Button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                {heroSection.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src={heroSection.image}
                alt={heroSection.imageAlt}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-yellow-400 to-green-500 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statsSection.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 icon-button-color rounded-full text-white mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-sky-100 text-sky-700">{programsSection.badge}</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4" dangerouslySetInnerHTML={{ __html: programsSection.title }} />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{programsSection.description}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programsSection.programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-green-500 text-white">{program.placement} Placement</Badge>
                      <div className="text-2xl font-bold text-green-600">{program.price}</div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                      {program.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {program.duration}
                      </div>
                      <div className="text-green-600 font-semibold">{program.courses.length} Modules</div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">What You'll Learn:</h4>
                      <div className="space-y-1">
                        {program.courses.map((course, courseIndex) => (
                          <div key={courseIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-gray-700">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full icon-button-color hover:from-sky-600 hover:to-blue-700">
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700">{testimonialsSection.badge}</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4" dangerouslySetInnerHTML={{ __html: testimonialsSection.title }} />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{testimonialsSection.description}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsSection.testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-sky-600">{testimonial.role}</div>
                        <div className="text-xs text-gray-500">{testimonial.course}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <Badge className="bg-white text-sky-600">{applicationFormSection.badge}</Badge>
                <h2 className="text-4xl font-bold leading-tight">{applicationFormSection.title}</h2>
                <p className="description">{applicationFormSection.description}</p>
              </div>

              <div className="space-y-4">
                {applicationFormSection.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-white text-gray-900">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">{applicationFormSection.form.title}</CardTitle>
                  <CardDescription className="text-center">{applicationFormSection.form.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {applicationFormSection.form.fields.map((field, index) => {
                      if (field.grid) {
                        return (
                          <Input
                            key={index}
                            placeholder={field.placeholder}
                            type={field.type}
                            className={field.grid}
                          />
                        )
                      }
                      return null
                    })}
                  </div>
                  {applicationFormSection.form.fields.map((field, index) => {
                    if (!field.grid && field.type !== "select" && field.type !== "textarea") {
                      return (
                        <Input
                          key={index}
                          placeholder={field.placeholder}
                          type={field.type}
                        />
                      )
                    }
                    if (field.type === "select") {
                      return (
                        <Select key={index}>
                          <SelectTrigger>
                            <SelectValue placeholder={field.placeholder} />
                          </SelectTrigger>
                          <SelectContent>
                            {field.options?.map((option, optIndex) => (
                              <SelectItem key={optIndex} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )
                    }
                    if (field.type === "textarea") {
                      return (
                        <Textarea key={index} placeholder={field.placeholder} />
                      )
                    }
                    return null
                  })}
                  <Button className={applicationFormSection.form.submitButton.className}>
                    {applicationFormSection.form.submitButton.text}
                    {applicationFormSection.form.submitButton.icon && (
                      <applicationFormSection.form.submitButton.icon className="ml-2 h-5 w-5" />
                    )}
                  </Button>
                  <p className="text-xs text-gray-500 text-center">{applicationFormSection.form.disclaimer}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}