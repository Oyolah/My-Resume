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
      </div>
    </div>
  );
};

export default About;
