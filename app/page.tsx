import Image from "next/image"


export default function Home() {
  
  return(
      //HERO SEACTION
      <section className="body-font">
  <div className="container">
    <div className="image-container">
      <Image className="hero-image" alt="hero" src="/my pic.jpg" width={290} height={290}/>
    </div>
    <div className="content">
      <h1 className="hero-title">Hey<br className="hidden-lg" />im Abdul Subhan</h1>
      <p className="hero-description">
        As a passionate and detail-oriented web developer, I specialize in crafting visually appealing and highly functional websites. With extensive experience in HTML, CSS, JavaScript, and TypeScript, I excel at creating responsive, user-friendly, and performance-driven web applications. My expertise allows me to transform complex design concepts into seamless, interactive web experiences. Whether working on front-end development, optimizing code for scalability, or integrating modern technologies, I am committed to delivering clean, efficient code that ensures a great user experience across all devices.
      </p>
      <div className="buttons">
        <button className="about-me">About me</button>
        <button className="contact">Contact</button>
      </div>
    </div>
  </div>
</section>


  )
}