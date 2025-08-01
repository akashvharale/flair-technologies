"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { footer } from "@/app/constant";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className={footer.companyInfo.logo.className}>
                <span className="text-white font-bold text-xl">{footer.companyInfo.logo.letter}</span>
              </div>
              <span className="text-xl font-bold">{footer.companyInfo.name}</span>
            </div>
            <p className="text-gray-300">{footer.companyInfo.description}</p>
            <div className="flex space-x-4">
              {footer.companyInfo.socialLinks.map((link, index) => (
                <a key={index} href={link.href} className={link.className}>
                  <link.icon className={link.size} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {footer.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-sky-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Popular Courses</h3>
            <ul className="space-y-2">
              {footer.courses.map((course) => (
                <li key={course}>
                  <Link
                    href={`/courses/${course
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="text-gray-300 hover:text-sky-400 transition-colors"
                  >
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              {footer.contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <info.icon className={info.iconClass} />
                  <div>
                    <p className="text-gray-300">{info.title}:</p>
                    <p className="text-sm text-gray-400">{info.address || info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}