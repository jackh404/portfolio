// pages/index.js
import React from "react";

export default function Home() {
  return (
    <div className="p-10">
      <div className="flex flex-col md:flex-row justify-evenly items-center">
        <h1 className="text-5xl md:text-6xl lg:text-8xl">Jack&nbsp;</h1>
        <h1 className="text-5xl md:text-6xl lg:text-8xl mb-5">
          <br />
          Henza
        </h1>

        <img
          src="/headshotIceland.jpg"
          alt="profile"
          className="w-64 md:w-96 lg:w-1/3 rounded lg:mx-10"
        />
      </div>
      <div className="mt-6">
        <h2 className="text-2xl md:text-3xl lg:text-6xl">
          Full Stack
          <br />
          Software Engineer
        </h2>
      </div>
    </div>
  );
}
