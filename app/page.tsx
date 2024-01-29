// pages/index.js
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <h1>Home</h1>
      </motion.div>
    </div>
  );
}
