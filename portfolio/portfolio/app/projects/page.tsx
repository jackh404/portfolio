// pages/projects.js

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projects | Personal Tech Portfolio</title>
        <meta name="description" content="Explore my projects and see what I've been working on." />
      </Head>

      <h1>My Projects</h1>
      <p>Here you can find a selection of my projects. I've worked on a variety of projects, from small personal projects to larger, more complex applications.</p>

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
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}