import Image from "next/image";
import Navbar from "@/app/components/navbar/navbar"; 
import Footer from "@/app/components/footer/footer";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <Navbar />

      {/* Decorative Image */}
      <div className="image-container">
        <Image
          src="/contact.jpeg"
          alt="Decorative Image"
          width={1000}
          height={80}
          className="decorative-image"
        />
      </div>

      {/* Contact Section */}
      <div className="contact-container">
        <h1 className="contact-header">Get in Touch</h1>
        <p className="contact-description">
          Have questions, feedback, or just want to get in touch? We’d love to hear from you! Reach out to us anytime—we’re here to assist with anything you need. Whether it’s inquiries about our services, collaborations, or general support, we’re just a message away. Connect with us through the form below or via our social media channels. Let’s make great things happen together!
        </p>

        <div className="contact-info">
          <p>
            <strong>Email: </strong>
            <a href="mailto:ansarirukhsana841@gmail.com" className="contact-link">
              ansarirukhsana841@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone: </strong>03175897934
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
