// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import Header from './header';

const HomeContent = () => {
  const paragraphStyle = {
    fontSize: 'medium',
    fontWeight: 'bold',
    marginTop: '20px',
    textAlign: 'center' as const
  };

  return (
    <div>
      <Header name = "Recipe Finder"/>
      <p style={paragraphStyle}>Below are some website information links</p>
      <div style={{ textAlign: 'center' }}>
        <a href="https://www.facebook.com/yourPageURL">
          <FontAwesomeIcon icon={faFacebookSquare} style={{ marginRight: '10px' }} />
        </a>
        <a href="https://www.linkedin.com/yourProfileURL">
          <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '10px' }} />
        </a>
        <a href="https://discord.com/yourDiscordServerURL">
          <FontAwesomeIcon icon={faDiscord} />
        </a>
      </div>
    </div>
  );
}

export default HomeContent;
