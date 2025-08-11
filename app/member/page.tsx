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
import { Input } from "@/components/ui/input";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CheckCircle, Upload } from "lucide-react";

export default function MentorPage() {
  const mentorPage = {
    heroSection: {
      badge: "Join Our Team",
      title: "Become a <span class='text-yellow-400'>Mentor</span>",
      description: "Share your expertise and shape the future of aspiring professionals. Join our mentorship program and make a lasting impact.",
      image: "/mentor-hero.jpg",
      imageAlt: "Mentor guiding students",
      buttons: [
        {
          text: "Apply Now",
          className: "bg-white text-sky-600 hover:bg-gray-100",
          icon: CheckCircle,
        },
      ],
      stats: [
        { value: "100+", label: "Mentors" },
        { value: "5000+", label: "Students Guided" },
      ],
    },
    benefitsSection: {
      badge: "Why Mentor?",
      title: "Benefits of Becoming a <span class='text-sky-600'>Mentor</span>",
      description: "Mentoring with us offers unique opportunities to grow professionally while making a difference.",
      benefits: [
        {
          icon: CheckCircle,
          label: "Inspire the Next Generation",
          value: "Guide and motivate aspiring professionals",
        },
        {
          icon: CheckCircle,
          label: "Expand Your Network",
          value: "Connect with industry leaders and peers",
        },
        {
          icon: CheckCircle,
          label: "Professional Growth",
          value: "Enhance your leadership and coaching skills",
        },
        {
          icon: CheckCircle,
          label: "Give Back",
          value: "Contribute to the community and share your expertise",
        },
      ],
    },
    applicationFormSection: {
      badge: "Apply Today",
      title: "Join Our Mentorship Program",
      description: "Fill out the form below to start your journey as a mentor. We’re excited to have you on board!",
      features: [
        "Flexible mentoring schedules",
        "Access to exclusive mentor resources",
        "Join a vibrant community of educators",
        "Make a meaningful impact",
      ],
      form: {
        title: "Mentor Application",
        description: "Please provide your details to apply as a mentor.",
        fields: [
          { placeholder: "Full Name", type: "text", grid: "col-span-2" },
          { placeholder: "Email Address", type: "email", grid: "col-span-1" },
          { placeholder: "Phone Number", type: "tel", grid: "col-span-1" },
          { placeholder: "Upload Resume", type: "file", grid: "col-span-2" },
        ],
        submitButton: {
          text: "Submit Application",
          className: "w-full bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white",
          icon: Upload,
        },
        disclaimer: "By submitting, you agree to our terms and conditions.",
      },
    },
  };

  const {
    heroSection,
    benefitsSection,
    applicationFormSection,
  } = mentorPage;

  const handleApplyNowClick = () => {
    const applicationSection = document.querySelector("#application-form");
    if (applicationSection) {
      applicationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 relative overflow-hidden bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-500 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <Badge className="bg-white text-sky-600 hover:bg-gray-100">
                  {heroSection.badge}
                </Badge>
                <h1
                  className="text-4xl lg:text-5xl font-bold leading-tight"
                  dangerouslySetInnerHTML={{ __html: heroSection.title }}
                />
                <p className="text-lg text-blue-100 max-w-lg">
                  {heroSection.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {heroSection.buttons.map((button, index) => (
                  <Button
                    key={index}
                    size="lg"
                    variant="outline"
                    className={button.className}
                    onClick={handleApplyNowClick}
                  >
                    {button.text}{" "}
                    {button.icon && <button.icon className="ml-2 h-5 w-5" />}
                  </Button>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:w-full md:w-1/2 pt-4">
                {heroSection.stats.map((stat, index) => (
                  <div key={index} className="text-left">
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
                src="https://tibet.net/wp-content/uploads/2020/06/1-1-1024x585.jpg"
                alt={heroSection.imageAlt}
                className="rounded-2xl shadow-2xl lg:w-[650px] lg:h-[350px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-sky-100 text-sky-700">
              {benefitsSection.badge}
            </Badge>
            <h2
              className="text-4xl font-bold text-gray-900 mb-4"
              dangerouslySetInnerHTML={{ __html: benefitsSection.title }}
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {benefitsSection.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefitsSection.benefits.map((benefit, index) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sky-600 to-blue-700 rounded-full text-white mb-4">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {benefit.label}
                </div>
                <div className="text-gray-600">{benefit.value}</div>
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
                <Badge className="bg-white text-sky-600">
                  {applicationFormSection.badge}
                </Badge>
                <h2 className="text-4xl font-bold leading-tight">
                  {applicationFormSection.title}
                </h2>
                <p className="text-lg text-blue-100">
                  {applicationFormSection.description}
                </p>
              </div>

              <div className="space-y-4">
                {applicationFormSection.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-white" />
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
              <Card id="application-form" className="bg-white text-gray-900">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    {applicationFormSection.form.title}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {applicationFormSection.form.description}
                  </CardDescription>
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
                            accept={field.type === "file" ? ".pdf,.doc,.docx" : undefined}
                          />
                        );
                      }
                      return null;
                    })}
                  </div>
                  <Button
                    className={applicationFormSection.form.submitButton.className}
                  >
                    {applicationFormSection.form.submitButton.text}
                    {applicationFormSection.form.submitButton.icon && (
                      <applicationFormSection.form.submitButton.icon className="ml-2 h-5 w-5" />
                    )}
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    {applicationFormSection.form.disclaimer}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}