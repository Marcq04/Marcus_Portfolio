import { Element } from "react-scroll";

const ProfessionalSummary = () => {
  const workSamples = [
    {
      title: "Who Wants to Be a Millionaire Game",
      description: "Developed a Who Wants to Be a Millionaire game using .NET and C#.",
      link: "https://github.com/Marcq04/Who-Wants-to-be-a-Millionaire.git",
    },
    {
      title: "SportsUp - A Sports Meetup App",
      description: "Developed a full-stack iOS app using supabase, Xcode, and Swift to connect sports players and watchers.",
    },
    {
      title: "BMI Calculator",
      description: "Developed a BMI calculator using HTML, CSS, and JavaScript.",
      link: "https://marcq04.github.io/BMI-Calculator/",
    }
  ];

  const volunteerWork = [
    {
      title: "IT Helpdesk",
      organization: "Michael Garron Hospital",
      description: "Provided technical support to patients and staff.",
    },
  ];

  return (
    <Element name="professional" className="professional">
      <h2 className="professional-title">Professional Summary</h2>

      <section className="mb-8">
        <h3 className="section-title">Professional Work Samples</h3>
        <div className="work-list">
          {workSamples.map((sample) => (
            <div key={sample.title} className="work-card">
              <h4 className="work-title">{sample.title}</h4>
              <p className="work-description">{sample.description}</p>
              {sample.link && (
                <a href={sample.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  Learn More
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h3 className="section-title">Volunteer Work</h3>
        <div className="work-list">
          {volunteerWork.map((work) => (
            <div key={work.title} className="work-card">
              <h4 className="work-title">{work.title} at {work.organization}</h4>
              <p className="work-description">{work.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default ProfessionalSummary;

