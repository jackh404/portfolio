// pages/contact.js

import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Contact | Tech Portfolio",
  description:
    "Get in touch with me. I'm always open to discussing new projects, questions, or potential collaboration opportunities.",
};

export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>
        If you have any questions or would like to discuss a project, feel free
        to reach out to me.
      </p>

      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <input type="submit" value="Submit" />
      </form>

      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Me</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
