// pages/index.js

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Personal Tech Portfolio</title>
        <meta name="description" content="Welcome to my personal tech portfolio website. Here you can learn more about me and see my projects." />
      </Head>

      <h1>Welcome to my Personal Tech Portfolio</h1>
      <p>This is my personal tech portfolio where you can learn more about me and see my projects.</p>

      <nav>
        <ul>
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
