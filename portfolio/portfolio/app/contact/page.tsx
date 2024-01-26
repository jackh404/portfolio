// pages/contact.js

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact | Personal Tech Portfolio</title>
        <meta name="description" content="Get in touch with me through this page." />
      </Head>

      <h1>Contact Me</h1>
      <p>If you have any questions or would like to discuss a project, feel free to reach out to me.</p>

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
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              About Me
            </Link>
          </li>
          <li>
            <Link href="/projects">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
