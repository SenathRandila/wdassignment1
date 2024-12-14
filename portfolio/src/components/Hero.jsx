const HeroSection = () =>{
    return <div>
        <main className="hero container">
            <div className="hero-content">
                <h1>Senath Randila Kurukulasooriya</h1>
                <p>
                    My name is Senath,I am a Video Editor and student based in Sri Lanka currently
                    residing in Canada. I have developed many types of videos form well known
                    life coaches to Ecommerce platforms.

                    I'm passionate about cutting-edge,pixel-perfect,beautiful and intuitively
                    edited videos.
                </p>
                <div className="shopping">
                    <p>Available On</p>
                    <div className="brand-icons">
                        <img src="/images/github.png" alt="github-logo" />
                        <img src="/images/linkedin.png" alt="linkedin-logo" />

                    </div>

                </div>
                
            </div>
            <div className="hero-image">
            <img src="/images/hero-img.png" alt="hero-image" />

            </div>
        </main>
    </div>
};

export default HeroSection;