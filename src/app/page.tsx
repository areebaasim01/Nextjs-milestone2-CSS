import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer';
import Image from "next/image";



export default function Home() {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />
      

      {/* Hero Section */}
      <div id="hero">
        <div className="container">
          {/* Introduction */}
          <div className="intro">
            <h1 className="intro-heading">
              I'm <br />
              Areeba <br />
              <span className="highlight">A Web <br /> Developer</span>
            </h1>
            <p className="intro-text">
              Crafting modern, responsive, and user-friendly web
              <br /> experiences.
            </p>
            <div className="cta">
              <a
                href="/cv.pdf"
                download="My_CV.pdf"
                className="btn"
              >
                Download My CV
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="profile">
            <Image
              src="/pic.png" // Path to your image
              alt="Areeba"
              width={300}
              height={300}
              className="profile-img"
            />
          </div>
        </div>
      </div>

      <Footer/>
    </div>
    
  );
}

