"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Monitor } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { homePage } from "@/app/constant";
import { TestimonialsCarousel } from "@/components/Testimonials";
import { useRouter } from "next/navigation";
import { ExpertsCarousel } from "@/components/ExpertsCarousel";
import BookADemoForm from "@/components/homePage/BookADemoForm";
import UpcomingBatchesSection from "@/components/homePage/UpcomingBatchesSection";
import { EnrollDialog } from "@/components/EnrollDialog";
import { NavigationDemoBtn } from "@/components/NavigationDemoBtn";

export default function HomePage() {
  const navigate = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden background text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-32 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <Badge className="bg-white text-sky-600 hover:bg-gray-100">
                  🚀 Transform Your Career in Tech
                </Badge>
                <h1 className="heading">{homePage.heroSection.title}</h1>
                <p className="description max-w-lg">
                  {homePage.heroSection.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* <Button
                  size="lg"
                  className="bg-white text-sky-600 hover:bg-gray-100 text-lg px-8"
                >
                  Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button> */}
                <EnrollDialog
                  buttonText={`Enroll Now`}
                  className="bg-white text-sky-600 hover:bg-gray-100 text-lg px-8"
                  size="lg"
                />
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-sky-600 text-lg px-8 bg-transparent"
                >
                  Book Free Demo
                </Button> */}
                <NavigationDemoBtn
                  size="lg"
                  buttonText="Book Free Demo"
                  className="bg-transpartent text-white border border-white hover:bg-gray-100 hover:text-sky-600 text-lg px-8"
                />
              </div>

              <div className="flex items-center gap-8 pt-4">
                {homePage.heroSection.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold">{stat.value}</div>
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
              <div className="relative z-10">
                <img
                  src="https://media.istockphoto.com/id/1830042746/photo/document-management-system-dms-with-arrange-folder-and-files-icons-man-setup-storage-backup.jpg?s=612x612&w=0&k=20&c=t8oAAO16j6fMhleAYJEXm5pSXFIDZrEG6sYJkv_Sdos="
                  alt="Flair Technologies Training"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              {/* <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl -z-10" /> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {homePage.statsSection.map((stat, index) => (
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
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <UpcomingBatchesSection />

      {/* About Flair Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-sky-100">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Badge className="bg-sky-100 text-sky-700">
              {homePage.aboutSection.badge}
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900">
              {homePage.aboutSection.title}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {homePage.aboutSection.description}
            </p>
            <Link href="/about">
              <Button className="icon-button-color mt-3 hover:bg-sky-700 text-white px-6 py-3 text-lg">
                Know More
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src={homePage.aboutSection.image}
              alt={homePage.aboutSection.imageAlt}
              className="rounded-xl shadow-xl w-full"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 4l10 6-10 6V4z" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Best Learning Experience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {homePage.learningExperienceSection.title}
            </h2>
            <ul className="space-y-4 text-lg text-gray-700">
              {homePage.learningExperienceSection.features.map(
                (feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✔</span> {feature}
                  </li>
                )
              )}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src={homePage.learningExperienceSection.image}
              alt={homePage.learningExperienceSection.imageAlt}
              className="rounded-xl shadow-xl w-full"
            />
            <div className="absolute bottom-4 left-4">
              <div className="w-14 h-14 bg-sky-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 4l10 6-10 6V4z" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Flair Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900">
              {homePage.whyFlairSection.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {homePage.whyFlairSection.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-sky-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Of Flair Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900">
              {homePage.benefitsSection.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg text-gray-700">
            {homePage.benefitsSection.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-start gap-3"
              >
                <span className="text-sky-600 mt-1">✔</span>
                <p>{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Batches Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              {homePage.upcomingBatchesSection.title}
            </h2>
          </motion.div>

          <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
            <table className="min-w-full text-sm text-left text-gray-700">
              <thead className="background text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">#</th>
                  <th className="px-4 py-3 font-semibold">Course Name</th>
                  <th className="px-4 py-3 font-semibold">Mode</th>
                  <th className="px-4 py-3 font-semibold">Faculty</th>
                  <th className="px-4 py-3 font-semibold">Date</th>
                  <th className="px-4 py-3 font-semibold">Time</th>
                  <th className="px-4 py-3 font-semibold">Duration</th>
                  <th className="px-4 py-3 font-semibold">Course</th>
                  <th className="px-4 py-3 font-semibold">Register</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {homePage.upcomingBatchesSection.batches.map((batch, index) => (
                  <tr
                    key={batch.id}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                  >
                    <td className="px-4 py-3">{batch.id}</td>
                    <td className="px-4 py-3 font-medium">{batch.name}</td>
                    <td className="px-4 py-3">{batch.mode}</td>
                    <td className="px-4 py-3">{batch.faculty}</td>
                    <td className="px-4 py-3">{batch.date}</td>
                    <td className="px-4 py-3">{batch.time}</td>
                    <td className="px-4 py-3">{batch.duration}</td>
                    <td className="px-4 py-3 text-sky-600 font-semibold underline cursor-pointer">
                      View
                    </td>
                    <td className="px-4 py-3">
                      <button className="text-white bg-sky-600 hover:bg-sky-700 px-3 py-1 rounded-md text-sm">
                        REGISTER
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section> */}

      {/* Featured Courses */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-sky-100 text-sky-700">
              Featured Courses
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {homePage.featuredCoursesSection.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {homePage.featuredCoursesSection.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homePage.featuredCoursesSection.featuredCourses.map(
              (course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-green-500 text-white">
                          Popular
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-sky-600 transition-colors">
                        {course.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {course.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Monitor className="h-4 w-4" />
                          {course.mode}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <Link href={`/courses/${course.id}`}>
                          <Button className="icon-button-color hover:from-sky-600 hover:to-blue-700">
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link href="/courses">
              <Button
                size="lg"
                variant="outline"
                className="border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white bg-transparent"
              >
                View All Courses <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700">
              {homePage.whyChooseUsSection.badge}
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {homePage.whyChooseUsSection.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homePage.whyChooseUsSection.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 icon-button-color rounded-full text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className=" pb-20 pt-10">
        <div className="  container mx-auto px-4 mt-10 flex flex-col lg:flex-row gap-12 items-start">
          {/* Testimonials Section */}
          <TestimonialsCarousel />
          <div className="w-full lg:w-1/2">
            <BookADemoForm btnName="Book a Demo" />
          </div>
        </div>
      </section>

      <ExpertsCarousel />

      {/* CTA Section */}
      <section className="py-20 background text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {homePage.ctaSection.title}
            </h2>
            <p className="description mb-8 max-w-2xl mx-auto">
              {homePage.ctaSection.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-sky-600 hover:bg-gray-100 text-lg px-8"
                >
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/freshers">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-sky-600 text-lg px-8 bg-transparent"
                >
                  Freshers Program
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
