import Image from "next/image";

export default function About() {
    return (
        <div className="about-container">
 
  <h1 className="about-title">
    About Page
  </h1>

  <div className="about-content">
   
    <Image
      alt="hero"
      src="/web-anima.webp"
      className="about-image"
      height={200}
      width={200}
    />

    <div className="about-text">
      <h1 className="about-heading">About me</h1>
      <p>
        Hello! Im a passionate and dedicated Web Developer with a deep
        enthusiasm for building clean, responsive, and user-friendly websites.
        Over the years, I have honed my skills in HTML, CSS, JavaScript, and
        TypeScript, and Im constantly evolving to stay updated with the latest
        technologies and best practices.
      </p>
    </div>
  </div>

  <div className="skills-section">
    <h1 className="skills-title">My Skills</h1>
    <ul className="skills-list">
      <li>HTML</li><div className="skill-bar html"></div>
      <li>CSS</li><div className="skill-bar css"></div>
      <li>JavaScript</li><div className="skill-bar javascript"></div>
      <li>TypeScript</li><div className="skill-bar typescript"></div>
      <li>React</li><div className="skill-bar react"></div>
      <li>Next.js</li><div className="skill-bar nextjs"></div>
    </ul>
  </div>
</div>
      
    
    );
  }