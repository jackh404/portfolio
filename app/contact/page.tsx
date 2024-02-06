// pages/contact.js
import { IoIosMail } from "react-icons/io";
import { FaLinkedin, FaGithub, FaDev } from "react-icons/fa";

import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Contact | Tech Portfolio",
  description:
    "Get in touch with me. I'm always open to discussing new projects, questions, or potential collaboration opportunities.",
};

export default function Contact() {
  const iconClass = "w-10 h-10 mr-4 ";
  const links = [
    {
      href: "mailto:jackhenza@gmail.com",
      label: "Email me",
      icon: <IoIosMail className={iconClass} />,
    },
    {
      href: "https://www.linkedin.com/in/jack-henza/",
      label: "LinkedIn",
      icon: <FaLinkedin className={iconClass} />,
    },
    {
      href: "https://github.com/jackh404",
      label: "GitHub",
      icon: <FaGithub className={iconClass} />,
    },
    {
      href: "https://dev.to/jackh404",
      label: "Dev.to",
      icon: <FaDev className={iconClass} />,
    },
  ];
  return (
    <div className="text-center max-w-xl mx-auto">
      <h1 className="text-3xl p-6">Contact Me</h1>
      <p>
        If you would like to discuss a collaboration, hire me, or just see what
        I'm up to, please reach out by one of the methods below.
      </p>

      <ul className="flex flex-col mt-8 gap-6 items-center">
        {links.map(link => (
          <li key={link.href} className="">
            <a
              href={link.href}
              target="_blank"
              className="flex items-center hover:scale-110 transition-transform"
            >
              {link.icon}
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
