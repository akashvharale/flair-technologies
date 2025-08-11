"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { contactPage } from "@/app/constant"
import { Clock, Globe, Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const {
    heroSection,
    aboutSection,
    contactInfoSection,
    officeHoursSection,
    quickActionsSection,
    contactFormSection,
    locationsSection,
    mapSection,
    faqSection,
  } = contactPage

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="background text-white py-32">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-4 bg-white text-sky-600">{heroSection.badge}</Badge>
            <h1 className="heading" dangerouslySetInnerHTML={{ __html: heroSection.title }} />
            <p className="description max-w-3xl mx-auto">{heroSection.description}</p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-2xl border-l-4 border-cyan-400">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{aboutSection.title}</h2>
              <p className="text-gray-700 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: aboutSection.description }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center gap-2">
                    <contactFormSection.form.submitButton.icon className="h-6 w-6 text-sky-600" />
                    {contactFormSection.title}
                  </CardTitle>
                  <CardDescription>{contactFormSection.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactFormSection.form.fields.map((field, index) => (
                    <div key={index} className={field.grid || ""}>
                      {field.type === "select" ? (
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder={field.placeholder} />
                          </SelectTrigger>
                          <SelectContent>
                            {field?.options?.map((option, optIndex) => (
                              <SelectItem key={optIndex} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : field.type === "textarea" ? (
                        <Textarea placeholder={field.placeholder} className={field.className} />
                      ) : (
                        <Input placeholder={field.placeholder} type={field.type} />
                      )}
                    </div>
                  ))}
                  <Button className={contactFormSection.form.submitButton.className}>
                    {contactFormSection.form.submitButton.text}
                    <contactFormSection.form.submitButton.icon className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-xs text-gray-500 text-center">{contactFormSection.form.disclaimer}</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{quickActionsSection.title}</h2>
                <p className="text-gray-600 text-lg mb-8">{quickActionsSection.description}</p>
              </div>

              {/* Office Hours */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-sky-600" />
                    {officeHoursSection.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHoursSection.officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-700">{schedule.day}</span>
                        <span className="font-semibold text-gray-900">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="space-y-4">
                {quickActionsSection.buttons.map((button, index) => (
                  <Button key={index} className={button.className} variant={"outline"}>
                    {button.icon && <button.icon className="mr-2 h-5 w-5" />}
                    {button.text}
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-cyan-100 text-cyan-700">{locationsSection.badge}</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4" dangerouslySetInnerHTML={{ __html: locationsSection.title }} />
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">{locationsSection.description}</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {contactInfoSection.contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 icon-button-color rounded-full flex items-center justify-center text-white mx-auto mb-4">
                      <info.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl font-bold text-cyan-600 uppercase tracking-wide">
                      {info.title === "Bangalore Center" ? "BANGALORE" : 
                       info.title === "Hyderabad Center" ? "HYDERABAD" : "LONDON"}
                    </CardTitle>
                    <div className="h-0.5 w-12 bg-cyan-400 mx-auto"></div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {info.subtitle ? info.subtitle : "FLAIR TECHNOLOGIES"}
                      </h3>
                      <div className="space-y-1 mb-4">
                        <p className="text-gray-700 font-medium">Address:</p>
                        {info.details.slice(0, -1).map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 text-sm">
                            {detail}
                          </p>
                        ))}
                        <p className="text-gray-600 text-sm font-medium mt-2">
                          {info.details[info.details.length - 1]}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                          <Phone className="h-4 w-4 text-sky-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Tel:</p>
                          <p className="font-semibold text-gray-900">{info.phone}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                          <Mail className="h-4 w-4 text-sky-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Mail:</p>
                          <p className="font-semibold text-gray-900 text-sm">{info.email}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                          <Globe className="h-4 w-4 text-sky-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Web:</p>
                          <p className="font-semibold text-gray-900 text-sm">{info.web}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{mapSection.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{mapSection.description}</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mapSection.maps.map((map, index) => (
              <motion.div
                key={map.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg overflow-hidden">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {map.title.includes("London") ? (
                        <Globe className="h-5 w-5 text-cyan-600" />
                      ) : (
                        <MapPin className="h-5 w-5 text-sky-600" />
                      )}
                      {map.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="h-64 bg-gray-200 relative">
                      <iframe
                        src={map.iframeSrc}
                        width="100%"
                        height="256"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600">{map.address}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-sky-100 text-sky-700">{faqSection.badge}</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4" dangerouslySetInnerHTML={{ __html: faqSection.title }} />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqSection.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}