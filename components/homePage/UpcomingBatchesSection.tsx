"use client";
import { motion } from "framer-motion";
import { homePage } from "@/app/constant";
import { EnrollDialog } from "../EnrollDialog";
import {
  Calendar,
  Clock,
  Timer,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function UpcomingBatchesTable() {
  const techLogos: Record<string, string> = {
    "Microsoft Power BI":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzt9YhmDCCNxLzB2BVpTJvvcYnzIcwIXdr_g&s",
    "Alteryx Designer":
      "https://community.alteryx.com/t5/image/serverpage/image-id/259688iF6C1C4BD0BC11851?v=v2",
    "Python Fullstack":
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
    "Data Analyst - Freshers":
      "https://static.vecteezy.com/system/resources/previews/026/513/688/non_2x/data-analytics-logo-design-growth-arrow-logo-design-for-data-finance-investment-vector.jpg",
    "SRE Modern DevOps":
      "https://images.seeklogo.com/logo-png/42/1/devops-logo-png_seeklogo-423085.png",
    "DevOps Workshop":
      "https://images.seeklogo.com/logo-png/42/1/devops-logo-png_seeklogo-423085.png",
    "Azure with Azure DevOps":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5oYBDyTlsQEl2M_B-GqF1PPryFy1H-34ZeA&s",
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-sky-600">
            {homePage.upcomingBatchesSection.title}
          </h2>
        </motion.div>
        <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
          <table className="min-w-full text-lg text-left text-gray-700">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-3 font-semibold">Course</th>
                <th className="px-4 py-3 font-semibold">Mode</th>
                <th className="px-4 py-3 font-semibold">Date</th>
                <th className="px-4 py-3 font-semibold">Duration</th>
                <th className="px-4 py-3 font-semibold text-center w-72">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {homePage.upcomingBatchesSection.batches.map((batch, index) => (
                <tr
                  key={batch.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-white"}
                >
                  <td className="px-4 py-3 flex items-center gap-2 font-medium">
                    {techLogos[batch.name] && (
                      <img
                        src={techLogos[batch.name]}
                        alt={`${batch.name} logo`}
                        className="w-6 h-6 rounded-full"
                      />
                    )}
                    {batch.name}
                  </td>
                  <td className="px-4 py-3">{batch.mode}</td>
                  <td className="px-4 py-3">{batch.date}</td>
                  <td className="px-4 py-3">{batch.duration}</td>

                  <td className="flex gap-2 justify-between items-center px-4  py-2">
                    <Link href="/my-course.pdf" target="_blank">
                      <Button
                        className="border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white bg-transparent text-sm font-medium px-3 py-2"
                        size="lg"
                      >
                        View   Brochure <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <EnrollDialog
                      formHeading="Enroll Now"
                      buttonText={`Enroll Now`}
                      className="icon-button-color hover:from-sky-600 hover:to-blue-700 hover:bg-sky-600 hover:text-white text-sm font-medium px-4 py-2"
                      size="lg"
                    />
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
