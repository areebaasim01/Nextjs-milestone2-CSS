import Image from "next/image";
import Navbar from "@/app/components/navbar/navbar"; // Adjust the path to your Navbar component
import "./skills.css";
import Footer from "@/app/components/footer/footer";




export default function Skills() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
 <div>
     
        <div className="skills-grid">
          {/* Frameworks & Libraries */}
          <div className="frameworks-image">
            <Image src="/SKILL.png" alt="Frameworks & Libraries" width={600} height={300} />
          </div>


          
          {/* Middle Column */}
          <div className="divider"></div>
          
          {/* Skills Section */}
          <div className="skills-list">
          <h1>Frameworks & Libraries</h1>
            <div className="skills-items">
              <div className="skill-item">
                <Image src="/react.png" alt="React" width={90} height={90} />
                <p>React</p>
              </div>
              <div className="skill-item">
                <Image src="/nextjs.png" alt="Next.js" width={90} height={90} />
                <p>Next.js</p>
              </div>
              <div className="skill-item">
                <Image src="/git.png" alt="Git" width={90} height={90} />
                <p>Git</p>
              </div>
              <div className="skill-item">
                <Image src="/tailwind.png" alt="Tailwind CSS" width={90} height={90} />
                <p>Tailwind CSS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <Footer />
      </div>
  );
}
