import Link from "next/link";

export default function Navbar() {
    return (
      <header className="header">
      <div className="container">
        <a className="logo">
          <h2 className="logo-text">A&S</h2>
        </a>
        <nav className="navigation">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/project" className="nav-link">Project</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>
        <button className="download-cv">Download CV</button>
      </div>
    </header>
      
    
    );
  }
  