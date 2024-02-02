// pages/index.js
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-5xl md:text-6xl lg:text-8xl">
          Jack
          <br />
          Henza
        </h1>

        <Image
          src="/headshotIceland.jpg"
          alt="picture of me"
          width={600}
          height={600}
          className="w-64 md:w-96 lg:w-1/3 rounded lg:mx-10"
        />
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl lg:text-6xl my-6">
          Full Stack
          <br />
          Software Engineer
        </h2>
        <p className="">
          I am a creative and innovative Full-Stack Developer with more than 10
          years working in various technical fields. I am experienced in Java,
          Python, Flask SQLAlchemy, JS, and React, as well as education and
          manufacturing. I am always curious, friendly, and ready to dive into
          team-driven projects. I am passionate about sustainable technologies
          at the intersection of environmental action and computer science.
        </p>
      </div>
    </div>
  );
}
