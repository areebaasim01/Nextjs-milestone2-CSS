import Navbar from "@/app/components/navbar/navbar"; 
import "./about.css";
import Footer from "@/app/components/footer/footer";
/* eslint-disable react/no-unescaped-entities */


export default function About() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      

      {/* About Content */}
      <div className="about-container">
        <h1 className="about-header">About Me</h1>
        <p className="about-text">
          I am Areeba Ansari, a passionate Web Developer and Sociologist with a unique blend of technical expertise and social insight. I specialize in crafting modern, user-friendly websites using technologies like HTML, CSS, TypeScript, and Next.js. My background in sociology helps me design digital solutions that are not only functional but also inclusive and empathetic, ensuring they cater to diverse audiences and societal needs. With a strong foundation in front-end development, I focus on creating seamless, responsive experiences that engage users and drive results. I'm always exploring new tools and techniques to enhance my skills and stay ahead of the curve in the ever-evolving tech landscape. Whether it is building dynamic web applications or analyzing user behavior, I am committed to creating solutions that merge the power of technology with a deep understanding of people.
        </p>
      </div>

      <Footer/>
    </div>
  );
}

