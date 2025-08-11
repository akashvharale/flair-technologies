import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Anjali Sharma",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg", // Replace with real images if you have
    content:
      "The instructors at Flair Technologies are truly exceptional. Their hands-on approach and real-world projects helped me gain the confidence I needed to transition into a DevOps role. Within just a month of completing the course, I landed a fantastic job offer. The support from mentors and placement assistance was top-notch throughout my journey. I highly recommend Flair Technologies to anyone serious about building a career in tech.",
  },
  {
    name: "Rahul Verma",
    image:
      "https://randomuser.me/api/portraits/men/45.jpg",
    content:
      "Flair Technologies provided me with practical training that was directly applicable in my job. The curriculum is industry-focused and taught by professionals who are currently working in the field. The small batch sizes ensured personalized attention, and the instructors were always ready to help. I especially appreciated the real-world projects that allowed me to build a strong portfolio, which played a crucial role in landing my dream job. Truly a game-changer!",
  },
  {
    name: "Sneha Rao",
    image:
      "https://randomuser.me/api/portraits/women/22.jpg",
    content:
      "Joining Flair Technologies was the best decision I made for my career. The course on Data Analytics was comprehensive and well-structured, covering all the essential tools and techniques. The faculty were knowledgeable and approachable, helping me clear all my doubts promptly. The placement team was very proactive, arranging multiple interviews and guiding me through resume building and interview preparation. I am now happily employed at a reputed MNC thanks to their dedicated efforts.",
  },
];

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto scroll every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full lg:w-1/2 space-y-6 relative">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        What Our Students Say
      </h3>

      <div >
        {/* Circular reviewer image */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={testimonials[current].name}
            src={testimonials[current].image}
            alt={testimonials[current].name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-full object-cover flex-shrink-0 border-4 border-sky-400 shadow-md"
          />
        </AnimatePresence>

        {/* Testimonial content with big quote */}
        <div className="relative flex-1">
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 text-sky-100 text-[6rem] font-serif select-none pointer-events-none -z-10 leading-none"
            style={{ lineHeight: 1 }}
          >
            “
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="text-gray-700 text-lg italic leading-relaxed"
            >
              {testimonials[current].content}
              <div className="mt-6 text-sm font-semibold text-sky-600">
                — {testimonials[current].name}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
