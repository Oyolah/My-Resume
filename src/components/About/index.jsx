import './style.css';
import Me from '../me.jpg';

const About = () => {
  return (
    <div class="about-container">
      <img src={Me} alt="me" />
      <div class="about-text">
        <h1>About Me</h1>
        <p>
          Hello,My name is Oyolah Mustapha. I am a Devolper.If you have asany
          Project or if you want make a software for your bisnes conatact me.I
          make as soon as possibale.You really like my work,if you don't i
          change this until you like I give you seticfaction result. I am a
          Devolper.
        </p>
        <div className="social-links">
          <a href="http://">Let's Talk</a>
          <a href="http://">LinkedIn</a>
          <a href="http://">Github</a>
        </div>
      </div>
    </div>
  );
};

export default About;
