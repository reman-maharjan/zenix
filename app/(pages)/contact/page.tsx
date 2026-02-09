import type { Metadata } from "next";
import { Contact } from "@/components/contact/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Zenix Digital Productions to discuss digital strategy, social media, photography, video or web projects based in Jwagal, Lalitpur.",
  openGraph: {
    title: "Contact Zenix Digital Productions",
    description:
      "Get in touch with the Zenix Digital Productions team to talk about your next campaign or content project.",
    url: "/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Contact />
    </>
  );
}