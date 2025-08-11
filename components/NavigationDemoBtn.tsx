"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface EnrollDialogProps {
  buttonText: string;
  className?: string;
  size?: "default" | "sm" | "lg";
}

export function NavigationDemoBtn({
  buttonText,
  className,
  size,
}: EnrollDialogProps) {
  const [tab, setTab] = useState("general");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={className} size={size || "sm"}>
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl w-full p-6 rounded-xl bg-white shadow-lg border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Request a call back
          </h2>
        </div>

        <Tabs defaultValue="general" value={tab} onValueChange={setTab}>
          <TabsList className="flex w-full mb-6 border-b border-gray-200">
            {/* Left Half: General Enquiries */}
            <div className="w-1/2 flex justify-center">
              <TabsTrigger
                value="general"
                className={`w-full max-w-xs text-center text-sm font-medium px-4 py-2 rounded-t-md transition-all duration-200 ${
                  tab === "general"
                    ? "bg-sky-100 text-sky-700 border-b-2 border-sky-600"
                    : "text-gray-600 hover:text-sky-600"
                }`}
              >
                General Enquiries
              </TabsTrigger>
            </div>

            {/* Right Half: Hire From Us */}
            <div className="w-1/2 flex justify-center">
              <TabsTrigger
                value="hire"
                className={`w-full max-w-xs text-center text-sm font-medium px-4 py-2 rounded-t-md transition-all duration-200 ${
                  tab === "hire"
                    ? "bg-sky-100 text-sky-700 border-b-2 border-sky-600"
                    : "text-gray-600 hover:text-sky-600"
                }`}
              >
                Hire From Us
              </TabsTrigger>
            </div>
          </TabsList>

          {/* === General Enquiries Form === */}
          <TabsContent value="general">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Full Name<span className="text-red-500">*</span>
                </label>
                <Input placeholder="Enter your full name" required />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Mobile Number<span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <span className="text-sm flex items-center px-2 border rounded-md bg-gray-100">
                    +91
                  </span>
                  <Input
                    placeholder="Enter mobile number"
                    type="tel"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-gray-700">
                  Email<span className="text-red-500">*</span>
                </label>
                <Input placeholder="Enter your email" type="email" required />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-gray-700">
                  Message<span className="text-red-500">*</span>
                </label>
                <Textarea placeholder="Enter your message" required />
              </div>

              <div className="sm:col-span-2 text-right mt-2">
                <Button
                  type="submit"
                  className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2"
                >
                  Submit
                </Button>
              </div>
            </form>
          </TabsContent>

          {/* === Hire From Us Form === */}
          <TabsContent value="hire">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Full Name<span className="text-red-500">*</span>
                </label>
                <Input placeholder="Enter your full name" required />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Mobile Number<span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <span className="text-sm flex items-center px-2 border rounded-md bg-gray-100">
                    +91
                  </span>
                  <Input
                    placeholder="Enter mobile number"
                    type="tel"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-gray-700">
                  Company Name<span className="text-red-500">*</span>
                </label>
                <Input placeholder="Enter your company name" required />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-gray-700">
                  Email<span className="text-red-500">*</span>
                </label>
                <Input placeholder="Enter your email" type="email" required />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-gray-700">
                  Message<span className="text-red-500">*</span>
                </label>
                <Textarea placeholder="Enter your message" required />
              </div>

              <div className="sm:col-span-2 text-right mt-2">
                <Button
                  type="submit"
                  className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2"
                >
                  Submit
                </Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
