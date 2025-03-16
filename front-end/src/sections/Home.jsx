import { Element } from 'react-scroll';
import profilePic from '../assets/imagejpeg_0.jpg';

const Home = () => {
  return (
    <Element name="home" className="home">
      <img src={profilePic} alt="profile picture" className="rounded-full h-40 w-40 mx-auto mb-4" />
      <h1>Marcus Quitiquit</h1>
      <p>Aspiring Software Developer | Research Enthusiast</p>
    </Element>
  );
};

export default Home;

