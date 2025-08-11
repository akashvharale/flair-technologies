"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { NavigationDemoBtn } from "./NavigationDemoBtn";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isWhyUsOpen, setIsWhyUsOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(
    {}
  );

  const pathname = usePathname();

  const courseCategories = [
    {
      name: "Development",
      courses: [
        { name: "Python Full-Stack", href: "/courses/python-fullstack" },
      ],
    },
    {
      name: "Analytics",
      courses: [
        { name: "Power BI", href: "/courses/power-bi" },
        { name: "Data Analytics", href: "/courses/data-analytics" },
        { name: "Tableau", href: "/courses/tableau" },
      ],
    },
    {
      name: "Cloud",
      courses: [{ name: "Azure DevOps", href: "/courses/azure-devops" }],
    },
    {
      name: "Networking",
      courses: [
        { name: "Network Protocol", href: "/courses/network-protocol" },
      ],
    },
  ];

  const services = [
    { name: "About", href: "/about" },
    { name: "IT Training", href: "/services/it-training" },
    { name: "IT Consulting", href: "/services/it-consulting" },
    { name: "IT Outsourcing", href: "/services/it-outsourcing" },
  ];

  const allCourseHrefs = courseCategories.flatMap((category) =>
    category.courses.map((course) => course.href)
  );

  const toggleCategory = (categoryName: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/flair-tech-logo-2.png"
              alt="Flair Technologies Logo"
              className=" h-[80px] w-full"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center text-gray-700 hover:text-sky-600 transition-colors text-lg font-medium ${
                  services.some((service) => pathname === service.href)
                    ? "text-sky-600 font-semibold"
                    : ""
                }`}
              >
                Why Us <ChevronDown className="ml-2 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white shadow-lg rounded-md border border-gray-100 p-2">
                {services.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link
                      href={service.href}
                      className={`w-full px-3 py-2 rounded-md text-sm ${
                        pathname === service.href
                          ? "text-sky-600 font-semibold bg-sky-50"
                          : "text-gray-700 hover:text-sky-600 hover:bg-sky-50"
                      } transition-colors`}
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center text-gray-700 hover:text-sky-600 transition-colors text-lg font-medium ${
                  allCourseHrefs.includes(pathname) || pathname === "/courses"
                    ? "text-sky-600 font-semibold"
                    : ""
                }`}
              >
                Courses <ChevronDown className="ml-2 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white shadow-lg rounded-md border border-gray-100 p-2">
                {courseCategories.map((category) => (
                  <DropdownMenuSub key={category.name}>
                    <DropdownMenuSubTrigger
                      className={`px-3 py-2 rounded-md text-sm ${
                        category.courses.some(
                          (course) => pathname === course.href
                        )
                          ? "text-sky-600 font-semibold bg-sky-50"
                          : "text-gray-700 hover:text-sky-600 hover:bg-sky-50"
                      } transition-colors`}
                    >
                      {category.name}
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="bg-white shadow-lg rounded-md border border-gray-100 p-2">
                      {category.courses.map((course) => (
                        <DropdownMenuItem key={course.href} asChild>
                          <Link
                            href={course.href}
                            className={`w-full px-3 py-2 rounded-md text-sm ${
                              pathname === course.href
                                ? "text-sky-600 font-semibold bg-sky-50"
                                : "text-gray-700 hover:text-sky-600 hover:bg-sky-50"
                            } transition-colors`}
                          >
                            {course.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                ))}
                <DropdownMenuItem asChild>
                  <Link
                    href="/courses"
                    className={`w-full px-3 py-2 rounded-md text-sm font-semibold ${
                      pathname === "/courses"
                        ? "text-sky-600 bg-sky-50"
                        : "text-gray-700 hover:text-sky-600 hover:bg-sky-50"
                    } transition-colors`}
                  >
                    View All Courses
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/freshers"
              className={`text-gray-700 hover:text-sky-600 transition-colors text-lg font-medium ${
                pathname === "/freshers" ? "text-sky-600 font-semibold" : ""
              }`}
            >
              Freshers Program
            </Link>
            <Link
              href="/contact"
              className={`text-gray-700 hover:text-sky-600 transition-colors text-lg font-medium ${
                pathname === "/contact" ? "text-sky-600 font-semibold" : ""
              }`}
            >
              Contact
            </Link>
            {/* faculty */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center text-gray-700 hover:text-sky-600 transition-colors text-lg font-medium `}
              >
                Faculty
                <ChevronDown className="ml-2 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className=" bg-white shadow-lg rounded-md border border-gray-100 p-2">
                <DropdownMenuItem asChild>
                  <Link
                    href={"/member"}
                    className={`w-full  rounded-md text-sm `}
                  >
                    Become a Mentor
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-stretch space-x-4">
            <a
              href="tel:+919749749596"
              className="flex items-center border border-sky-600 text-sky-600 bg-transparent text-lg font-medium px-3 rounded-md transition-colors"
            >
              +91 9749749596
            </a>
            <NavigationDemoBtn
              buttonText="Book Demo"
              size="lg"
              className="py-2 icon-button-color text-white hover:bg-sky-700 hover:text-white text-lg font-medium px-4 rounded-md h-full"
            />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-sky-600"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-gray-200 py-4 bg-gray-50"
          >
            <div className="flex flex-col space-y-2 px-4">
              <Link
                href="/"
                className={`text-gray-700 hover:text-sky-600 transition-colors py-3 text-base font-medium ${
                  pathname === "/"
                    ? "text-sky-600 font-semibold bg-sky-50 rounded-md px-2"
                    : ""
                }`}
              >
                Home
              </Link>
              <button
                onClick={() => setIsWhyUsOpen(!isWhyUsOpen)}
                className={`flex items-center justify-between text-gray-700 hover:text-sky-600 transition-colors py-3 text-base font-medium ${
                  services.some((service) => pathname === service.href)
                    ? "text-sky-600 font-semibold bg-sky-50 rounded-md px-2"
                    : ""
                }`}
              >
                Why Us
                {isWhyUsOpen ? (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {isWhyUsOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="pl-4 flex flex-col space-y-2 bg-white rounded-md border border-gray-100 p-2"
                >
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`text-gray-700 hover:text-sky-600 transition-colors py-2 text-sm ${
                        pathname === service.href
                          ? "text-sky-600 font-semibold"
                          : ""
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </motion.div>
              )}
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className={`flex items-center justify-between text-gray-700 hover:text-sky-600 transition-colors py-3 text-base font-medium ${
                  allCourseHrefs.includes(pathname) || pathname === "/courses"
                    ? "text-sky-600 font-semibold bg-sky-50 rounded-md px-2"
                    : ""
                }`}
              >
                Courses
                {isCoursesOpen ? (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {isCoursesOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="pl-4 flex flex-col space-y-2 bg-white rounded-md border border-gray-100 p-2"
                >
                  {courseCategories.map((category) => (
                    <div
                      key={category.name}
                      className="flex flex-col space-y-1"
                    >
                      <button
                        onClick={() => toggleCategory(category.name)}
                        className={`flex items-center justify-between text-gray-600 hover:text-sky-600 transition-colors py-2 text-sm font-medium ${
                          category.courses.some(
                            (course) => pathname === course.href
                          )
                            ? "text-sky-600 font-semibold"
                            : ""
                        }`}
                      >
                        {category.name}
                        {openCategories[category.name] ? (
                          <ChevronDown className="h-4 w-4 text-gray-500" />
                        ) : (
                          <ChevronRight className="h-4 w-4 text-gray-500" />
                        )}
                      </button>
                      {openCategories[category.name] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.15 }}
                          className="pl-4 flex flex-col space-y-1"
                        >
                          {category.courses.map((course) => (
                            <Link
                              key={course.href}
                              href={course.href}
                              className={`text-gray-700 hover:text-sky-600 transition-colors py-1 text-sm ${
                                pathname === course.href
                                  ? "text-sky-600 font-semibold"
                                  : ""
                              }`}
                            >
                              {course.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ))}
                  <Link
                    href="/courses"
                    className={`text-gray-700 hover:text-sky-600 transition-colors py-2 text-sm font-medium ${
                      pathname === "/courses"
                        ? "text-sky-600 font-semibold"
                        : ""
                    }`}
                  >
                    View All Courses
                  </Link>
                </motion.div>
              )}
              <Link
                href="/freshers"
                className={`text-gray-700 hover:text-sky-600 transition-colors py-3 text-base font-medium ${
                  pathname === "/freshers"
                    ? "text-sky-600 font-semibold bg-sky-50 rounded-md px-2"
                    : ""
                }`}
              >
                Freshers Program
              </Link>

              <Link
                href="/contact"
                className={`text-gray-700 hover:text-sky-600 transition-colors py-3 text-base font-medium ${
                  pathname === "/contact"
                    ? "text-sky-600 font-semibold bg-sky-50 rounded-md px-2"
                    : ""
                }`}
              >
                Contact
              </Link>
              {/* faculty */}
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`flex items-center text-gray-700 hover:text-sky-600 transition-colors text-base font-medium `}
                >
                  Faculty
                  <ChevronDown className="ml-2 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className=" bg-white shadow-lg rounded-md border border-gray-100 p-2">
                  <DropdownMenuItem asChild>
                    <Link
                      href={"/member"}
                      className={`w-full  rounded-md text-sm `}
                    >
                      Become a Mentor
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="flex flex-col space-y-2 pt-4"></div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
