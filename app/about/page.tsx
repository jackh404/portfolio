// pages/about.js
import Image from "next/image";

export const metadata = {
  title: "About | Tech Portfolio",
  description: "Learn about my background, experience, and projects.",
};

export default function About() {
  return (
    <div>
      <h1 className="text-3xl p-6">About Me</h1>
      <p className="text-lg p-6">
        Hi, I&apos;m Jack Henza.
        <br />
        <br /> I&apos;ve spent the last ten years working in a variety of
        technical fields including both machine and hand-tool based
        manufacturing, CMS based web development, and classroom education. With
        a B.S. in Sustainable Technologies and a Post-Graduate Certificate in
        Software Engineering from FlatIron School, my educational and
        professional experience provide a strong foundation upon which to tackle
        complex problems and develop practical solutions. Trained as a builder
        and engineer I approach projects with an investigative mindset
        prototyping and testing processes while able to appropriately adapt to
        the evolving needs of a project.
        <br />
        <br /> I am experienced in Java, Python, Flask SQLAlchemy, JS, and React
        and I am constantly exposing myself to new tools to better support my
        projects. I work well independently, but I thrive in team-based
        environments.
        <br />
        <br />
        In addition to my passion for creating new software projects, I am a DnD
        player with a penchant for hiking in as many countries as my wife and I
        can get to.
      </p>
      <Image
        src="/wideshotIceland.jpg"
        alt="picture of me"
        width={800}
        height={800}
        className="mx-auto"
      />
    </div>
  );
}
