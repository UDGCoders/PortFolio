export default function Expertise() {
    return (
        <section className="cards-section" id="skills">
            <h2 className="section-title animate-scroll-up">My Expertise</h2>
            <div className="cards">
                <div className="card animate-scroll-up" style={{ '--animation-delay': '0.1s' }}>
                    <img src="/images/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" alt="React Logo" className="card-img" />
                    <div className="card-content">
                        <h2 className="card-title">Front End Developer</h2>
                        <p className="card-description">I can use Angular and React to develop <br />
                            <span className="highlight">Front End Interfaces</span>
                        </p>
                    </div>
                </div>
                <div className="card animate-scroll-up" style={{ '--animation-delay': '0.3s' }}>
                    <img src="/images/images (1).png" alt="Card Image" className="card-img" />
                    <div className="card-content">
                        <h2 className="card-title">Web Designer</h2>
                        <p className="card-description">I can use CSS and Bootstrap to develop <br />
                            <span className="highlight">Design WebApps</span>
                        </p>
                    </div>
                </div>
                <div className="card animate-scroll-up" style={{ '--animation-delay': '0.5s' }}>
                    <img src="/images/download.png" alt="Image" className="card-img" />
                    <div className="card-content">
                        <h2 className="card-title">Android Development</h2>
                        <p className="card-description">I can use Flutter to develop <br />
                            <span className="highlight">Mobile Apps</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
