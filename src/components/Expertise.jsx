import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const expertiseItems = [
    {
        id: 1,
        title: "Front End Developer",
        image: "/images/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png",
        description: "I can use Angular and React to develop",
        highlight: "Front End Interfaces"
    },
    {
        id: 2,
        title: "Web Designer",
        image: "/images/images (1).png",
        description: "I can use CSS and Bootstrap to design",
        highlight: "Modern WebApps"
    },
    {
        id: 3,
        title: "Android Development",
        image: "/images/download.png",
        description: "I can use Flutter to develop",
        highlight: "Mobile Apps"
    }
];

export default function Expertise() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        // offset: ["start start", "end end"] keeps the progress 0-1 across the entire 300vh height
        offset: ["start start", "end end"]
    });

    // Translate horizontally across the screen
    // The amount depends on however many items you have.
    // For 3 items moving across the viewport, moving to around -50% to -66% of the flex row width is usually correct.
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

    return (
        <section id="skills" ref={containerRef} style={{ height: "300vh", position: 'relative' }}>
            <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>

                <div style={{ position: 'absolute', top: '15%', width: '100%', textAlign: 'center' }}>
                    <h2 className="section-title">My Expertise</h2>
                </div>

                <motion.div style={{ x, display: "flex", gap: "3rem", paddingLeft: "15vw", alignItems: "center", height: "100%" }}>
                    {expertiseItems.map(item => (
                        <div key={item.id} className="card" style={{ flexShrink: 0, width: "350px", height: "400px", justifyContent: 'center' }}>
                            <img src={item.image} alt={item.title} className="card-img" />
                            <div className="card-content" style={{ textAlign: 'center' }}>
                                <h2 className="card-title">{item.title}</h2>
                                <p className="card-description">{item.description} <br />
                                    <span className="highlight">{item.highlight}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
