"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  ConsultingAdditionalInfo,
  OutsourcingAdditionalInfo,
  servicesData,
  TrainingAdditionalInfo,
} from "@/app/constant";

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug as keyof typeof servicesData];

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="heading">Service Not Found</h1>
          <p className="text-gray-600 mb-8">
            The service you're looking for doesn't exist.
          </p>
          <Link href="/services">
            <Button>View All Services</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      <section className="background text-white py-32">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Badge className="bg-white text-sky-600">
              Professional Service
            </Badge>
            <h1 className="heading">{service.title}</h1>
            <p className="description">{service.description}</p>

            <div className="grid md:grid-cols-2 gap-4">
              {service.highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-3 h-3 mt-1 rounded-full bg-green-400"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-white text-sky-600 hover:bg-gray-100 text-lg px-8"
            >
              Contact Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              className="rounded-2xl shadow-2xl h-[350px] w-full"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50 text-xl">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {params.slug === "it-training" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About Our IT Training
                </h2>
                <p className="text-gray-700 mb-4">
                  {service.additionalInfo.intro}
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Training Methodology
                </h3>
                <p className="text-gray-700 mb-4">
                  {
                    (service.additionalInfo as TrainingAdditionalInfo)
                      .methodology
                  }
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Quality Standards
                </h3>
                <p className="text-gray-700 mb-4">
                  {
                    (service.additionalInfo as TrainingAdditionalInfo)
                      .qualityStandards
                  }
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Courses Offered
                </h3>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  {(
                    service.additionalInfo as TrainingAdditionalInfo
                  ).coursesOffered.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
                <p className="text-gray-700 mb-4">
                  {
                    (service.additionalInfo as TrainingAdditionalInfo)
                      .innovation
                  }
                </p>
                <p className="text-gray-700">
                  {(service.additionalInfo as TrainingAdditionalInfo).contact}
                </p>
              </div>
            )}
            {params.slug === "it-consulting" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About Our IT Consulting
                </h2>
                <p className="text-gray-700 mb-4">
                  {service.additionalInfo.intro}
                </p>
                <p className="text-gray-700 mb-4">
                  {
                    (service.additionalInfo as ConsultingAdditionalInfo)
                      .benefits
                  }
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Our Consulting Portfolio
                </h3>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  {(
                    service.additionalInfo as ConsultingAdditionalInfo
                  ).portfolio.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Permanent Hire Services
                </h3>
                <p className="text-gray-700 mb-4">
                  {
                    (service.additionalInfo as ConsultingAdditionalInfo)
                      .permanentHire
                  }
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Contract Staffing
                </h3>
                <p className="text-gray-700 mb-4">
                  {
                    (service.additionalInfo as ConsultingAdditionalInfo)
                      .contractStaffing
                  }
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Screening Process
                </h3>
                <p className="text-gray-700 mb-4">
                  {
                    (service.additionalInfo as ConsultingAdditionalInfo)
                      .screening
                  }
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Temporary Staffing
                </h3>
                <p className="text-gray-700">
                  {
                    (service.additionalInfo as ConsultingAdditionalInfo)
                      .temporaryStaffing
                  }
                </p>
              </div>
            )}
            {params.slug === "it-outsourcing" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About Our IT Outsourcing
                </h2>
                <p className="text-gray-700 mb-4">
                  {service.additionalInfo.intro}
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Services Offered
                </h3>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  {(
                    service.additionalInfo as OutsourcingAdditionalInfo
                  ).services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Key Differentiators
                </h3>
                <p className="text-gray-700 mb-4">
                  {
                    (service.additionalInfo as OutsourcingAdditionalInfo)
                      .differentiators.totalOutsourcing
                  }
                </p>
                <p className="text-gray-700 mb-4">
                  {
                    (service.additionalInfo as OutsourcingAdditionalInfo)
                      .differentiators.globalDelivery
                  }
                </p>
                <p className="text-gray-700 mb-4">
                  {
                    (service.additionalInfo as OutsourcingAdditionalInfo)
                      .differentiators.flexibleDelivery
                  }
                </p>
                <p className="text-gray-700 mb-4">
                  {
                    (service.additionalInfo as OutsourcingAdditionalInfo)
                      .businessGrowth
                  }
                </p>
                <p className="text-gray-700">
                  {
                    (service.additionalInfo as OutsourcingAdditionalInfo)
                      .recruitingSupport
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
