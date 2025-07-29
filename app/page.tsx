// pages/index.js
import Image from "next/image";
import experiencedList from "./data/experiencedList.json";
export default function Home() {

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl mb-4">
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl my-6">
          Full Stack
          <br />
          Software Engineer...
        </h2>
        <p className="text-lg">
          I am a creative and innovative Full-Stack Developer with more than 10
          years working in various technical fields. I am experienced in Java,
          Python, Flask SQLAlchemy, JS, and React, as well as education and
          manufacturing. I am always curious, friendly, and ready to dive into
          team-driven projects. I am passionate about sustainable technologies
          at the intersection of environmental action and computer science.
        </p>
      </div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl my-6 md:mt-10">
        ...With experience in
      </h2>
      <div className="mt-10 flex gap-7 text-center text-xl flex-wrap justify-center">
        {experiencedList.map(item => (
          <div key={item.label}>
            <Image
              src={item.src}
              width={150}
              height={150}
              alt={item.alt}
              className={`max-h-12 w-auto mx-auto ${item.addClass}`}
            />
            <p className="mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
