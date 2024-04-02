// import React from 'react';
import Header from "./header";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faDiscord, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    const paragraphStyle = {
        fontSize: 'medium',
        fontWeight: 'bold',
        marginTop: '20px',
        textAlign: 'center' as const
      };

    const openFacebook = () => {
        window.open("https://www.facebook.com/yourPageURL", "_blank");
    };

    const openLinkedIn = () => {
        window.open("https://www.linkedin.com/yourProfileURL", "_blank");
    };

    const openDiscord = () => {
        window.open("https://discord.com/yourDiscordServerURL", "_blank");
    };

    return (
        <>
            <Header name="Recipe Finder"/>
            <div className="Home">
                <h2>Welcome to Recipe Finder !</h2>
                <p>Discover thousands of delicious recipes from around the world!</p>
                <p>Whether you're a seasoned chef or just starting out in the kitchen, Recipe Finder has something for everyone. Browse through our collection of appetizers, main courses, desserts, and more to find your next culinary adventure.</p>
                <p>Join our community of food lovers, share your favorite recipes, and connect with fellow cooking enthusiasts. Let's explore the world of flavors together!</p>
                <p style={paragraphStyle}>Below are some website information links</p>
                <div style={{ textAlign: 'center' }}>
                    <button className="facebook-btn" onClick={openFacebook}>
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </button>
                    <button className="facebook-btn" onClick={openLinkedIn}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </button>

                    <button className="facebook-btn" onClick={openDiscord}>
                        <FontAwesomeIcon icon={faDiscord} />
                    </button>
                </div> 
            </div>
        </>
    );
};

export default Home;
