import Image from "next/image";

export default function Project() {
    return (
        <section className="projects-section">
  <div className="projects-container">
    <div className="projects-header">
      <h1 className="projects-title">
        There are my some project
      </h1>
      <p className="projects-description">
        Welcome to my web project! My name is Abdul Subhan, and this project showcases my skills as a web developer. Here, I’ve implemented modern web technologies and creative design solutions to build responsive, interactive, and user-friendly experiences. Each project I develop reflects my passion for crafting seamless digital interfaces while ensuring performance and accessibility across different devices. Take a look at my work, and feel free to explore the features I’ve built, as I continue to grow as a developer and bring ideas to life through code.
      </p>
    </div>
    <div className="projects-gallery">
      <div className="project-item">
        <div className="project-image-wrapper">
          <Image
            alt="gallery"
            className="project-image"
            src="/my persnel web.jpg"
            height={120}
            width={120}
             />

          <div className="project-overlay">
            <h2 className="project-category">Subhan project</h2>
            <h1 className="project-title">Shooting Stars</h1>
            <p className="project-description">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
            </p>
          </div>
        </div>
      </div>
    
      <div className="project-item">
        <div className="project-image-wrapper">
          <Image
            alt="gallery"
            className="project-image"
            src="/my portfolio web.jpg"
            height={120}
            width={120}
            />

          <div className="project-overlay">
            <h2 className="project-category">Subhan project</h2>
            <h1 className="project-title">The Catalyzer</h1>
            <p className="project-description">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
            </p>
          </div>
        </div>
      </div>

      <div className="project-item">
        <div className="project-image-wrapper">
          <Image
            alt="gallery"
            className="project-image"
            src="/figma.jpg"
            height={120}
            width={120}
            />

          <div className="project-overlay">
            <h2 className="project-category">Subhan project</h2>
            <h1 className="project-title">The Catalyzer</h1>
            <p className="project-description">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
            </p>
          </div>
        </div>
      </div>

      <div className="project-item">
        <div className="project-image-wrapper">
          <Image
            alt="gallery"
            className="project-image"
            src="/my project.jpg"
            height={120}
            width={120}
            />

          <div className="project-overlay">
            <h2 className="project-category">Subhan project</h2>
            <h1 className="project-title">The Catalyzer</h1>
            <p className="project-description">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>
      
      
    
    );
  }
  