// pages/about.js

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Comments from '../components/Comments';

export default function About() {
  return (
    <div>
      <Head>
        <title>About | Personal Tech Portfolio</title>
        <meta name="description" content="Learn more about me and my journey in the tech industry." />
      </Head>

      <h1>About Me</h1>
      <p>I am a passionate programmer with a love for all things tech. With a strong foundation in JavaScript and its frameworks, I am always ready to take on new challenges and learn new technologies.</p>
    <Comments />
      <nav>
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
