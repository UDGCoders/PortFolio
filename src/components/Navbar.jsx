import { Home, Mail, User } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="nav animate-fade-down">
            <a href="#" className="nav-item">
                <Home size={20} color="var(--accent-blue)" /> <span>Home</span>
            </a>
            <a href="#contact" className="nav-item">
                <Mail size={20} color="var(--accent-blue)" /> <span>Contact</span>
            </a>
            <a href="#skills" className="nav-item">
                <User size={20} color="var(--accent-blue)" /> <span>About</span>
            </a>
        </nav>
    );
}
