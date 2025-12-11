"use client";

import { ReactNode } from "react";
import ContactForm from "@/app/(component)/(contact)/ContactForm";
import CommentForm from "@/app/(component)/(contact)/CommentForm";
import { FaLinkedin, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10"
      id="contact"
    >
      <div className="text-center mb-12 md:mb-16" data-aos="fade-down">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-3">
          Contact & Comment
        </h2>
        <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
          Whether you have a project idea, a question, or just want to leave a
          quick greeting, feel free to reach out or drop a comment below.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">
        <div
          className="space-y-6"
          // initial="hidden" // Removed Framer Motion props
          // whileInView="show"
          // viewport={{ once: true, amount: 0.12 }}
          // variants={containerVariants}
        >
          <div
            className="p-6 bg-card rounded-xl shadow-xl border border-border"
            // variants={cardVariant}
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Contact Me 💬
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Have something to discuss? Send me a message and let's talk.
            </p>
            <ContactForm />
          </div>

          <div
            className="p-6 bg-card rounded-xl shadow-xl border border-border"
            // variants={cardVariant}
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Connect With Me 🔗
            </h3>
            <div className="space-y-3" /* variants={listVariant} */>
              <LinkItem
                icon={<FaLinkedin className="text-xl" />}
                name="Let's Connect"
                platform="on LinkedIn"
                href="https://www.linkedin.com/in/brucad-al-magribi-11675233a/"
              />
              <LinkItem
                icon={<FaGithub className="text-xl" />}
                name="Github"
                platform="@almagribii"
                href="https://github.com/almagribii"
              />
              <LinkItem
                icon={<FaInstagram className="text-xl" />}
                name="Instagram"
                platform="@brucadal_"
                href="https://www.instagram.com/brucadal_/"
              />
              <LinkItem
                icon={<FaYoutube className="text-xl" />}
                name="Youtube"
                platform="@almagribiichannel"
                href="https://www.youtube.com/@nutritionanalisys"
              />
            </div>
          </div>
        </div>

        <div className="p-6 bg-card rounded-xl shadow-xl border border-border">
          <h2 className="text-2xl font-bold mb-4 text-primary">Comments 📝</h2>
          <CommentForm />
        </div>
      </div>
    </div>
  );
}

function LinkItem({
  icon,
  name,
  platform,
  href,
}: {
  icon: ReactNode;
  name: string;
  platform: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-3 bg-secondary rounded-md hover:bg-accent transition-all transform group"
      // variants={listItemVariant}
      // whileHover={{ scale: 1.05, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
      // transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <span className="text-xl mr-3 flex items-center justify-center">
        {icon}
      </span>
      <div className="flex-1">
        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
          {name}
        </p>
        <p className="text-xs text-muted-foreground">{platform}</p>
      </div>
    </a>
  );
}




