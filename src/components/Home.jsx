



export default function Home() {
    return (
        <section id="home" className="home">
            <div className="home-container">
                <h2 className="home-title">Welcome to My Portfolio</h2>
                <p className="home-description">
                    Hey. My name is Mmakgadi Letsela. I am a budding web developer that enjoys creating beautiful, functional websites.
                    I hope to eventually become a full-stack developer and work on exciting projects that make a difference in the world.
                </p>
                <div className="home-buttons">
                    <a href="#projects" id="projects-btn" className="btn">View Projects</a>
                    <a href="#contact" id="contact-btn" className="btn">Contact Me</a>
                </div>
            </div>
            <div className="home-image">
                <img src="./assets/home-image.png" alt="Home-Image" />
            </div>
        </section>
            
    )
}