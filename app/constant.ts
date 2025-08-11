import {
  BookOpen,
  MapPin,
  Users,
  User,
  Award,
  Monitor,
  Target,
  TrendingUp,
  Lightbulb,
  GraduationCap,
  Heart,
  Star,
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  ExternalLink,
  Phone,
  Mail,
  Globe,
  Send,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

// Define interfaces for additionalInfo (for servicesData)
export interface TrainingAdditionalInfo {
  intro: string;
  methodology: string;
  qualityStandards: string;
  coursesOffered: string[];
  innovation: string;
  contact: string;
}

export interface ConsultingAdditionalInfo {
  intro: string;
  benefits: string;
  portfolio: string[];
  permanentHire: string;
  contractStaffing: string;
  screening: string;
  temporaryStaffing: string;
}

export interface OutsourcingAdditionalInfo {
  intro: string;
  services: string[];
  differentiators: {
    totalOutsourcing: string;
    globalDelivery: string;
    flexibleDelivery: string;
  };
  businessGrowth: string;
  recruitingSupport: string;
}

// Union type for additionalInfo
type AdditionalInfo =
  | TrainingAdditionalInfo
  | ConsultingAdditionalInfo
  | OutsourcingAdditionalInfo;

interface ServiceData {
  title: string;
  description: string;
  highlights: string[];
  image: string;
  additionalInfo: AdditionalInfo;
}

// Services Data
export const servicesData: Record<string, ServiceData> = {
  "it-training": {
    title: "IT Training",
    description:
      "Empower your skills with hands-on IT training from certified instructors.",
    highlights: [
      "Live sessions by industry experts",
      "Access to recorded content",
      "Certifications included",
    ],
    image:
      "https://www.extnoc.com/blog/wp-content/uploads/2023/01/The-Importance-of-Ongoing-Training-for-IT-Support-Professionals-2.jpg",
    additionalInfo: {
      intro:
        "Flair Technologies has over 10 years of experience in the Training and Development industry. Flair Technologies built and re-built training, and developed innovative technology-based learning solutions across all departments within small, medium, and large corporate structures.",
      methodology:
        "Flair Technologies unique training methodology is designed to provide the complete spectrum skills in a very interactive and easy to learn manner. Training is delivered by highly core and certified professionals. Our faculty is always with their high spirit to deliver their best. Our training methodology seeks to deal with the whole gamut of new skills and techniques the IT industry requires. Our training methodology is unique and diverse and focuses on every aspect of an individual. We concentrate on every area towards overall development of an individual.",
      qualityStandards:
        "We believe, in offering the finest standards of quality and processes that are constantly updated and adapted to the changing global scenario. We are dedicated to guide the industry professionals and students to competently compete and confirm to international standards of quality, employee efficiency and productivity.",
      coursesOffered: [
        "Python (Django / Selenium)",
        "Azure Admin with Azure DevOps",
        "DevOps & AWS",
        "Power BI",
        "Azure Data Factory",
        "Alteryx",
        "Microsoft Excel (VBA)",
        "Power Apps & Automate",
        "Tableau",
        "Testing Tools",
        "C & Network Protocol",
        "Web Development",
      ],
      innovation:
        "Flair Technologies is a leading training organization that caters to the latest technology and innovation. We are also pioneers in providing training in diverse Software fields like Python, Azure Admin, Azure DevOps, DevOps & AWS, Microsoft Power BI, Azure Data Factory, Alteryx, Microsoft Excel (VBA), Power Apps & Automate, Tableau, Testing Tools, C & Network Protocol, Web Development etc… We believe, in offering the finest standards of quality and processes that are constantly updated and adapted to the changing global scenario. We are dedicated to guiding industry professionals and students to competently compete and confirm international standards of quality employee efficiency and productivity.",
      contact:
        "Do you have a question about a training course? We can deliver a wide range of training courses on-site, off-site, or virtually. Send us a message!",
    },
  },
  "it-consulting": {
    title: "IT Consulting",
    description:
      "Professional guidance to streamline your IT infrastructure and processes.",
    highlights: [
      "Tailored IT strategies",
      "On-demand expert advice",
      "Technology transformation support",
    ],
    image:
      "https://www.enterpriseitworld.com/wp-content/uploads/2023/08/IT-Consulting-Company.jpg",
    additionalInfo: {
      intro:
        "If you are a small to medium sized company, identifying the right staffing solutions for your organization is crucial to the success of your business. Our cross-industry consulting services help you to build strategies, solving problems to the extent of producing results, expert work done on behalf of a client, project planning and launching across the organization. The first offering of Flair Technologies is looking and listening; observing and understanding. Our consultants appreciate the situation and the environment in order to forecast the opportunities and risks.",
      benefits:
        "So, seeking our services will benefit you on all counts. Get in touch with us to leverage our expertise in formulating the right outsourcing solution for you.",
      portfolio: [
        "Business Analysis",
        "Process Consultancy",
        "Technology Consultancy",
        "Data Visualization",
        "Software quality assurance and testing",
      ],
      permanentHire:
        "Our Permanent and Direct Hire services leverage the breadth of our HR experience to assess, attract and appoint the best talent. Corporations rely on permanent hires to grow and replenish their resources internally as well as for project-based work. This is because an organization that is equipped with quality and dedicated permanent staff has a greater chance of surviving and succeeding in the long run. We have developed several effective strategies to connect you to the most talented professionals by adopting a methodical process in staffing.",
      contractStaffing:
        "Flair Technologies offers flexible, effective and short/long-term contract staffing solutions for those companies seeking to access talent with specialized skills only on an as-needed or project basis. Flair Technologies has a contractual staffing model in place where it helps you to acquire the proficiency needed for the precise time frame of a particular job and save money & manpower resources. If your projects need immediate resources, count on us for quality, quick time line, with no employee-related costs.",
      screening:
        "Our screening policies are well defined and mature and our experience in current technologies gives us an understanding of the complex, varied consulting needs of our clients. Want to have a hard working and talented employee? Well, you can rely on us. Each and every candidate that we select for you has to go through a long screening process to ensure that the candidate is fit for the position and can perform well.",
      temporaryStaffing:
        "Temporary staffing solutions at Flair Technologies are customized to meet specific client needs. Short-term projects require highly specialized skills and benefit from an infusion of the latest technical abilities. In the same way, we do care for the candidates and help them getting a better placement with good package.",
    },
  },
  "it-outsourcing": {
    title: "IT Outsourcing",
    description:
      "Reduce costs and focus on core business while we manage your IT services.",
    highlights: ["End-to-end support", "24/7 monitoring", "Scalable resources"],
    image:
      "https://www.feedough.com/wp-content/uploads/2020/12/outsourcing.webp",
    additionalInfo: {
      intro:
        "Flair Technologies offers the best offshore software Training and development services that deliver robust, scalable, and cost-effective software solutions. Our clients realize an increase in productivity for offshore software development projects while improving their business performance through the changing demands of their marketplace.",
      services: [
        "Offshore Application Development",
        "Offshore Application Maintenance",
        "Offshore Engagement Model",
        "Offshore Delivery Model",
      ],
      differentiators: {
        totalOutsourcing:
          "Total Outsourcing: IT, Process Strategy Formulation, IT Portfolio Management, Transition Management.",
        globalDelivery:
          "Global Delivery Model: Division of project into components, Logical separation and execution, Execution at different geographies and time zones, Lower costs and higher quality products, Reporting & Project management.",
        flexibleDelivery:
          "Flexible Delivery Models: Staff augmentation model, Special team model, Co-source model, Project model, Portfolio model-end to end engagement model.",
      },
      businessGrowth:
        "It’s a well known fact that ability business increase. Getting the correct people in the opportune place with the correct abilities is urgent for your prosperity.",
      recruitingSupport:
        "Driven by the need to assemble that channel of qualified candidates numerous spotters invest the greater part of their energy sourcing applicant, and little time truly selecting. Flair Technologies can free up your spotters to do what they excel at select. Our group can deal with the whole enrolling/enlisting methodology from employment profiling through the on-boarding of the new draw in, including staff, innovation, and strategy and announcing. Our customers have experienced decrease so as to contract, enhanced nature of the applicant pool, undeniable competitors measurements, diminished cost and enhanced consistence.",
    },
  },
};

// Home page constants
export const homePage = {
  heroSection: {
    title: "Master In-Demand Tech Skills",
    description:
      "Join India's leading IT training institute with 100% placement assistance. Learn from industry experts and land your dream job in tech.",
    stats: [
      { value: "13500+", label: "Students Placed" },
      { value: "100%", label: "Placement Rate" },
      { value: "2", label: "Cities" },
    ],
  },
  statsSection: [
    { icon: Users, label: "Students Taken Course", value: "15000+" },
    { icon: Users, label: "Students Placed", value: "13500+" },
    { icon: BookOpen, label: "Expert Trainers", value: "30+" },
    { icon: MapPin, label: "Hiring partners", value: "100+" },
  ],
  aboutSection: {
    title: "About Flair Technologies",
    badge: "Know Who We Are",
    description:
      "Since 2018, Flair Technologies has grown to become the largest independent IT training institute in Bangalore. We offer cutting-edge technology training, certified instructors, real-world implementation, and consultancy. Whether you’re a multinational or a small business, we bring the right skills, research, and execution strategies. From simple static sites to complex enterprise systems, we help you deliver your message effectively.",
    image:
      "https://media.istockphoto.com/id/2042526830/photo/successful-businesswoman-using-laptop-working-in-office-business-technology-corporate-concept.jpg?s=612x612&w=0&k=20&c=-NJyxcMesUAKzzPwoHXC10ZuBHPGa1dRp1gFl2T37o8=",
    imageAlt: "Students learning in class",
  },
  learningExperienceSection: {
    title: "The Best Learning Experience",
    features: [
      "Learn from the World’s Best Faculty & Industry Experts.",
      "Instructor-led training with practical lab sessions.",
      "Customized learning scaled to your corporate needs.",
      "Real-time projects and certification guidance.",
      "Personalized guidance with 24×7 support.",
    ],
    image:
      "https://flairtechnologies.in/wp-content/uploads/2023/08/about-us.jpg",
    imageAlt: "Virtual learning session",
  },
  whyFlairSection: {
    title: "Why Flair Technologies",
    items: [
      {
        title: "Expert Trainers",
        description:
          "Instructors are certified and highly qualified with decades of experience in the subject matter.",
      },
      {
        title: "Placement Assistance",
        description:
          "Our Placement Officer will send for Interviews till you Get Placed. 100% assistance is given.",
      },
      {
        title: "Full hands-on Training",
        description:
          "We support any training with more practical classes, so we prefer to give hands-on training.",
      },
      {
        title: "Interview Preparation",
        description:
          "Our Experienced Trainers will help Get your Resume Ready with real case studies and examples.",
      },
      {
        title: "Industry Oriented Training",
        description:
          "Our trainers are highly equipped with experience of over 10+ years and teach to industry standards.",
      },
      {
        title: "Unlimited Lab Support",
        description:
          "Be assured of your success on the certification exam. 100% money-back guarantee otherwise.",
      },
    ],
  },
  benefitsSection: {
    title: "Benefits Of Flair Technologies",
    benefits: [
      "100% Placement Assistance",
      "Weekdays/Weekend LIVE classes",
      "One-on-One with Mentors",
      "Free Demo Classes",
      "Industry Oriented Projects",
      "Instructors are from MNC’s",
      "Lab Sessions",
      "Doubt Clearance Sessions",
      "Designed by Industry experts",
      "Recognized certification",
    ],
  },
  upcomingBatchesSection: {
    title: "Register Now - Upcoming Batches",
    batches: [
      {
        id: 1,
        name: "Microsoft Power BI",
        mode: "Classroom - BLR",
        faculty: "Mr. Veera",
        date: "Apr 10, 2024",
        time: "08:15 AM",
        duration: "45 Hours",
      },
      {
        id: 2,
        name: "Alteryx Designer",
        mode: "Classroom - HYD",
        faculty: "Mr. Suman",
        date: "May 01, 2024",
        time: "09:00 AM",
        duration: "45 Hours",
      },
      {
        id: 3,
        name: "Python Fullstack",
        mode: "Classroom - BLR",
        faculty: "Mr. Venkat",
        date: "May 01, 2024",
        time: "07:30 AM",
        duration: "100 Days",
      },
      {
        id: 4,
        name: "Data Analyst - Freshers",
        mode: "Offline",
        faculty: "Mr. Surya",
        date: "May 01, 2024",
        time: "09:00 AM",
        duration: "100 Days",
      },
      {
        id: 5,
        name: "SRE Modern DevOps",
        mode: "Online",
        faculty: "Mr. P R Reddy",
        date: "Apr 20, 2024",
        time: "07:00 AM",
        duration: "100 Days",
      },
      {
        id: 6,
        name: "DevOps Workshop",
        mode: "Online",
        faculty: "Mr. Viswanath",
        date: "Apr 22, 2024",
        time: "08:15 PM",
        duration: "100 Hours",
      },
      {
        id: 7,
        name: "Azure with Azure DevOps",
        mode: "Online",
        faculty: "Mr. Rama Krishna",
        date: "May 01, 2024",
        time: "08:00 AM",
        duration: "100 Hours",
      },
    ],
  },
  whyChooseUsSection: {
    title: "Your Success is Our Priority",
    badge: "Why Choose Flair Technologies",
    features: [
      {
        icon: User,
        title: "Expert Mentors from MNCs",
        description:
          "Learn from industry professionals working in top companies like Google, Microsoft, Amazon",
      },
      {
        icon: Award,
        title: "100% Placement Assistance",
        description:
          "Guaranteed job placement support with our extensive network of hiring partners",
      },
      {
        icon: BookOpen,
        title: "Real-World Projects",
        description:
          "Work on live projects and build a portfolio that showcases your skills to employers",
      },
      {
        icon: Users,
        title: "Small Batch Sizes",
        description:
          "Personalized attention with maximum 15 students per batch for better learning",
      },
      {
        icon: Monitor,
        title: "Flexible Learning",
        description:
          "Choose between online, offline, or hybrid modes based on your convenience",
      },
      {
        icon: MapPin,
        title: "Prime Locations",
        description:
          "Conveniently located centers in Bangalore and Hyderabad with modern facilities",
      },
    ],
  },
  ctaSection: {
    title: "Ready to Transform Your Career?",
    description:
      "Join thousands of successful professionals who started their tech journey with Flair Technologies. Your dream job is just one course away!",
  },
  featuredCoursesSection: {
    title: "Master High-Demand Skills",
    description:
      "Choose from our industry-aligned courses designed by experts and delivered by professionals from top MNCs",
    featuredCourses: [
      {
        id: "python-fullstack",
        title: "Python Full-Stack Development",
        description: "Master Django, React, and modern web development",
        duration: "6 months",
        mode: "Online/Offline",
        price: "₹45,000",
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240415204701/How-to-Become-a-Python-Full-Stack-Developer.png",
      },
      {
        id: "power-bi",
        title: "Power BI & Data Analytics",
        description: "Transform data into actionable business insights",
        duration: "3 months",
        mode: "Online/Offline",
        price: "₹25,000",
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240726121444/Data-Analytics-Training-now.webp",
      },
      {
        id: "azure-devops",
        title: "Azure DevOps",
        description: "Master cloud deployment and CI/CD pipelines",
        duration: "4 months",
        mode: "Online/Offline",
        price: "₹35,000",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Mpx-7k0FvYWzb8n8snbXGKMKM-YWg0Vlsg&s",
      },
    ],
  },
};

// About page constants
export const aboutPage = {
  heroSection: {
    badge: "🏢 About Flair Technologies",
    title:
      'Empowering <span className="text-cyan-200">Careers</span> Through Innovation',
    description:
      "Since 2018, we've been transforming lives by bridging the gap between academic learning and industry requirements. Our mission is to create skilled professionals ready for the digital future.",
    stats: [
      { value: "15000+", label: "Students Trained" },
      { value: "6", label: "Years of Excellence" },
    ],
    image: "https://www.deazy.com/hubfs/remote%20team%20meeting.png",
    imageAlt: "Flair Technologies",
  },
  missionVisionSection: {
    mission: {
      title: "Our Mission",
      icon: Target,
      description:
        "To empower individuals with cutting-edge technical skills and industry knowledge, enabling them to build successful careers in the rapidly evolving technology landscape. We are committed to providing world-class training, mentorship, and placement support to bridge the gap between academic learning and industry requirements.",
    },
    vision: {
      title: "Our Vision",
      icon: BookOpen,
      description:
        "To become India's leading IT training institute, recognized for excellence in education, innovation in teaching methodologies, and outstanding placement records. We envision a future where every student who walks through our doors emerges as a confident, skilled professional ready to make a meaningful impact in the tech industry.",
    },
  },
  uniqueFeaturesSection: {
    title: 'Our <span className="text-cyan-600">Distinctive</span> Approach',
    badge: "What Makes Us Unique",
    description:
      "Discover the key pillars that set Flair Technologies apart in the competitive training landscape",
    features: [
      {
        icon: Lightbulb,
        title: "INVENTIVE AND LEADERSHIP",
        description:
          "Flair Technologies is a leading training organization that caters to the latest technology and innovation. We are also pioneers in providing training in diverse Software fields like Python, Azure Admin, Azure DevOps, DevOps & AWS, Microsoft Power BI, Azure Data Factory, Alteryx, Microsoft Excel (VBA), Power Apps & Automate, Tableau, Testing Tools, C & Network Protocol, Web Development etc… We believe, in offering the finest standards of quality and processes that are constantly updated and adapted to the changing global scenario.",
        highlight:
          "We are dedicated to guiding industry professionals and students to competently compete and confirm international standards of quality employee efficiency and productivity.",
      },
      {
        icon: GraduationCap,
        title: "TRAINING METHODOLOGY",
        description:
          "Flair Technologies' unique training methodology is designed to provide the complete spectrum skills in a very interactive and easy to learn manner. Training is delivered by highly core and certified professionals. Our faculty is always with their high spirit to deliver their best. Our training methodology seeks to deal with the whole gamut of new skills and techniques the IT industry requires.",
        highlight:
          "Our training methodology is unique and diverse and focuses on every area towards overall development of an individual.",
      },
      {
        icon: Heart,
        title: "SMOOTH APPROACH TOWARDS CUSTOMER",
        description:
          "Most people find themselves at crossroads in their careers. They are having self-seeking goals, values, hard work, and waiting and yet they feel that the matter of career is confusing. Job hopping is another demerit or comes up from intense insecurity. With fluctuating job market, the skills present in an individual need to be further enhanced.",
        highlight:
          "We understand the environment fluctuating the job market. Our counselor evaluates the current positive finding in an individual and suggests areas of improvement. Our counselor gives the best remedy to an individual.",
      },
      {
        icon: Star,
        title: "OUR UNIQUENESS",
        description:
          "Our uniqueness replicates in many tangible and nontangible facets, just like our eminent workplace, staff & training methodology. We at Flair Technologies believe in meticulous practices & integrated solution based approach. Altogether this gives our clients a supreme advantage. We have honed our processes through experience and the incorporation of best practices in the training fraternity.",
        highlight:
          "Flair Technologies is an incredibly well-equipped training and development organization. We are dedicated to pursuing solutions to problems. Our distinctiveness lies in unmatched courseware, training techniques, and International affiliation with global giants.",
      },
    ],
  },
  valuesSection: {
    title: 'What <span className="text-sky-600">Drives</span> Us',
    badge: "Our Values",
    description:
      "Our core values guide everything we do, from curriculum design to student support",
    values: [
      {
        icon: Target,
        title: "Excellence in Education",
        description:
          "We strive to deliver the highest quality training with industry-relevant curriculum and hands-on experience.",
      },
      {
        icon: Users,
        title: "Student-Centric Approach",
        description:
          "Every decision we make is focused on student success, from course design to placement assistance.",
      },
      {
        icon: Award,
        title: "Industry Relevance",
        description:
          "Our courses are constantly updated to match current industry demands and emerging technologies.",
      },
      {
        icon: TrendingUp,
        title: "Continuous Innovation",
        description:
          "We embrace new teaching methodologies and technologies to enhance the learning experience.",
      },
    ],
  },
  milestonesSection: {
    title: '<span className="text-sky-600">Milestones</span> That Define Us',
    badge: "Our Journey",
    milestones: [
      {
        year: "2018",
        event: "Founded Flair Technologies",
        description:
          "Started with a vision to bridge the skill gap in IT industry",
      },
      {
        year: "2019",
        event: "First 100 Students Placed",
        description: "Achieved 100% placement rate in our first year",
      },
      {
        year: "2020",
        event: "Expanded to Hyderabad",
        description: "Opened our second training center to serve more students",
      },
      {
        year: "2021",
        event: "Launched Online Programs",
        description: "Adapted to digital learning during pandemic",
      },
      {
        year: "2022",
        event: "2000+ Students Trained",
        description: "Crossed the milestone of training 2000+ professionals",
      },
      {
        year: "2023",
        event: "Industry Partnerships",
        description: "Partnered with 50+ companies for direct placements",
      },
      {
        year: "2024",
        event: "5000+ Success Stories",
        description: "Celebrating 5000+ successful career transformations",
      },
    ],
  },
  leadershipSection: {
    title: 'Meet Our <span className="text-cyan-600">Leaders</span>',
    badge: "Leadership Team",
    description:
      "Experienced professionals leading the way in technology education and career development",
    team: [
      {
        name: "Rajesh Kumar",
        role: "Founder & CEO",
        experience: "15+ years",
        image: "/placeholder.svg?height=200&width=200",
        bio: "Former Tech Lead at Microsoft with a passion for education and skill development",
      },
      {
        name: "Priya Sharma",
        role: "Head of Training",
        experience: "12+ years",
        image: "/placeholder.svg?height=200&width=200",
        bio: "Ex-Amazon engineer specializing in full-stack development and data analytics",
      },
      {
        name: "Arjun Patel",
        role: "Placement Director",
        experience: "10+ years",
        image: "/placeholder.svg?height=200&width=200",
        bio: "Former HR Director at TCS with extensive industry connections and placement expertise",
      },
    ],
  },
  flairTechnologiesSection: {
    title: "We're The Best",
    description:
      "Since 2018, Flair Technologies has become the largest independent IT training institute in Bangalore. Flair Technologies offer most advanced technologies than any other training company. Businesses and individuals can choose from the course offerings, delivered by certified experts. We believe that Flair Technologies offers excellence at every level, in terms of technical training, project implementation, consultancy, or applying our experience working and research into successful techniques.",
    image:
      "https://img.freepik.com/premium-photo/happy-young-african-woman-casually-dressed-standing-isolated-taking-notes-notepad_171337-70180.jpg",
    imageAlt: "Flair Technologies",
    button: {
      text: "View Service",
      href: "/services",
    },
  },
  ctaSection: {
    title: "Ready to Join Our Success Story?",
    description:
      "Become part of the Flair Technologies family and transform your career with industry-leading training and guaranteed placement support.",
    buttons: [
      {
        text: "Explore Courses",
        href: "/courses",
        className: "bg-white text-sky-600 hover:bg-gray-100 text-lg px-8",
        icon: ArrowRight,
      },
      {
        text: "Contact Us",
        href: "/contact",
        className:
          "border-white text-white hover:bg-white hover:text-sky-600 text-lg px-8 bg-transparent",
        variant: "outline",
      },
    ],
  },
};

// Freshers page constants
export const freshersPage = {
  heroSection: {
    badge: "🎓 Freshers Special Program",
    title:
      'Launch Your <span className="text-cyan-200">Tech Career</span> Today',
    description:
      "From college graduate to industry professional in just 4-6 months. Join 2000+ freshers who transformed their careers with us.",
    stats: [
      { value: "₹4.5 LPA", label: "Average Package" },
      { value: "96%", label: "Placement Rate" },
    ],
    image:
      "https://pkrinstitute.in/lp/wp-content/uploads/2024/02/Untitled-design-1.jpg",
    imageAlt: "Freshers Success",
    buttons: [
      {
        text: "Apply Now",
        className: "bg-white text-sky-600 hover:bg-gray-100 text-lg px-8",
        icon: ArrowRight,
      },
      {
        text: "Download Brochure",
        className:
          "border border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 bg-transparent",
        variant: "outline",
      },
    ],
  },
  statsSection: [
    { icon: Users, label: "Freshers Placed", value: "2000+" },
    { icon: Award, label: "Average Package", value: "₹4.5 LPA" },
    { icon: TrendingUp, label: "Salary Hike", value: "300%" },
    { icon: GraduationCap, label: "Success Rate", value: "96%" },
  ],
  programsSection: {
    badge: "Freshers Programs",
    title: 'Choose Your <span className="text-sky-600">Career Path</span>',
    description:
      "Specially designed programs for fresh graduates with zero experience. Start from basics and become job-ready in months.",
    programs: [
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
    ],
  },
  testimonialsSection: {
    badge: "Success Stories",
    title:
      'From <span className="text-sky-600">Freshers</span> to Professionals',
    description:
      "Hear from our successful graduates who transformed their careers with our programs",
    testimonials: [
      {
        name: "Priya Sharma",
        role: "Software Developer at TCS",
        image: "/placeholder.svg?height=80&width=80",
        content:
          "Flair Technologies transformed my career! From a fresher with no coding experience to landing a job at TCS in just 6 months. The mentorship and placement support were exceptional.",
        rating: 5,
        course: "Python Full-Stack",
      },
      {
        name: "Rahul Patel",
        role: "Data Analyst at Wipro",
        image: "/placeholder.svg?height=80&width=80",
        content:
          "The Power BI course was exactly what I needed. The instructors were patient, and the real-world projects helped me build confidence. Got placed within 2 weeks of completion!",
        rating: 5,
        course: "Power BI & Analytics",
      },
      {
        name: "Sneha Reddy",
        role: "DevOps Engineer at Infosys",
        image: "/placeholder.svg?height=80&width=80",
        content:
          "As a mechanical engineering graduate, I was worried about switching to IT. But Flair's Azure DevOps program made the transition smooth. Now I'm working at Infosys!",
        rating: 5,
        course: "Azure DevOps",
      },
    ],
  },
  applicationFormSection: {
    badge: "🚀 Limited Seats Available",
    title: "Ready to Start Your Tech Journey?",
    description:
      "Apply now for our next batch starting this month. Don't miss this opportunity to transform your career!",
    features: [
      "Free career counseling session",
      "Flexible payment options available",
      "100% placement assistance guarantee",
    ],
    form: {
      title: "Apply for Freshers Program",
      description:
        "Fill out the form below and we'll get back to you within 24 hours",
      fields: [
        { type: "text", placeholder: "First Name", grid: "col-span-1" },
        { type: "text", placeholder: "Last Name", grid: "col-span-1" },
        { type: "email", placeholder: "Email Address" },
        { type: "tel", placeholder: "Phone Number" },
        {
          type: "select",
          placeholder: "Select Program",
          options: [
            { value: "fullstack", label: "Full-Stack Development Track" },
            { value: "analytics", label: "Data Analytics Track" },
            { value: "cloud", label: "Cloud & DevOps Track" },
          ],
        },
        {
          type: "select",
          placeholder: "Preferred Location",
          options: [
            { value: "bangalore", label: "Bangalore" },
            { value: "hyderabad", label: "Hyderabad" },
            { value: "online", label: "Online" },
          ],
        },
        {
          type: "textarea",
          placeholder: "Tell us about your background and career goals...",
        },
      ],
      submitButton: {
        text: "Submit Application",
        className:
          "w-full icon-button-color hover:from-sky-600 hover:to-blue-700 text-lg py-6",
        icon: "ArrowRight",
      },
      disclaimer:
        "By submitting this form, you agree to our Terms of Service and Privacy Policy",
    },
  },
};

// Batches page constants
export const batchesPage = {
  heroSection: {
    badge: "🎓 Register Now",
    title:
      'Register Now - <span className="text-cyan-200">Upcoming Batches</span>',
    description:
      "Join our expert-led training programs and kickstart your career in technology. Choose from our comprehensive range of courses designed for professionals and freshers.",
  },
  statsSection: [
    { icon: User, label: "Expert Trainers", value: "50+", emoji: "👨‍🏫" },
    {
      icon: GraduationCap,
      label: "Students Trained",
      value: "5000+",
      emoji: "🎓",
    },
    { icon: Award, label: "Placement Support", value: "100%", emoji: "💼" },
    { icon: BookOpen, label: "Upcoming Batches", value: "6", emoji: "📚" },
  ],
  batchesSection: {
    badge: "🚀 Start Learning",
    title: 'Choose Your <span className="text-sky-600">Learning Path</span>',
    description:
      "Select from our carefully curated courses and join the next batch to accelerate your career growth",
    batches: [
      {
        id: 1,
        title: "Data Analyst Freshers",
        icon: "📊",
        iconBg: "bg-green-500",
        duration: "100 Days - Daily 2 Hours",
        faculty: "Mr. Surya & Mr. Veera",
        newBatch: "September 18, 2024 @ 09:00 AM",
        sessions: "Monday to Saturday Sessions",
        mode: "Classroom - Bangalore",
        category: "Data Analytics",
      },
      {
        id: 2,
        title: "Microsoft Power BI",
        icon: "📈",
        iconBg: "bg-yellow-500",
        duration: "45 Hours",
        faculty: "Mr. Veera",
        newBatch: "September 23, 2024 @ 08:00 AM",
        sessions: "Monday to Saturday Sessions",
        mode: "Classroom - Bangalore",
        category: "Business Intelligence",
      },
      {
        id: 3,
        title: "Python FS Freshers",
        icon: "🐍",
        iconBg: "bg-blue-500",
        duration: "100 Days - Daily 2 Hours",
        faculty: "Mr. Venkat & Mr. Siva",
        newBatch: "September 16, 2024 @ 07:30 AM",
        sessions: "Monday to Saturday Sessions",
        mode: "Classroom - Bangalore",
        category: "Full-Stack Development",
      },
      {
        id: 4,
        title: "Alteryx",
        icon: "🔄",
        iconBg: "bg-blue-600",
        duration: "45 Hours",
        faculty: "Mr. Suman",
        newBatch: "September 20, 2024 @ 10:00 AM",
        sessions: "Monday to Saturday Sessions",
        mode: "Classroom - Bangalore",
        category: "Data Processing",
      },
      {
        id: 5,
        title: "SRE Modern DevOps",
        icon: "⚙️",
        iconBg: "bg-purple-600",
        duration: "100 Days - Daily 2 Hours",
        faculty: "Mr. Reddy",
        newBatch: "September 06, 2024 @ 05:00 PM",
        sessions: "Monday to Friday Sessions",
        mode: "Online",
        category: "DevOps",
      },
      {
        id: 6,
        title: "Azure DevOps",
        icon: "☁️",
        iconBg: "bg-blue-700",
        duration: "100 Hours",
        faculty: "Mr. Ramakrishna",
        newBatch: "September 16, 2024 @ 09:00 AM",
        sessions: "Monday to Saturday Sessions",
        mode: "Online",
        category: "Cloud DevOps",
      },
    ],
    categories: [
      "All",
      "Data Analytics",
      "Business Intelligence",
      "Full-Stack Development",
      "Data Processing",
      "DevOps",
      "Cloud DevOps",
    ],
  },
  whyChooseUsSection: {
    badge: "✨ Why Choose Us",
    title: 'What Makes Us <span className="text-sky-600">Different</span>',
    features: [
      {
        emoji: "👨‍💼",
        title: "Industry Expert Trainers",
        description:
          "Learn from professionals with 10+ years of real-world experience in their respective domains.",
      },
      {
        emoji: "🏢",
        title: "100% Placement Support",
        description:
          "Dedicated placement team with connections to 50+ hiring partners across various industries.",
      },
      {
        emoji: "📚",
        title: "Updated Curriculum",
        description:
          "Course content regularly updated to match current industry standards and requirements.",
      },
      {
        emoji: "🤝",
        title: "Hands-on Projects",
        description:
          "Work on real-world projects that you can showcase in your portfolio to potential employers.",
      },
      {
        emoji: "💻",
        title: "Flexible Learning",
        description:
          "Choose between classroom and online modes based on your convenience and schedule.",
      },
      {
        emoji: "🎯",
        title: "Small Batch Size",
        description:
          "Limited students per batch ensures personalized attention and better learning outcomes.",
      },
    ],
  },
  ctaSection: {
    title:
      'Ready to Transform Your <span className="text-cyan-200">Career?</span>',
    description:
      "Don't miss out on these upcoming batches. Limited seats available. Enroll now and secure your future in technology.",
    buttons: [
      {
        text: "Contact Admissions Team",
        className:
          "bg-white text-sky-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold",
      },
      {
        text: "Download Brochure",
        className:
          "bg-white text-sky-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold",
      },
    ],
  },
};

// Contact page constants
export const contactPage = {
  heroSection: {
    badge: "📞 Get In Touch",
    title:
      'Let\'s Start Your <span className="text-cyan-200">Success Journey</span>',
    description:
      "Have questions about our courses? Ready to enroll? Our expert counselors are here to guide you every step of the way across our global centers.",
  },
  aboutSection: {
    title: "FLAIR TECHNOLOGIES",
    description:
      'Flair Technologies refers to the process of acquiring and developing skills, knowledge, and expertise in various aspects of information technology. For admissions and details regarding courses please contact us on <span className="font-semibold text-sky-600">+91 974 974 9596</span> | <span className="font-semibold text-sky-600">info@flairtechnologies.in</span>',
  },
  contactInfoSection: {
    contactInfo: [
      {
        icon: MapPin,
        title: "Bangalore Center",
        details: [
          "#05, Vivekananda Layout, Marathahalli,",
          "Bangalore, Karnataka – 560037, India.",
          "Landmark: Opp: Innovative Multiplex, Behind Biryani Zone",
        ],
        phone: "+91 974 974 9596",
        email: "info@flairtechnologies.in",
        web: "www.flairtechnologies.in",
      },
      {
        icon: MapPin,
        title: "Hyderabad Center",
        details: [
          "501, Sumedh Pride, Vijay Nagar Colony,",
          "Kukatpally, Hyderabad – 500072.",
          "Landmark: Opp: Srikari Natyakala Peetam",
        ],
        phone: "+91 93477 91837",
        email: "info@flairtechnologies.in",
        web: "www.flairtechnologies.in",
      },
      {
        icon: Globe,
        title: "London Center",
        subtitle: "FLAIR TECHNOLOGIES – DATA ARTISANS",
        details: [
          "297, Suite 2, High Street",
          "North, London, E12 6SL.",
          "Landmark: Opp: Star Lettings",
        ],
        phone: "+44 20 7946 0958",
        email: "info@flairtechnologies.in",
        web: "www.flairtechnologies.in",
      },
    ],
  },
  officeHoursSection: {
    title: "Office Hours",
    officeHours: [
      { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
      { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
      { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
    ],
  },
  quickActionsSection: {
    title: "Get in Touch",
    description:
      "We're here to help you take the next step in your career. Reach out to us through any of our global locations.",
    buttons: [
      {
        text: "Book Free Demo Session",
        className:
          "w-full icon-button-color hover:from-sky-600 hover:to-blue-700 text-lg py-6 text-white hover:text-white",
        icon: Calendar,
      },
      {
        text: "Download Course Brochure",
        className:
          "border border-gray-500 w-full bg-gradient-to-r hover:from-sky-600 hover:to-blue-700 text-lg py-6 hover:text-white",
        variant: "outline",
      },
    ],
  },
  contactFormSection: {
    title: "Send Us a Message",
    description:
      "Fill out the form below and we'll get back to you within 24 hours",
    form: {
      fields: [
        { type: "text", placeholder: "First Name", grid: "col-span-1" },
        { type: "text", placeholder: "Last Name", grid: "col-span-1" },
        { type: "email", placeholder: "Email Address" },
        { type: "tel", placeholder: "Phone Number" },
        {
          type: "select",
          placeholder: "I'm interested in...",
          options: [
            { value: "python", label: "Python Full-Stack Development" },
            { value: "powerbi", label: "Power BI & Data Analytics" },
            { value: "azure", label: "Azure DevOps" },
            { value: "analytics", label: "Data Analytics" },
            { value: "tableau", label: "Tableau" },
            { value: "network", label: "Network Protocol" },
            { value: "freshers", label: "Freshers Program" },
            { value: "other", label: "Other" },
          ],
        },
        {
          type: "select",
          placeholder: "Preferred Location",
          options: [
            { value: "bangalore", label: "Bangalore" },
            { value: "hyderabad", label: "Hyderabad" },
            { value: "london", label: "London" },
            { value: "online", label: "Online" },
          ],
        },
        {
          type: "textarea",
          placeholder:
            "Tell us more about your background, career goals, or any specific questions you have...",
          className: "min-h-[120px]",
        },
      ],
      submitButton: {
        text: "Send Message",
        className:
          "w-full icon-button-color hover:from-sky-600 hover:to-blue-700 text-lg py-6",
        icon: Send,
      },
      disclaimer:
        "By submitting this form, you agree to our Terms of Service and Privacy Policy",
    },
  },
  locationsSection: {
    badge: "🌍 Global Presence",
    title: 'ADMISSIONS & <span className="text-cyan-600">CONTACT</span>',
    description:
      "Connect with us at any of our three strategic locations across India and the UK",
  },
  mapSection: {
    title: "Visit Our Centers",
    description:
      "Come visit us at our state-of-the-art training centers in Bangalore, Hyderabad, and London",
    maps: [
      {
        title: "Bangalore Center",
        address: "#05, Vivekananda Layout, Marathahalli, Bangalore - 560037",
        iframeSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8267!2d77.6272!3d12.9352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0x14f808b7e45b616!2sMarathahalli%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890",
      },
      {
        title: "Hyderabad Center",
        address:
          "501, Sumedh Pride, Vijay Nagar Colony, Kukatpally, Hyderabad - 500072",
        iframeSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6!2d78.3872!3d17.4435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0x1c2b6e4df94db6!2sKukatpally%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890",
      },
      {
        title: "London Center",
        address: "297, Suite 2, High Street North, London, E12 6SL",
        iframeSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.123!2d0.0346!3d51.5458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sHigh%20St%20N%2C%20London%20E12%206SL%2C%20UK!5e0!3m2!1sen!2sin!4v1234567890",
      },
    ],
  },
  faqSection: {
    badge: "FAQ",
    title: 'Frequently Asked <span className="text-sky-600">Questions</span>',
    faqs: [
      {
        question: "What are the admission requirements?",
        answer:
          "We welcome students from all backgrounds. Basic computer knowledge is helpful but not mandatory. We provide foundation courses for complete beginners.",
      },
      {
        question: "Do you provide placement assistance?",
        answer:
          "Yes! We offer 100% placement assistance with our network of 50+ hiring partners. Our placement team works closely with students throughout their journey.",
      },
      {
        question: "Are there flexible payment options?",
        answer:
          "We offer EMI options, scholarships for deserving students, and flexible payment plans to make quality education accessible.",
      },
      {
        question: "Can I switch between online and offline modes?",
        answer:
          "Yes, our hybrid learning model allows you to switch between online and offline modes based on your convenience and schedule.",
      },
    ],
  },
};

// export const freshersPage = {
//   heroSection: {
//     badge: "Fresher Programs",
//     title: "Launch Your Tech Career with Our <br /> Fresher Programs",
//     description:
//       "Join our industry-focused training programs designed to transform fresh graduates into job-ready professionals.",
//     image: "/fresher-hero.jpg",
//     imageAlt: "Fresher Program Hero",
//     buttons: [
//       {
//         text: "Apply Now",
//         className:
//           "bg-white text-sky-600 hover:bg-gray-100 text-lg px-8 py-3",
//         icon: ArrowRight,
//       },
//       {
//         text: "Download Brochure",
//         className:
//           "border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 bg-transparent",
//         variant: "outline",
//       },
//     ],
//     stats: [
//       { value: "1000+", label: "Students Trained" },
//       { value: "90%", label: "Placement Rate" },
//     ],
//   },
//   statsSection: [
//     {
//       icon: Calendar,
//       value: "6+",
//       label: "Months of Training",
//     },
//     {
//       icon: CheckCircle,
//       value: "90%",
//       label: "Placement Success",
//     },
//     // Add other stats as needed
//   ],
//   programsSection: {
//     badge: "Our Programs",
//     title: "Explore Our Fresher Training Programs",
//     description:
//       "Our programs are designed to equip you with the skills and knowledge needed to excel in the tech industry.",
//     programs: [
//       {
//         id: "full-stack",
//         title: "Full Stack Development",
//         description:
//           "Master front-end and back-end technologies to build modern web applications.",
//         image: "/full-stack.jpg", // Image in public folder
//         category: "Development",
//         rating: 4.8,
//         duration: "6 Months",
//         mode: "Online",
//         students: "500+ Students",
//         level: "Beginner to Advanced",
//         placement: "90%",
//         courses: [
//           "HTML, CSS, JavaScript",
//           "React & Node.js",
//           "Database Management",
//           "API Development",
//         ],
//       },
//       {
//         id: "data-science",
//         title: "Data Science & AI",
//         description:
//           "Learn data analysis, machine learning, and AI to become a data-driven professional.",
//         image: "/data-science.jpg", // Image in public folder
//         category: "Data Science",
//         rating: 4.7,
//         duration: "5 Months",
//         mode: "Hybrid",
//         students: "300+ Students",
//         level: "Intermediate",
//         placement: "85%",
//         courses: [
//           "Python for Data Science",
//           "Machine Learning",
//           "Data Visualization",
//           "Deep Learning Basics",
//         ],
//       },
//       {
//         id: "cloud-computing",
//         title: "Cloud Computing",
//         description:
//           "Gain expertise in cloud platforms like AWS, Azure, and Google Cloud.",
//         image: "/cloud-computing.jpg", // Image in public folder
//         category: "Cloud",
//         rating: 4.9,
//         duration: "4 Months",
//         mode: "Online",
//         students: "200+ Students",
//         level: "Beginner",
//         placement: "88%",
//         courses: [
//           "AWS Fundamentals",
//           "Azure Administration",
//           "Cloud Security",
//           "DevOps Basics",
//         ],
//       },
//     ],
//   },
//   testimonialsSection: {
//     badge: "Success Stories",
//     title: "What Our Students Say",
//     description:
//       "Hear from our graduates who have successfully launched their tech careers.",
//     testimonials: [
//       // Testimonials data remains unchanged
//     ],
//   },
//   applicationFormSection: {
//     badge: "Apply Now",
//     title: "Take the First Step Towards Your Tech Career",
//     description:
//       "Fill out the form below to apply for our fresher programs and start your journey.",
//     features: [
//       "Personalized career guidance",
//       "Hands-on projects",
//       "Industry-recognized certification",
//     ],
//     form: {
//       title: "Application Form",
//       description: "Submit your details to enroll in our fresher programs.",
//       fields: [
//         // Form fields remain unchanged
//       ],
//       submitButton: {
//         text: "Submit Application",
//         className:
//           "w-full bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium px-4 py-2",
//         icon: ArrowRight,
//       },
//       disclaimer:
//         "By submitting this form, you agree to our terms and conditions.",
//     },
//   },
// };

// Footer constants
export const footer = {
  companyInfo: {
    logo: {
      letter: "F",
      className:
        "w-10 h-10 icon-button-color rounded-lg flex items-center justify-center",
    },
    name: "Flair Technologies",
    description:
      "Empowering careers through cutting-edge IT training and 100% placement assistance. Transform your future with industry-relevant skills.",
    socialLinks: [
      {
        href: "#",
        icon: Facebook,
        className: "text-gray-400 hover:text-sky-400 transition-colors",
        size: "h-5 w-5",
      },
      {
        href: "#",
        icon: Twitter,
        className: "text-gray-400 hover:text-sky-400 transition-colors",
        size: "h-5 w-5",
      },
      {
        href: "#",
        icon: Instagram,
        className: "text-gray-400 hover:text-sky-400 transition-colors",
        size: "h-5 w-5",
      },
      {
        href: "#",
        icon: Linkedin,
        className: "text-gray-400 hover:text-sky-400 transition-colors",
        size: "h-5 w-5",
      },
    ],
  },
  quickLinks: [
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Freshers Program", href: "/freshers" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
  courses: [
    "Python FullStack",
    "Power BI",
    "Azure DevOps",
    "Data Analytics",
    "Tableau",
    "Network Protocol",
  ],

  // Phone / Email / Website
  contacts: [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 974 974 9596",
      iconClass: "h-5 w-5 text-sky-400",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@flairtechnologies.in",
      iconClass: "h-5 w-5 text-sky-400",
    },
    {
      icon: Globe,
      title: "Website",
      value: "www.flairtechnologies.in",
      iconClass: "h-5 w-5 text-sky-400",
    },
  ],

  // Locations
  locations: [
    {
      icon: MapPin,
      title: "Bangalore",
      address: `FLAIR TECHNOLOGIES #05, Vivekananda Layout, Marathahalli, Bangalore, Karnataka – 560037, India. Landmark: Opp: Innovative Multiplex, Behind Biryani Zone.`,
      iconClass: "h-5 w-5 text-sky-400 mt-0.5",
    },
    {
      icon: MapPin,
      title: "Hyderabad",
      address: `FLAIR TECHNOLOGIES 501, Sumedh Pride, Vijay Nagar Colony, Kukatpally, Hyderabad – 500072. Landmark: Opp: Srikari Natyakala Peetam.`,
      iconClass: "h-5 w-5 text-sky-400 mt-0.5",
    },
    {
      icon: MapPin,
      title: "London",
      address: `FLAIR TECHNOLOGIES – DATA ARTISANS 297, Suite 2, High Street North, London, E12 6SL. Landmark: Opp: Star Lettings.`,
      iconClass: "h-5 w-5 text-sky-400 mt-0.5",
    },
  ],

  copyright: `© ${new Date().getFullYear()} Flair Technologies. All rights reserved. | Privacy Policy | Terms of Service`,
};
