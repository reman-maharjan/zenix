'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <>
      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 md:py-24 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#8b7457] mb-3">
              Contact
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 md:mb-4 text-gray-900">
              Let&apos;s talk about your next project
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Share what you&apos;re building, where you are in the process and how we can help.
              We&apos;ll get back with clear next steps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Visit Us Card */}
            <div className="group relative rounded-3xl border border-gray-200 bg-[#faf7f3] p-6 sm:p-8 overflow-hidden">
              <div className="pointer-events-none absolute -top-10 -right-6 h-32 w-32 rounded-full bg-[#c7ab86]/20 blur-3xl" />
              <div className="relative space-y-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white border border-gray-200 text-[#c7ab86]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg sm:text-xl text-gray-900">
                    Visit our studio
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Jwagal, Lalitpur
                  </p>
                </div>
                <div className="pt-3 mt-2 border-t border-gray-200 text-xs sm:text-sm text-gray-500 space-y-1">
                  <p className="font-medium text-gray-700">Office hours</p>
                  <p>Sun – Fri: 9:00 AM – 6:00 PM</p>
                  <p>Saturday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Us Card */}
            <div className="group relative rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
              <div className="relative space-y-5">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#faf7f3] border border-gray-200 text-[#c7ab86]">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg sm:text-xl text-gray-900">
                    Talk to our team
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Call, email or send a WhatsApp message and we&apos;ll respond as soon as possible.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                      Phone
                    </p>
                    <div className="text-sm sm:text-base text-gray-600 space-y-1">
                      <div>
                        <Link
                          href="tel:+9779843590789"
                          className="hover:text-[#c7ab86] transition-colors"
                        >
                          +977 9843590789
                        </Link>
                      </div>
                      <div>
                        <Link
                          href="tel:+9779708835021"
                          className="hover:text-[#c7ab86] transition-colors"
                        >
                          +977 9708835021
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-200 space-y-2">
                    <p className="text-xs sm:text-sm font-semibold text-gray-700">
                      Email
                    </p>
                    <div className="text-sm sm:text-base text-gray-600">
                      <Link
                        href="mailto:zenixdigitalproductions@gmail.com"
                        className="hover:text-[#c7ab86] transition-colors"
                      >
                        zenixdigitalproductions@gmail.com
                      </Link>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-200 space-y-2">
                    <p className="text-xs sm:text-sm font-semibold text-gray-700">
                      WhatsApp
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <Link
                        href="https://wa.me/9779843590789?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20working%20with%20Zenix."
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/70 bg-white px-4 py-2 text-xs sm:text-sm font-medium text-[#128C7E] hover:bg-[#e9f8f0] transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Start a chat</span>
                      </Link>
                      <p className="text-xs text-gray-500">
                        Share a few lines about your brand and what you&apos;re looking for.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="py-16 md:py-24 bg-[#faf7f3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#8b7457] mb-3">
              Location
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 md:mb-4 text-gray-900">
              Find us in Jwagal, Lalitpur
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Our studio is centrally located and easy to access from Kathmandu and the wider valley.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5!2d85.3245!3d27.6789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199648fa2b4d%3A0x0!2sJwagal%2C%20Lalitpur!5e0!3m2!1sen!2snp!4v1234567890123!5m2!1sen!2snp"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Zenix Digital Productions Location"
            />
          </div>
        </div>
      </section>
    </>
  );
};
