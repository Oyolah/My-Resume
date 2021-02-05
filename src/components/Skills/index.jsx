import './style.css';
import HTML from './Skills/html-5.svg';
import CSS from './Skills/css3.svg';
import BOOTSTRAP from './Skills/bootstrap-4.svg';
import JAVASCRIPT from './Skills/javascript.svg';
import REACTJS from './Skills/react.svg';
import NODEJS from './Skills/nodejs.svg';

const Skills = () => {
  return (
    <div className="container bd-grid">
      <div className="skill-box">
        <div className="skill-title">
          <div>
            <img src={HTML} alt="" className="skill-icon" />
          </div>
          <h3>HTML5</h3>
        </div>
      </div>
      <div className="skill-box">
        <div className="skill-title">
          <div>
            <img src={CSS} alt="" className="skill-icon" />
          </div>
          <h3>CSS3</h3>
        </div>
      </div>
      <div className="skill-box">
        <div className="skill-title">
          <div>
            <img src={BOOTSTRAP} alt="BOOTSTRAP" className="skill-icon" />
          </div>
          <h3>BOOTSTRAP-5</h3>
        </div>
      </div>
      <div className="skill-box">
        <div className="skill-title">
          <div>
            <img src={JAVASCRIPT} alt="" className="skill-icon" />
          </div>
          <h3>JAVASCRIPT</h3>
        </div>
      </div>
      <div className="skill-box">
        <div className="skill-title">
          <div>
            <img src={REACTJS} alt="" className="skill-icon" />
          </div>
          <h3>REACT JS</h3>
        </div>
      </div>
      <div className="skill-box">
        <div className="skill-title">
          <div>
            <img src={NODEJS} alt="" className="skill-icon" />
          </div>
          <h3>NODE JS</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
