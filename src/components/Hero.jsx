import { Linkedin, Github, ChevronDown } from 'lucide-react';

export default function Hero() {
    return (
        <section className="hero" id="home">
            {/* Subtle CSS animated background elements */}
            <div className="gradient-orb orb-1"></div>
            <div className="gradient-orb orb-2"></div>

            <div className="hero-content animate-fade-down">
                <h2 className="greeting">Hi, I am</h2>
                <h1 className="name">Umair Asif</h1>
                <p className="role">Front End Developer & Web Designer</p>
                <p className="bio">
                    I craft premium, accessible, and high-performance user interfaces.
                    Merging beautiful aesthetics with robust engineering to elevate digital experiences.
                </p>

                <div className="socials">
                    <a href="https://www.linkedin.com/in/umar-asif-10b48a17a" target="_blank" rel="noreferrer" className="icon" aria-label="LinkedIn">
                        <Linkedin size={24} />
                    </a>
                    <a href="https://github.com/UDGCoders" target="_blank" rel="noreferrer" className="icon" aria-label="GitHub">
                        <Github size={24} />
                    </a>
                    <a href="mailto:umarasif650@gmail.com" className="email-cta">Let's Talk</a>
                </div>
            </div>

            <div className="scroll-indicator animate-fade-in">
                <span>Scroll Discover</span>
                <ChevronDown size={24} color="var(--accent-blue)" style={{ marginTop: '12px' }} />
            </div>
        </section>
    );
}
