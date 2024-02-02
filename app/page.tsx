// pages/index.js
import Image from "next/image";
export default function Home() {
  const experiencedList = [
    {
      label: "React",
      src: "/React-icon.png",
      alt: "react logo",
    },
    {
      label: "Python",
      src: "/Python-logo-notext.png",
      alt: "python logo",
    },
    {
      label: "JavaScript",
      src: "/JSLogo.png",
      alt: "javascript logo",
    },
    {
      label: "Java",
      src: "/javaLogo.png",
      alt: "java logo",
    },
    {
      label: "Flask",
      src: "/flask-logo.png",
      alt: "flask logo",
      addClass: "invert",
    },
    {
      label: "Next.js",
      src: "/next-js.svg",
      alt: "next.js logo",
      addClass: "invert",
    },
    {
      label: "TypeScript",
      src: "/ts-logo.png",
      alt: "typescript logo",
    },
    {
      label: "TailwindCSS",
      src: "/Tailwind-CSS.svg",
      alt: "tailwindcss logo",
      addClass: "bg-gray-100 rounded-full",
    },
  ];
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
        <h2 className="text-3xl md:text-4xl lg:text-6xl my-6">
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
      <h2 className="text-3xl md:text-4xl lg:text-6xl my-6">
        ...With experience in
      </h2>
      <div className="mt-10 flex gap-5 text-center text-xl flex-wrap">
        {experiencedList.map(item => (
          <div key={item.label}>
            <Image
              src={item.src}
              width={150}
              height={150}
              alt={item.alt}
              className={`${item.addClass} h-20 w-auto`}
            />
            <p className="mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
