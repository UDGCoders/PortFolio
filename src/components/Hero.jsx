import { Linkedin, Github, ChevronDown } from 'lucide-react';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-content" data-aos="zoom-in-up" data-aos-duration="1500">
                <h1 className="name">Umair Asif</h1>
                <p className="role" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">Front End Developer & Web Designer</p>
                <div className="socials" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1200">
                    <a href="https://www.linkedin.com/in/umar-asif-10b48a17a" target="_blank" rel="noreferrer" className="icon" aria-label="LinkedIn">
                        <Linkedin size={24} />
                    </a>
                    <a href="https://github.com/UDGCoders" target="_blank" rel="noreferrer" className="icon" aria-label="GitHub">
                        <Github size={24} />
                    </a>
                </div>
            </div>
            <div className="scroll-indicator" data-aos="fade-in" data-aos-delay="1200" data-aos-duration="2000">
                <span>Scroll Discover</span>
                <ChevronDown size={24} color="var(--accent-blue)" style={{ marginTop: '12px' }} />
            </div>
        </section>
    );
}
