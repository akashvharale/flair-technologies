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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Clock,
  Users,
  Star,
  Download,
  CheckCircle,
  User,
  Award,
  BookOpen,
  Target,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EnrollDialog } from "@/components/EnrollDialog";

// This would typically come from a database or API
const courseData = {
  "python-fullstack": {
    title: "Python Full-Stack Development",
    description:
      "Master Django, React, and modern web development with hands-on projects",
    duration: "6 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹45,000",
    originalPrice: "₹60,000",
    category: "Development",
    students: "500+",
    rating: 4.8,
    reviews: 156,
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240415204701/How-to-Become-a-Python-Full-Stack-Developer.png",
    highlights: [
      "Learn Python, Django, React, and PostgreSQL",
      "Build 5+ real-world projects",
      "Get mentorship from industry experts",
      "100% placement assistance",
      "Lifetime access to course materials",
    ],
    syllabus: [
      {
        module: "Python Fundamentals",
        duration: "4 weeks",
        topics: [
          {
            name: "Python Syntax",
            content: [
              "Learn the basics of Python programming, including variables, data types, and control structures.",
              "Understand Python's syntax rules and conventions.",
              "Practice writing simple Python scripts.",
            ],
          },
          {
            name: "Data Structures",
            content: [
              "Understand lists, dictionaries, sets, and tuples for efficient data handling.",
              "Implement common data structure operations.",
              "Explore advanced data structures like stacks and queues.",
            ],
          },
          {
            name: "OOP Concepts",
            content: [
              "Master object-oriented programming principles like classes, objects, and inheritance.",
              "Learn encapsulation and polymorphism.",
              "Build small projects using OOP principles.",
            ],
          },
          {
            name: "File Handling",
            content: [
              "Explore reading and writing files in Python for data persistence.",
              "Work with different file formats like CSV and JSON.",
              "Implement file operations in real-world scenarios.",
            ],
          },
          {
            name: "Exception Handling",
            content: [
              "Learn to manage errors and exceptions to build robust applications.",
              "Understand try-except blocks and custom exceptions.",
              "Practice debugging techniques for error handling.",
            ],
          },
        ],
      },
      {
        module: "Web Development with Django",
        duration: "6 weeks",
        topics: [
          {
            name: "Django Framework",
            content: [
              "Introduction to Django, setting up projects, and understanding MVC architecture.",
              "Configure Django settings and project structure.",
              "Explore Django's admin interface for rapid development.",
              "Build a simple Django application from scratch.",
            ],
          },
          {
            name: "Models & Database",
            content: [
              "Create and manage database models using Django ORM.",
              "Understand database migrations and schema updates.",
              "Implement relationships between models.",
              "Query databases efficiently using ORM methods.",
            ],
          },
          {
            name: "Views & Templates",
            content: [
              "Build dynamic views and templates for web applications.",
              "Create reusable templates with Django's template engine.",
              "Implement URL routing and view logic.",
              "Style templates with basic CSS integration.",
            ],
          },
          {
            name: "Forms & Authentication",
            content: [
              "Implement user authentication and form handling in Django.",
              "Create custom forms and validate user input.",
              "Set up user registration and login systems.",
              "Implement password reset functionality.",
            ],
          },
          {
            name: "REST APIs",
            content: [
              "Develop RESTful APIs using Django REST Framework.",
              "Understand serialization and API endpoints.",
              "Implement authentication for APIs.",
              "Test APIs using tools like Postman.",
            ],
          },
        ],
      },
      {
        module: "Frontend with React",
        duration: "6 weeks",
        topics: [
          {
            name: "React Components",
            content: [
              "Create reusable UI components with React.",
              "Understand component-based architecture.",
              "Build functional and class components.",
            ],
          },
          {
            name: "State Management",
            content: [
              "Manage application state using React's state and context.",
              "Implement global state with Context API.",
              "Explore state management libraries like Redux.",
            ],
          },
          {
            name: "Hooks",
            content: [
              "Utilize React Hooks for functional components.",
              "Master useState and useEffect hooks.",
              "Create custom hooks for reusable logic.",
            ],
          },
          {
            name: "Routing",
            content: [
              "Implement client-side routing with React Router.",
              "Set up nested routes and protected routes.",
              "Handle route parameters and query strings.",
            ],
          },
          {
            name: "API Integration",
            content: [
              "Connect React applications to backend APIs.",
              "Use Axios or Fetch for HTTP requests.",
              "Handle asynchronous data fetching and error states.",
            ],
          },
        ],
      },
      {
        module: "Database & Deployment",
        duration: "4 weeks",
        topics: [
          {
            name: "PostgreSQL",
            content: [
              "Learn to design and query PostgreSQL databases.",
              "Write complex SQL queries.",
              "Optimize database performance.",
            ],
          },
          {
            name: "Database Design",
            content: [
              "Understand database normalization and schema design.",
              "Create ER diagrams for database planning.",
              "Implement indexing for query optimization.",
            ],
          },
          {
            name: "AWS Deployment",
            content: [
              "Deploy applications using AWS services like EC2 and S3.",
              "Configure AWS security groups and IAM roles.",
              "Set up load balancers for scalability.",
            ],
          },
          {
            name: "Docker",
            content: [
              "Containerize applications with Docker for consistency.",
              "Create Dockerfiles and manage containers.",
              "Use Docker Compose for multi-container apps.",
            ],
          },
          {
            name: "CI/CD Pipeline",
            content: [
              "Set up continuous integration and deployment pipelines.",
              "Integrate with GitHub Actions or Jenkins.",
              "Automate testing and deployment processes.",
            ],
          },
        ],
      },
      {
        module: "Capstone Project",
        duration: "4 weeks",
        topics: [
          {
            name: "Project Planning",
            content: [
              "Plan and design a full-stack application project.",
              "Create project specifications and requirements.",
              "Develop a project timeline and milestones.",
            ],
          },
          {
            name: "Full-Stack Application",
            content: [
              "Build a complete application integrating frontend and backend.",
              "Implement a full-stack workflow with Django and React.",
              "Ensure cross-browser compatibility.",
            ],
          },
          {
            name: "Testing",
            content: [
              "Implement unit and integration tests for the application.",
              "Use testing frameworks like Jest and Pytest.",
              "Perform end-to-end testing.",
            ],
          },
          {
            name: "Documentation",
            content: [
              "Create comprehensive project documentation.",
              "Write API documentation using tools like Swagger.",
              "Document code and architecture decisions.",
            ],
          },
          {
            name: "Presentation",
            content: [
              "Present the project to stakeholders and peers.",
              "Prepare a project demo and slides.",
              "Handle Q&A sessions effectively.",
            ],
          },
        ],
      },
    ],
    instructor: {
      name: "Rajesh Kumar",
      title: "Senior Full-Stack Developer at Google",
      experience: "8+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Rajesh is a seasoned full-stack developer with extensive experience in Python and React. He has worked on large-scale applications at Google and mentored 200+ students.",
    },
    projects: [
      "E-commerce Platform with Payment Integration",
      "Social Media Dashboard",
      "Task Management System",
      "Real-time Chat Application",
      "Portfolio Website with CMS",
    ],
  },
  "power-bi": {
    title: "Microsoft Power BI",
    description:
      "Learn to create interactive data visualizations and business intelligence reports",
    duration: "3 months",
    mode: "Online/Offline",
    level: "Beginner to Intermediate",
    price: "₹25,000",
    originalPrice: "₹35,000",
    category: "Data Analytics",
    students: "300+",
    rating: 4.7,
    reviews: 89,
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240726121444/Data-Analytics-Training-now.webp",
    highlights: [
      "Master Power BI Desktop and Service",
      "Create dashboards and reports",
      "Data modeling and DAX fundamentals",
      "Real-world case studies",
      "Certification preparation",
    ],
    syllabus: [
      {
        module: "Introduction to Power BI",
        duration: "2 weeks",
        topics: [
          {
            name: "Power BI Basics",
            content: [
              "Overview of Power BI interface and functionalities.",
              "Navigate Power BI Desktop and Service.",
              "Set up a Power BI workspace.",
            ],
          },
          {
            name: "Data Import",
            content: [
              "Import data from various sources into Power BI.",
              "Connect to Excel, CSV, and databases.",
              "Manage data source connections.",
            ],
          },
          {
            name: "Visualization Types",
            content: [
              "Explore different visualization types like charts and graphs.",
              "Create bar, line, and pie charts.",
              "Customize visualizations for better insights.",
            ],
          },
          {
            name: "Report Creation",
            content: [
              "Build interactive reports with Power BI.",
              "Design report layouts and themes.",
              "Add interactive elements like slicers.",
            ],
          },
        ],
      },
      {
        module: "Data Modeling",
        duration: "3 weeks",
        topics: [
          {
            name: "Relationships",
            content: [
              "Create and manage relationships between data tables.",
              "Understand primary and foreign keys.",
              "Configure relationship cardinality.",
              "Resolve common relationship issues.",
            ],
          },
          {
            name: "DAX Functions",
            content: [
              "Learn Data Analysis Expressions for advanced calculations.",
              "Use common DAX functions like SUM, AVERAGE, and COUNT.",
              "Create calculated tables with DAX.",
              "Explore time intelligence functions.",
            ],
          },
          {
            name: "Calculated Columns",
            content: [
              "Create calculated columns for dynamic data.",
              "Use DAX to build custom columns.",
              "Apply conditional logic in columns.",
            ],
          },
          {
            name: "Measures",
            content: [
              "Develop measures for aggregated data analysis.",
              "Create measures for KPIs and metrics.",
              "Optimize measures for performance.",
            ],
          },
        ],
      },
      {
        module: "Advanced Analytics",
        duration: "2 weeks",
        topics: [
          {
            name: "Power Query",
            content: [
              "Transform data using Power Query Editor.",
              "Apply data cleaning and transformation steps.",
              "Merge and append queries.",
            ],
          },
          {
            name: "Data Transformation",
            content: [
              "Clean and reshape data for analysis.",
              "Handle missing values and outliers.",
              "Pivot and unpivot data structures.",
            ],
          },
          {
            name: "Custom Visuals",
            content: [
              "Create and use custom visuals for enhanced reporting.",
              "Import visuals from AppSource.",
              "Customize visual properties and styles.",
            ],
          },
          {
            name: "Integration",
            content: [
              "Integrate Power BI with other tools and services.",
              "Connect to Microsoft Azure services.",
              "Embed Power BI reports in applications.",
            ],
          },
        ],
      },
      {
        module: "Deployment & Sharing",
        duration: "2 weeks",
        topics: [
          {
            name: "Power BI Service",
            content: [
              "Publish reports to Power BI Service.",
              "Manage workspaces and datasets.",
              "Schedule data refreshes.",
            ],
          },
          {
            name: "Dashboards",
            content: [
              "Create and manage dashboards for insights.",
              "Pin visuals to dashboards.",
              "Customize dashboard layouts.",
            ],
          },
          {
            name: "Sharing & Collaboration",
            content: [
              "Share reports and dashboards with teams.",
              "Set up sharing permissions.",
              "Collaborate using Power BI workspaces.",
            ],
          },
          {
            name: "Security",
            content: [
              "Implement row-level security and access controls.",
              "Configure user roles and permissions.",
              "Secure sensitive data in reports.",
            ],
          },
        ],
      },
    ],
    instructor: {
      name: "Priya Sharma",
      title: "Data Analyst at Amazon",
      experience: "10+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Priya specializes in data analytics with extensive experience in Power BI and has trained over 150 professionals.",
    },
    projects: [
      "Sales Performance Dashboard",
      "Customer Segmentation Report",
      "Financial Analysis Dashboard",
      "Inventory Management Report",
    ],
  },
  "azure-devops": {
    title: "Azure DevOps",
    description:
      "Learn to implement DevOps practices using Azure tools and services",
    duration: "4 months",
    mode: "Online/Offline",
    level: "Intermediate to Advanced",
    price: "₹40,000",
    originalPrice: "₹50,000",
    category: "DevOps",
    students: "400+",
    rating: 4.9,
    reviews: 120,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Mpx-7k0FvYWzb8n8snbXGKMKM-YWg0Vlsg&s",
    highlights: [
      "Master Azure Repos, Pipelines, and Boards",
      "Continuous Integration/Continuous Deployment (CI/CD)",
      "Infrastructure as Code (IaC)",
      "Real-world DevOps projects",
      "Certification support",
    ],
    syllabus: [
      {
        module: "Azure DevOps Basics",
        duration: "3 weeks",
        topics: [
          {
            name: "Azure Boards",
            content: [
              "Manage work items and track project progress.",
              "Create and customize Kanban boards.",
              "Track tasks using Agile methodologies.",
            ],
          },
          {
            name: "Repos",
            content: [
              "Use Azure Repos for version control.",
              "Manage Git repositories and branches.",
              "Implement pull requests and code reviews.",
            ],
          },
          {
            name: "Pipelines",
            content: [
              "Set up build and release pipelines.",
              "Configure YAML-based pipelines.",
              "Automate build processes.",
            ],
          },
          {
            name: "Artifacts",
            content: [
              "Manage and share packages with Azure Artifacts.",
              "Publish and consume NuGet packages.",
              "Integrate artifacts with pipelines.",
            ],
          },
        ],
      },
      {
        module: "CI/CD Implementation",
        duration: "5 weeks",
        topics: [
          {
            name: "Build Pipelines",
            content: [
              "Create and optimize build pipelines for automation.",
              "Configure triggers for continuous integration.",
              "Integrate testing in build pipelines.",
              "Optimize build performance.",
            ],
          },
          {
            name: "Release Pipelines",
            content: [
              "Configure release pipelines for deployment.",
              "Set up multi-stage deployments.",
              "Implement approval gates.",
              "Automate release processes.",
            ],
          },
          {
            name: "Testing",
            content: [
              "Integrate automated testing in pipelines.",
              "Use unit and integration tests.",
              "Analyze test results and coverage.",
            ],
          },
          {
            name: "Deployment Strategies",
            content: [
              "Implement blue-green and canary deployments.",
              "Understand deployment rollback strategies.",
              "Monitor deployment health.",
            ],
          },
        ],
      },
      {
        module: "Advanced Tools",
        duration: "3 weeks",
        topics: [
          {
            name: "IaC with Terraform",
            content: [
              "Use Terraform for infrastructure as code.",
              "Write Terraform scripts for Azure resources.",
              "Manage infrastructure versioning.",
            ],
          },
          {
            name: "Monitoring",
            content: [
              "Set up monitoring with Azure Monitor.",
              "Configure alerts and dashboards.",
              "Analyze application performance metrics.",
            ],
          },
          {
            name: "Security",
            content: [
              "Implement security practices in DevOps.",
              "Secure pipelines with role-based access.",
              "Scan code for vulnerabilities.",
            ],
          },
          {
            name: "Azure Test Plans",
            content: [
              "Plan and execute tests with Azure Test Plans.",
              "Create test cases and suites.",
              "Track test results and defects.",
            ],
          },
        ],
      },
      {
        module: "Capstone Project",
        duration: "3 weeks",
        topics: [
          {
            name: "End-to-End DevOps Workflow",
            content: [
              "Build a complete DevOps workflow.",
              "Integrate all Azure DevOps services.",
              "Deploy a sample application.",
            ],
          },
          {
            name: "Optimization",
            content: [
              "Optimize pipelines for performance.",
              "Reduce build and deployment times.",
              "Implement caching strategies.",
            ],
          },
          {
            name: "Documentation",
            content: [
              "Document the DevOps processes and tools.",
              "Create runbooks for operations.",
              "Document pipeline configurations.",
            ],
          },
        ],
      },
    ],
    instructor: {
      name: "Arjun Patel",
      title: "DevOps Engineer at TCS",
      experience: "12+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Arjun has extensive experience in Azure DevOps and has led multiple enterprise-level implementations.",
    },
    projects: [
      "CI/CD Pipeline for Web App",
      "Automated Testing Framework",
      "Infrastructure Deployment",
      "Monitoring Dashboard",
    ],
  },
  "data-analytics": {
    title: "Data Analytics",
    description:
      "Gain skills in data analysis using Python, R, and advanced analytics tools",
    duration: "5 months",
    mode: "Online/Offline",
    level: "Beginner to Advanced",
    price: "₹35,000",
    originalPrice: "₹45,000",
    category: "Data Analytics",
    students: "450+",
    rating: 4.6,
    reviews: 110,
    image:
      "https://www.bismilsoft.com/admin/images/blog/DATA%20ANALYTICS_WEB%20IMAGE-01-01.jpg",
    highlights: [
      "Learn Python, R, and SQL for analytics",
      "Hands-on with real datasets",
      "Predictive modeling techniques",
      "Industry-relevant case studies",
      "Career guidance",
    ],
    syllabus: [
      {
        module: "Data Analysis Basics",
        duration: "4 weeks",
        topics: [
          {
            name: "Data Collection",
            content: [
              "Gather data from various sources for analysis.",
              "Work with APIs and web scraping.",
              "Handle structured and unstructured data.",
            ],
          },
          {
            name: "Cleaning",
            content: [
              "Clean and preprocess data for accuracy.",
              "Handle missing values and duplicates.",
              "Standardize data formats.",
            ],
          },
          {
            name: "Exploratory Data Analysis",
            content: [
              "Perform EDA to uncover patterns and insights.",
              "Use statistical summaries and visualizations.",
              "Identify correlations and trends.",
            ],
          },
          {
            name: "Visualization",
            content: [
              "Create visualizations using Matplotlib and Seaborn.",
              "Design interactive plots with Plotly.",
              "Customize charts for presentations.",
            ],
          },
        ],
      },
      {
        module: "Programming for Analytics",
        duration: "6 weeks",
        topics: [
          {
            name: "Python for Data",
            content: [
              "Use Python libraries like Pandas and NumPy.",
              "Perform data manipulation with Pandas.",
              "Optimize numerical computations with NumPy.",
            ],
          },
          {
            name: "R Programming",
            content: [
              "Learn R for statistical analysis.",
              "Use R packages like dplyr and ggplot2.",
              "Write efficient R scripts.",
            ],
          },
          {
            name: "SQL Queries",
            content: [
              "Write SQL queries for data extraction.",
              "Perform joins and aggregations.",
              "Optimize SQL queries for performance.",
            ],
          },
          {
            name: "Libraries",
            content: [
              "Explore data analysis libraries like Scikit-learn.",
              "Implement basic machine learning models.",
              "Use libraries for data visualization.",
            ],
          },
        ],
      },
      {
        module: "Advanced Analytics",
        duration: "4 weeks",
        topics: [
          {
            name: "Machine Learning Basics",
            content: [
              "Introduction to machine learning algorithms.",
              "Understand supervised and unsupervised learning.",
              "Implement simple models like linear regression.",
            ],
          },
          {
            name: "Statistical Methods",
            content: [
              "Apply statistical techniques for data analysis.",
              "Perform hypothesis testing.",
              "Use statistical distributions for modeling.",
            ],
          },
          {
            name: "Predictive Models",
            content: [
              "Build predictive models for forecasting.",
              "Evaluate model performance metrics.",
              "Tune model hyperparameters.",
            ],
          },
        ],
      },
      {
        module: "Project & Deployment",
        duration: "3 weeks",
        topics: [
          {
            name: "Analytics Project",
            content: [
              "Execute a complete data analytics project.",
              "Define project scope and objectives.",
              "Analyze real-world datasets.",
            ],
          },
          {
            name: "Presentation",
            content: [
              "Present findings to stakeholders.",
              "Create compelling data stories.",
              "Use visualizations in presentations.",
            ],
          },
          {
            name: "Tools Integration",
            content: [
              "Integrate analytics tools for deployment.",
              "Automate data pipelines.",
              "Deploy models to production environments.",
            ],
          },
        ],
      },
    ],
    instructor: {
      name: "Sneha Gupta",
      title: "Data Scientist at IBM",
      experience: "9+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Sneha has expertise in data analytics and has contributed to numerous data-driven projects at IBM.",
    },
    projects: [
      "Customer Behavior Analysis",
      "Sales Forecasting Model",
      "Market Trend Analysis",
      "Data Visualization Dashboard",
    ],
  },
  tableau: {
    title: "Tableau",
    description:
      "Master data visualization and business intelligence with Tableau",
    duration: "3 months",
    mode: "Online/Offline",
    level: "Beginner to Intermediate",
    price: "₹28,000",
    originalPrice: "₹38,000",
    category: "Data Analytics",
    students: "350+",
    rating: 4.7,
    reviews: 95,
    image:
      "https://solutionsreview.com/business-intelligence/files/2021/08/Tableau-Courses-for-Beginners.jpg",
    highlights: [
      "Create interactive dashboards",
      "Data blending and preparation",
      "Advanced visualization techniques",
      "Tableau Server integration",
      "Certification preparation",
    ],
    syllabus: [
      {
        module: "Tableau Basics",
        duration: "2 weeks",
        topics: [
          {
            name: "Introduction to Tableau",
            content: [
              "Understand Tableau's interface and capabilities.",
              "Navigate Tableau Desktop and Public.",
              "Set up a Tableau workspace.",
            ],
          },
          {
            name: "Data Connection",
            content: [
              "Connect Tableau to various data sources.",
              "Import data from Excel, SQL, and cloud services.",
              "Manage data source connections.",
            ],
          },
          {
            name: "Basic Charts",
            content: [
              "Create basic charts like bar and line charts.",
              "Customize chart properties and styles.",
              "Add annotations to charts.",
            ],
          },
          {
            name: "Filters",
            content: [
              "Apply filters for interactive data exploration.",
              "Create quick filters and context filters.",
              "Use filter hierarchies.",
            ],
          },
        ],
      },
      {
        module: "Data Visualization",
        duration: "3 weeks",
        topics: [
          {
            name: "Advanced Visuals",
            content: [
              "Create complex visualizations like heatmaps.",
              "Design treemaps and scatter plots.",
              "Customize visual interactions.",
            ],
          },
          {
            name: "Calculations",
            content: [
              "Use calculated fields for custom metrics.",
              "Write Tableau calculations for analytics.",
              "Apply table calculations.",
            ],
          },
          {
            name: "Parameters",
            content: [
              "Implement parameters for dynamic visuals.",
              "Create interactive controls with parameters.",
              "Use parameters in calculations.",
            ],
          },
          {
            name: "Dashboards",
            content: [
              "Build interactive dashboards for insights.",
              "Design responsive dashboard layouts.",
              "Add actions for interactivity.",
            ],
          },
        ],
      },
      {
        module: "Advanced Features",
        duration: "2 weeks",
        topics: [
          {
            name: "Data Blending",
            content: [
              "Blend data from multiple sources.",
              "Understand primary and secondary data sources.",
              "Resolve data blending issues.",
            ],
          },
          {
            name: "Level of Detail (LOD)",
            content: [
              "Use LOD expressions for detailed analysis.",
              "Implement FIXED, INCLUDE, and EXCLUDE LODs.",
              "Optimize LOD calculations.",
            ],
          },
          {
            name: "Storytelling",
            content: [
              "Create data stories for presentations.",
              "Design story points for narrative flow.",
              "Use annotations in stories.",
            ],
          },
          {
            name: "Publishing",
            content: [
              "Publish dashboards to Tableau Server.",
              "Manage permissions and user access.",
              "Schedule data refreshes.",
            ],
          },
        ],
      },
    ],
    instructor: {
      name: "Vikram Singh",
      title: "BI Specialist at Deloitte",
      experience: "11+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Vikram is an expert in Tableau with a strong background in business intelligence.",
    },
    projects: [
      "Sales Performance Dashboard",
      "HR Analytics Report",
      "Marketing Campaign Analysis",
      "Financial Summary Dashboard",
    ],
  },
  "network-protocol": {
    title: "Network Protocol",
    description:
      "Understand and implement network protocols for robust IT infrastructure",
    duration: "4 months",
    mode: "Online/Offline",
    level: "Intermediate to Advanced",
    price: "₹30,000",
    originalPrice: "₹40,000",
    category: "Networking",
    students: "250+",
    rating: 4.5,
    reviews: 70,
    image:
      "https://cdn-fainj.nitrocdn.com/HMhNvtGdkXCThiYKondeUNdKlFRQtHkp/assets/images/optimized/rev-2573752/www.auvik.com/wp-content/uploads/2024/06/common-network-protocols3.jpg",
    highlights: [
      "Learn TCP/IP, HTTP, FTP, and more",
      "Hands-on network configuration",
      "Security protocols and troubleshooting",
      "Industry-standard certifications",
      "Practical lab sessions",
    ],
    syllabus: [
      {
        module: "Network Fundamentals",
        duration: "3 weeks",
        topics: [
          {
            name: "OSI Model",
            content: [
              "Understand the OSI model and its layers.",
              "Explore each layer's functions and protocols.",
              "Compare OSI with TCP/IP model.",
            ],
          },
          {
            name: "TCP/IP Basics",
            content: [
              "Learn the fundamentals of TCP/IP protocols.",
              "Understand packet structure and headers.",
              "Analyze TCP/IP communication flow.",
            ],
          },
          {
            name: "IP Addressing",
            content: [
              "Configure IP addresses and subnets.",
              "Understand IPv4 and IPv6 addressing.",
              "Implement static and dynamic addressing.",
            ],
          },
          {
            name: "Subnetting",
            content: [
              "Master subnetting for network design.",
              "Calculate subnet masks and ranges.",
              "Design efficient subnet architectures.",
            ],
          },
        ],
      },
      {
        module: "Core Protocols",
        duration: "5 weeks",
        topics: [
          {
            name: "HTTP/HTTPS",
            content: [
              "Explore HTTP and HTTPS for web communication.",
              "Understand request-response cycles.",
              "Implement secure communication with HTTPS.",
              "Analyze HTTP headers and status codes.",
            ],
          },
          {
            name: "FTP",
            content: [
              "Understand File Transfer Protocol operations.",
              "Set up FTP servers and clients.",
              "Secure FTP with SFTP and FTPS.",
            ],
          },
          {
            name: "SMTP",
            content: [
              "Learn email transmission with SMTP.",
              "Configure SMTP servers for email delivery.",
              "Troubleshoot email delivery issues.",
            ],
          },
          {
            name: "DNS",
            content: [
              "Configure and troubleshoot DNS services.",
              "Understand DNS resolution process.",
              "Set up DNS records like A, CNAME, and MX.",
            ],
          },
          {
            name: "DHCP",
            content: [
              "Implement DHCP for automatic IP allocation.",
              "Configure DHCP scopes and options.",
              "Troubleshoot DHCP-related issues.",
            ],
          },
        ],
      },
      {
        module: "Security & Troubleshooting",
        duration: "3 weeks",
        topics: [
          {
            name: "Network Security",
            content: [
              "Implement security measures for networks.",
              "Configure firewalls and intrusion detection.",
              "Understand encryption protocols.",
            ],
          },
          {
            name: "Protocol Analysis",
            content: [
              "Analyze network traffic with tools like Wireshark.",
              "Capture and interpret packets.",
              "Identify network anomalies.",
            ],
          },
          {
            name: "Troubleshooting Tools",
            content: [
              "Use tools for network diagnostics.",
              "Perform ping, traceroute, and netstat analysis.",
              "Diagnose connectivity issues.",
            ],
          },
          {
            name: "VPNs",
            content: [
              "Set up virtual private networks for security.",
              "Configure site-to-site and remote-access VPNs.",
              "Troubleshoot VPN connectivity.",
            ],
          },
        ],
      },
      {
        module: "Advanced Networking",
        duration: "3 weeks",
        topics: [
          {
            name: "VoIP",
            content: [
              "Implement Voice over IP protocols.",
              "Configure VoIP systems like SIP.",
              "Optimize VoIP call quality.",
            ],
          },
          {
            name: "Wireless Protocols",
            content: [
              "Configure wireless network protocols.",
              "Understand Wi-Fi standards like 802.11.",
              "Secure wireless networks.",
            ],
          },
          {
            name: "Network Optimization",
            content: [
              "Optimize network performance and latency.",
              "Implement QoS policies.",
              "Monitor network bandwidth usage.",
            ],
          },
        ],
      },
    ],
    instructor: {
      name: "Anil Mehta",
      title: "Network Engineer at Cisco",
      experience: "13+ years",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Anil has extensive experience in network protocols and has trained numerous IT professionals.",
    },
    projects: [
      "Network Configuration Setup",
      "Protocol Simulation",
      "Security Audit Project",
      "Wireless Network Deployment",
    ],
  },
};

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = courseData[params.slug as keyof typeof courseData];

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="heading">Course Not Found</h1>
          <p className="text-gray-600 mb-8">
            The course you're looking for doesn't exist.
          </p>
          <Link href="/courses">
            <Button>View All Courses</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="background text-white py-32">
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
                  {course.category} Course
                </Badge>
                <h1 className="heading">{course.title}</h1>
                <p className="description">{course.description}</p>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span>
                    {course.rating} ({course.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{course.students} enrolled</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <EnrollDialog
                  formHeading="Enroll in Course"
                  buttonText={`Enroll Now`}
                  className="bg-white text-sky-600 hover:bg-gray-100 text-lg px-8"
                  size="lg"
                />

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full md:w-auto border-white text-white hover:bg-white hover:text-sky-600 text-lg px-8 bg-transparent"
                  onClick={() => window.open("/my-course.pdf", "_blank")}
                >
                  View Brochure <Download className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src={course.image || "/placeholder.svg"}
                width={"750px"}
                max-height={"500px"}
                alt={course.title}
                className="rounded-2xl shadow-2xl h-[350px]"
              />
              {/* <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-sky-600">
                  {course.price}
                </div>
                <div className="text-sm text-gray-500 line-through">
                  {course.originalPrice}
                </div>
                <div className="text-sm text-green-600">
                  25% OFF Limited Time
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="space-y-8">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
                  {/* <TabsTrigger value="instructor">Instructor</TabsTrigger> */}
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-sky-600" />
                        What You'll Learn
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {course.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Course Benefits</CardTitle>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Award className="h-5 w-5 text-sky-600 mt-1" />
                          <div>
                            <h4 className="font-semibold">
                              Industry Certification
                            </h4>
                            <p className="text-sm text-gray-600">
                              Get certified upon completion
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Users className="h-5 w-5 text-sky-600 mt-1" />
                          <div>
                            <h4 className="font-semibold">Expert Mentorship</h4>
                            <p className="text-sm text-gray-600">
                              Learn from industry professionals
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <BookOpen className="h-5 w-5 text-sky-600 mt-1" />
                          <div>
                            <h4 className="font-semibold">Lifetime Access</h4>
                            <p className="text-sm text-gray-600">
                              Access materials anytime
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Target className="h-5 w-5 text-sky-600 mt-1" />
                          <div>
                            <h4 className="font-semibold">100% Placement</h4>
                            <p className="text-sm text-gray-600">
                              Guaranteed job assistance
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="syllabus" className="space-y-6">
                  <Accordion type="single" collapsible className="w-full">
                    {course.syllabus.map((module, index) => (
                      <AccordionItem
                        key={index}
                        value={`module-${index}`}
                        className="mb-4 border border-gray-200 rounded-lg shadow-sm bg-white"
                      >
                        <AccordionTrigger className="px-6 py-4 bg-gradient-to-r from-slate-50 to-blue-50 hover:bg-gradient-to-r hover:from-sky-100 hover:to-blue-100 transition-all duration-300 rounded-lg">
                          <div className="flex items-center justify-between w-full">
                            <span className="text-lg font-bold text-gray-900">
                              Module {index + 1}: {module.module}
                            </span>
                            <div className="flex items-center gap-3">
                              <Badge
                                variant="outline"
                                className="border-sky-600 text-sky-600"
                              >
                                {module.duration}
                              </Badge>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-4">
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                          >
                            <Accordion
                              type="single"
                              collapsible
                              className="w-full"
                            >
                              {module.topics.map((topic, topicIndex) => (
                                <AccordionItem
                                  key={topicIndex}
                                  value={`topic-${index}-${topicIndex}`}
                                  className="border-b border-gray-200"
                                >
                                  <AccordionTrigger className="py-2 px-4 hover:bg-gray-50">
                                    <div className="flex items-center gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-500" />
                                      <span className="text-sm font-semibold text-gray-700">
                                        {topic.name}
                                      </span>
                                    </div>
                                  </AccordionTrigger>
                                  <AccordionContent className="px-4 py-2">
                                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                                      {topic.content.map((item, itemIndex) => (
                                        <li key={itemIndex}>{item}</li>
                                      ))}
                                    </ul>
                                  </AccordionContent>
                                </AccordionItem>
                              ))}
                            </Accordion>
                          </motion.div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>

                <TabsContent value="instructor">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-6">
                        <img
                          src={course.instructor.image || "/placeholder.svg"}
                          alt={course.instructor.name}
                          className="w-24 h-24 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            {course.instructor.name}
                          </h3>
                          <p className="text-sky-600 font-semibold mb-2">
                            {course.instructor.title}
                          </p>
                          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              {course.instructor.experience} experience
                            </div>
                          </div>
                          <p className="text-gray-700">
                            {course.instructor.bio}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="projects">
                  <Card>
                    <CardHeader>
                      <CardTitle>Real-World Projects</CardTitle>
                      <CardDescription>
                        Build these industry-relevant projects to showcase your
                        skills
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {course.projects.map((project, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                          >
                            <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              {index + 1}
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                {project}
                              </h4>
                              <p className="text-sm text-gray-600 mt-1">
                                A comprehensive project that demonstrates
                                real-world application of the skills learned
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Course Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* <div className="flex items-center justify-between">
                    <span className="text-gray-600">Price</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">
                        {course.price}
                      </div>
                      <div className="text-sm text-gray-500 line-through">
                        {course.originalPrice}
                      </div>
                    </div>
                  </div> */}

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold">{course.duration}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Mode</span>
                    <span className="font-semibold">{course.mode}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Level</span>
                    <span className="font-semibold">{course.level}</span>
                  </div>

                  <div className="pt-4 space-y-3">
                    <EnrollDialog
                      formHeading="Enroll in Course"
                      buttonText="Enroll Now"
                      className="w-full icon-button-color hover:from-sky-600 hover:to-blue-700"
                    />
                    <EnrollDialog
                      buttonText="Book Free Demo"
                      variant="ghost"
                      className="w-full bg-transparent text-black border border-sky-500"
                    />
                    <Button
                      variant="ghost"
                      className="w-full"
                      onClick={() => window.open("/my-course.pdf", "_blank")}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      View Brochure
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Upcoming Batches
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="font-semibold text-blue-900">
                      Next Batch
                    </div>
                    <div className="text-sm text-blue-700">
                      Starts: March 15, 2024
                    </div>
                    <div className="text-sm text-blue-700">Mode: Online</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900">
                      Weekend Batch
                    </div>
                    <div className="text-sm text-gray-700">
                      Starts: March 20, 2024
                    </div>
                    <div className="text-sm text-gray-700">
                      Mode: Offline (Bangalore)
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
