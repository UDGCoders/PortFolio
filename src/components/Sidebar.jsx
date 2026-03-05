import { Linkedin, Github } from 'lucide-react';

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-content animate-fade-in-right">
                <h1 className="name">Umair Asif</h1>
                <h2 className="role">Front End Developer<br />& Web Designer</h2>
                <p className="bio">
                    I craft premium, accessible, and high-performance user interfaces.
                    Merging beautiful aesthetics with robust engineering to elevate digital experiences.
                </p>

                <nav className="sidebar-nav">
                    <a href="#about" className="nav-link active">
                        <span className="nav-line"></span> About
                    </a>
                    <a href="#expertise" className="nav-link">
                        <span className="nav-line"></span> Expertise
                    </a>
                    <a href="#contact" className="nav-link">
                        <span className="nav-line"></span> Contact
                    </a>
                </nav>

                <div className="socials">
                    <a href="https://www.linkedin.com/in/umar-asif-10b48a17a" target="_blank" rel="noreferrer" className="icon" aria-label="LinkedIn">
                        <Linkedin size={22} />
                    </a>
                    <a href="https://github.com/UDGCoders" target="_blank" rel="noreferrer" className="icon" aria-label="GitHub">
                        <Github size={22} />
                    </a>
                </div>
            </div>
        </aside>
    );
}
