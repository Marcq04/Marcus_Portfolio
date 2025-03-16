import { Element } from "react-scroll";

const AcademicCredentials = () => {
  const credentials = [
    {
      name: "Advanced Diploma in Computer Programming and Analysis",
      institution: "George Brown College",
      date: "September 2022 - April 2025",
    },
    {
      name: "Bachelor of Science in Computer Science",
      institution: "Ontario Tech University",
      date: "September 2025 - April 2027",
    },
  ];

  return (
    <Element name="academic" className="academic">
      <h2 className="academic-title">Academic Credentials</h2>
      <div className="credentials-container">
        {credentials.map((credential) => (
          <div key={credential.name} className="credential-card">
            <h3 className="credential-title">{credential.name}</h3>
            <p className="credential-institution">{credential.institution}</p>
            <p className="credential-date">{credential.date}</p>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default AcademicCredentials;
