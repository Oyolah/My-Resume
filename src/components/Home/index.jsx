import {Link} from 'react-router-dom';

import './style.css';

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hi,</p>
          <p>I am Oyolah</p>
          <p>Web Developer</p>
        </h1>
        <Link to="about">
          <button>More Info</button>
        </Link>
      </div>
      <div className="person">
        <img src={`${process.env.PUBLIC_URL}/img1..jpg`} alt="person picture" />
      </div>
    </div>
  );
};

export default Home;
