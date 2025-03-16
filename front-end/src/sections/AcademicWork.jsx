import { Element } from 'react-scroll';

const AcademicWork = () => {
  const workExperience = [
    {
      name: 'Research Assistant',
      institution: 'University of Toronto',
      date: 'May 2022 - August 2022',
      description: 'Assisted in conducting experiments and analyzing data for a research project on computer vision.',
    },
    {
      name: 'Teaching Assistant',
      institution: 'University of Toronto',
      date: 'September 2021 - April 2022',
      description: 'Assisted in teaching a course on computer programming and provided individual support to students.',
    },
    {
      name: 'Research Intern',
      institution: 'Microsoft Research',
      date: 'May 2021 - August 2021',
      description: 'Worked on a research project on natural language processing and presented findings to the research team.',
    },
    {
      name: 'Software Engineer',
      institution: 'ABC Company',
      date: 'January 2020 - April 2020',
      description: 'Worked on developing a web application using React and Node.js.',
    },
    {
      name: 'Data Analyst',
      institution: 'XYZ Corporation',
      date: 'May 2019 - August 2019',
      description: 'Analyzed data and created reports for a marketing campaign using Python and Excel.',
    },
  ];

  return (
    <Element name="work" className="work">
      <h2 className="text-3xl font-bold mb-4">Academic Work Experience</h2>
      <ul className="list-disc pl-8">
        {workExperience.map((work) => (
          <li key={work.name}>
            <span className="font-bold">{work.name}</span> at{' '}
            <span className="font-semibold">{work.institution}</span> from{' '}
            <span className="font-light">{work.date}</span>
            <br />
            <span className="text-sm">{work.description}</span>
          </li>
        ))}
      </ul>
    </Element>
  );
};

export default AcademicWork;