import './style.css';
import Me from '../me.jpg';

const About = () => {
  return (
    <div class="about-container">
      <img src={Me} alt="me" />
      <div class="about-text">
        <h1>About Me</h1>
        <p>
          I am extremely motivated to constantly develop my skills and grow
          professionally. I am confident in my ability to come up with
          interesting ideas for unforgettable marketing campaigns.
        </p>
        <div className="social-links">
          <a to="https://www.linkedin.com/in/oyolah-mustapha-kamara-898252140/">
            Let's Talk
          </a>
          <a to="https://www.linkedin.com/in/oyolah-mustapha-kamara-898252140/">
            LinkedIn
          </a>
          <a to="https://github.com/Oyolah">Github</a>
        </div>
      </div>
    </div>
  );
};

export default About;
