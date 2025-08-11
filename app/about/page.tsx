"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { aboutPage } from "@/app/constant"; // Import the constants

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="background text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <Badge className="bg-white text-sky-600">
                  {aboutPage.heroSection.badge}
                </Badge>
                <h1
                  className="heading"
                  dangerouslySetInnerHTML={{
                    __html: aboutPage.heroSection.title,
                  }}
                />
                <p className="description">
                  {aboutPage.heroSection.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {aboutPage.heroSection.stats.map((stat, index) => (
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
                src={aboutPage.heroSection.image}
                width="720px"
                height="480px"
                alt={aboutPage.heroSection.imageAlt}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-sky-600 flex items-center gap-2">
                    <aboutPage.missionVisionSection.mission.icon className="h-6 w-6" />
                    {aboutPage.missionVisionSection.mission.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {aboutPage.missionVisionSection.mission.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-600 flex items-center gap-2">
                    <aboutPage.missionVisionSection.vision.icon className="h-6 w-6" />
                    {aboutPage.missionVisionSection.vision.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {aboutPage.missionVisionSection.vision.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-cyan-100 text-cyan-700">
              {aboutPage.uniqueFeaturesSection.badge}
            </Badge>
            <h2
              className="text-4xl font-bold text-gray-900 mb-4"
              dangerouslySetInnerHTML={{
                __html: aboutPage.uniqueFeaturesSection.title,
              }}
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {aboutPage.uniqueFeaturesSection.description}
            </p>
          </motion.div>

          <div className="space-y-12">
            {aboutPage.uniqueFeaturesSection.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white">
                          <feature.icon className="h-8 w-8" />
                        </div>
                      </div>
                      <div className="flex-1 space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">
                          {feature.title}
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {feature.description}
                        </p>
                        <div className="bg-gradient-to-r from-sky-50 to-cyan-50 p-4 rounded-lg border-l-4 border-sky-500">
                          <p className="text-gray-800 font-medium italic">
                            {feature.highlight}
                          </p>
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

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-sky-100 text-sky-700">
              {aboutPage.valuesSection.badge}
            </Badge>
            <h2
              className="text-4xl font-bold text-gray-900 mb-4"
              dangerouslySetInnerHTML={{
                __html: aboutPage.valuesSection.title,
              }}
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {aboutPage.valuesSection.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutPage.valuesSection.values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 icon-button-color rounded-full text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700">
              {aboutPage.milestonesSection.badge}
            </Badge>
            <h2
              className="text-4xl font-bold text-gray-900 mb-4"
              dangerouslySetInnerHTML={{
                __html: aboutPage.milestonesSection.title,
              }}
            />
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-sky-500 to-blue-600 rounded-full"></div>

            <div className="space-y-12">
              {aboutPage.milestonesSection.milestones.map(
                (milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`w-1/2 ${
                        index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                      }`}
                    >
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="text-2xl font-bold text-sky-600 mb-2">
                            {milestone.year}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {milestone.event}
                          </h3>
                          <p className="text-gray-600">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="relative z-10">
                      <div className="w-4 h-4 icon-button-color rounded-full border-4 border-white shadow-lg"></div>
                    </div>

                    <div className="w-1/2"></div>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-cyan-100 text-cyan-700">
              {aboutPage.leadershipSection.badge}
            </Badge>
            <h2
              className="text-4xl font-bold text-gray-900 mb-4"
              dangerouslySetInnerHTML={{
                __html: aboutPage.leadershipSection.title,
              }}
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {aboutPage.leadershipSection.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutPage.leadershipSection.team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white text-gray-900">
                        {member.experience}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sky-600 font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flair Technologies Section */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={aboutPage.flairTechnologiesSection.image}
                alt={aboutPage.flairTechnologiesSection.imageAlt}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h1 className="heading">
                {aboutPage.flairTechnologiesSection.title}
              </h1>
              <p className="text-gray-700 text-lg mb-6">
                {aboutPage.flairTechnologiesSection.description}
              </p>
              <a href={aboutPage.flairTechnologiesSection.button.href}>
                <Button className="bg-cyan-600 text-white hover:bg-cyan-700">
                  {aboutPage.flairTechnologiesSection.button.text}
                </Button>
              </a>
            </div>
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
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {aboutPage.ctaSection.title}
            </h2>
            <p className="description mb-8 max-w-2xl mx-auto">
              {aboutPage.ctaSection.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {aboutPage.ctaSection.buttons.map((button, index) => (
                <Link key={index} href={button.href}>
                  <Button
                    size="lg"
                    variant={"outline"}
                    className={button.className}
                  >
                    {button.text}{" "}
                    {button.icon && <button.icon className="ml-2 h-5 w-5" />}
                  </Button>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
