

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";

export default function Component() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] py-12 px-4 text-five">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            {/* Call To Us Section */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-fourth rounded-full flex items-center justify-center mr-3">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#263238]">
                  Call To Us
                </h3>
              </div>
              <p className="text-[#455A64] mb-3">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-[#263238] font-medium">
                Phone: +8801611112222
              </p>
            </div>

            <hr className="border-[#B0BEC5] mb-8" />

            {/* Write To Us Section */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-fourth  rounded-full flex items-center justify-center mr-3">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#263238]">
                  Write To US
                </h3>
              </div>
              <p className="text-[#455A64] mb-3">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <div className="space-y-2">
                <p className="text-[#263238]">Emails: customer@exclusive.com</p>
                <p className="text-[#263238]">Emails: support@exclusive.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <form className="space-y-6">
              {/* Name, Email, Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name *"
                    className="bg-[#F7F7F7] border-0 placeholder:text-[#B0BEC5] focus:ring-2 focus:ring-[#455A64] focus:bg-white"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email *"
                    className="bg-[#F7F7F7] border-0 placeholder:text-[#B0BEC5] focus:ring-2 focus:ring-[#455A64] focus:bg-white"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Your Phone *"
                    className="bg-[#F7F7F7] border-0 placeholder:text-[#B0BEC5] focus:ring-2 focus:ring-[#455A64] focus:bg-white"
                    required
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={8}
                  className="bg-[#F7F7F7] border-0 placeholder:text-[#B0BEC5] focus:ring-2 focus:ring-[#455A64] focus:bg-white resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-fourth hover:bg-five text-white px-8 py-3 rounded-md font-medium transition-colors"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
