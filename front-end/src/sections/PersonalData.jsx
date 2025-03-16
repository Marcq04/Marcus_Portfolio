import { Element } from "react-scroll";
import { FaFilePdf } from "react-icons/fa";

const PersonalData = () => {
  return (
    <Element name="personal" className="personal">
      <h2 className="about-title">About Me</h2>
      <p className="about-text">
        I am a passionate individual with a strong interest in technology and problem-solving. My goal is to leverage my skills and knowledge to contribute to innovative projects and make a positive impact. 
        I am eager to learn and grow in this ever-evolving field and excited to apply my expertise to real-world challenges.
      </p>

      <div className="info-container">
        {/* Resume Section */}
        <div className="info-card">
          <h3 className="text-2xl font-semibold">Resume</h3>
          <a
            href="https://drive.google.com/file/d/1HcgykCagO0Qlq8Sok-SF3pOLHwlkWCjq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <FaFilePdf className="icon" /> View Resume
          </a>
        </div>

        {/* Cover Letter Section */}
        <div className="info-card">
          <h3 className="text-2xl font-semibold">Cover Letter</h3>
          <a
            href="https://drive.google.com/file/d/10rBJtOyh_ZuxJR8s8EGRbR--FqKwqhJw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <FaFilePdf className="icon" /> View Cover Letter
          </a>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="philosophy">
        <h3 className="text-2xl font-semibold">Philosophy</h3>
        <p className="italic text-lg">"The best way to predict the future is to create it." - Abraham Lincoln</p>
      </div>
    </Element>
  );
};

export default PersonalData;
