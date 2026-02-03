'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <>
      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 md:py-24 bg-background"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-foreground">
              Get in Touch
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
              Have questions? We&apos;re here to help you every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {/* Visit Us Card */}
            <div className="group relative bg-gradient-to-br from-primary/5 to-primary/10 p-5 sm:p-8 rounded-xl sm:rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
              <div className="hidden sm:block absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-foreground">
                  Visit Our Office
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-2">
                  Jwagal, Lalitpur
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground/80 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border">
                  <span className="font-semibold text-foreground">
                    Office Hours:
                  </span>
                  <br />
                  Sun - Fri: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: Closed
                </p>
              </div>
            </div>

            {/* Contact Us Card */}
            <div className="group relative bg-gradient-to-br from-primary/5 to-primary/10 p-5 sm:p-8 rounded-xl sm:rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
              <div className="hidden sm:block absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-foreground">
                  Contact Us
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-foreground mb-1">
                      Phone
                    </p>
                    <div className="text-muted-foreground text-sm sm:text-base space-y-1">
                      <div>
                        <Link
                          href="tel:+9779843590789"
                          className="hover:text-primary transition-colors text-sm"
                        >
                          +977 9843590789
                        </Link>
                      </div>
                      <div>
                        <Link
                          href="tel:+9779708835021"
                          className="hover:text-primary transition-colors text-sm"
                        >
                          +977 9708835021
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2 sm:pt-3 border-t border-border">
                    <p className="text-xs sm:text-sm font-semibold text-foreground mb-1">
                      Email
                    </p>
                    <div className="text-muted-foreground text-sm sm:text-base space-y-1">
                      <div>
                        <Link
                          href="mailto:zenixdigitalproductions@gmail.com"
                          className="hover:text-primary transition-colors text-sm"
                        >
                          zenixdigitalproductions@gmail.com
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section
        className="py-12 md:py-24 bg-background"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-foreground">
              Find Us
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
              Visit our office in Jwagal, Lalitpur
            </p>
          </div>
          <div className="rounded-xl sm:rounded-2xl overflow-hidden border-2 border-border shadow-lg">
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
