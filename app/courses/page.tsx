"use client";

import { useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Clock,
  Monitor,
  Users,
  Search,
  Filter,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { EnrollDialog } from "@/components/EnrollDialog";

const allCourses = [
  {
    id: "python-fullstack",
    title: "Python Full-Stack Development",
    description:
      "Master Django, React, and modern web development with hands-on projects",
    duration: "6 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹45,000",
    category: "Development",
    students: "500+",
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "power-bi",
    title: "Power BI & Data Analytics",
    description:
      "Transform data into actionable business insights with Microsoft Power BI",
    duration: "3 months",
    mode: "Online/Offline",
    level: "Beginner to Intermediate",
    price: "₹25,000",
    category: "Analytics",
    students: "300+",
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "azure-devops",
    title: "Azure DevOps",
    description:
      "Master cloud deployment, CI/CD pipelines, and Azure services CI/CD pipelines, and Azure services",
    duration: "4 months",
    mode: "Online/Offline",
    level: "Intermediate to Advanced",
    price: "₹35,000",
    category: "Cloud",
    students: "250+",
    rating: 4.9,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "data-analytics",
    title: "Data Analytics with Python",
    description:
      "Learn data analysis, visualization, and machine learning fundamentals",
    duration: "5 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹40,000",
    category: "Analytics",
    students: "400+",
    rating: 4.6,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "tableau",
    title: "Tableau Data Visualization",
    description:
      "Create stunning visualizations and interactive dashboards CI/CD pipelines, and Azure services",
    duration: "2 months",
    mode: "Online/Offline",
    level: "Beginner to Intermediate",
    price: "₹20,000",
    category: "Analytics",
    students: "200+",
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "network-protocol",
    title: "Network Protocol & Security",
    description:
      "Master networking fundamentals, protocols, and cybersecurity CI/CD pipelines, and Azure services",
    duration: "4 months",
    mode: "Online/Offline",
    level: "Intermediate to Advanced",
    price: "₹30,000",
    category: "Networking",
    students: "150+",
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedMode, setSelectedMode] = useState("all");

  const categories = ["all", "Development", "Analytics", "Cloud", "Networking"];
  const modes = ["all", "Online", "Offline", "Online/Offline"];

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || course.category === selectedCategory;
    const matchesMode =
      selectedMode === "all" || course.mode.includes(selectedMode);

    return matchesSearch && matchesCategory && matchesMode;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="background text-white py-32">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-white text-sky-600">
              🎓 Industry-Aligned Courses
            </Badge>
            <h1 className="heading">
              Master <span className="text-cyan-300">In-Demand</span> Tech
              Skills
            </h1>
            <p className="description max-w-3xl mx-auto">
              Choose from our comprehensive range of courses designed by
              industry experts and delivered by professionals from top MNCs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-600" />
                <span className="text-sm text-gray-600">Filter by:</span>
              </div>

              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedMode} onValueChange={setSelectedMode}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Mode" />
                </SelectTrigger>
                <SelectContent>
                  {modes.map((mode) => (
                    <SelectItem key={mode} value={mode}>
                      {mode === "all" ? "All Modes" : mode}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredCourses.length} of {allCourses.length} courses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-sky-500 text-white">
                        {course.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-500 text-white">
                        ★ {course.rating}
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
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Monitor className="h-4 w-4" />
                        {course.mode}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {course.students}
                      </div>
                      <div className="text-sm">{course.level}</div>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      {/* <div className="text-2xl font-bold text-sky-600">{course.price}</div> */}
                      <EnrollDialog
                        formHeading="Enroll Now"
                        buttonText={`Enroll Now `}
                        className="icon-button-color hover:from-sky-600 hover:to-blue-700 hover:bg-sky-600 hover:text-white text-sm font-medium px-4 py-2"
                        size="lg"
                      />
                      <Link href={`/courses/${course.id}`}>
                        <Button
                          className="border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white bg-transparent text-sm font-medium px-4 py-2"
                          size={"lg"}
                        >
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No courses found matching your criteria.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedMode("all");
                }}
                className="mt-4"
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
