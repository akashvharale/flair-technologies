import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

type propsType = {
  formHeading?: string;
  btnName?: string;
};

const BookADemoForm = (props: propsType) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full bg-white p-6 rounded-xl shadow-md border border-sky-100"
    >
      <div>
        <h3 className="text-2xl font-bold text-sky-700 mb-4">
          {props.formHeading || `Book a Free Demo Session`}
        </h3>
        <form className="space-y-4 ">
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Preferred Course</label>
            <select className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500">
              <option value="">Select a course</option>
              <option value="python">Python Fullstack</option>
              <option value="powerbi">Power BI</option>
              <option value="devops">DevOps</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Location</label>
            <select className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500">
              <option value="">Select location</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="bangalore">Bangalore</option>
              <option value="online">Online</option>
            </select>
          </div>
          <Button
            type="submit"
            className="w-full icon-button-color hover:bg-sky-700"
          >
            {props.btnName || "Book Demo"}
          </Button>
        </form>
      </div>
    </motion.div>
  );
};

export default BookADemoForm;
