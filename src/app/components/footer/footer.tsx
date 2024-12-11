import Image from 'next/image';
import './footer.css';

export default function Footer() {
    return (
        <div>
            {/* Social Media Footer */}
            <footer className="footer">
                <div className="social-icon">
                    <a href="https://www.instagram.com/reebeow_drops" target="_blank" rel="noopener noreferrer">
                        <Image 
                            src="/instaa.png" 
                            alt="Instagram" 
                            width={50}
                            height={40}
                        />
                    </a>
                </div>

                <div className="social-icon">
                    <a href="https://www.facebook.com/angel.sheeza.35/" target="_blank" rel="noopener noreferrer">
                        <Image 
                            src="/facebook.png" 
                            alt="Facebook" 
                            width={50}
                            height={40}
                        />
                    </a>
                </div>

                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/areeba-ansari-387355222/" target="_blank" rel="noopener noreferrer">
                        <Image 
                            src="/linkdin.png" 
                            alt="LinkedIn" 
                            width={35}
                            height={35}
                        />
                    </a>
                </div>
            </footer>

            {/* Secondary Footer */}
            <footer className="secondary-footer">
                <p className="secondary-footer-text">
                    &copy; {new Date().getFullYear()} Areeba. All rights reserved.
                </p>
            </footer>
        </div>
    );
}
