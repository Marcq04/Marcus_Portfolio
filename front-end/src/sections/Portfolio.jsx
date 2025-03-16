import Navbar from '../components/Navbar';
import Home from './Home';
import PersonalData from './PersonalData';
import AcademicCredentials from './AcademicCredentials';
// import AcademicWork from './AcademicWork';
import ProfessionalSummary from './ProfessionalSummary';
import CapstoneProject from './CapstoneProject';
import ContactForm from './ContactForm';
import Footer from '../components/Footer';

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <Home />
      <PersonalData />
      <AcademicCredentials />
      {/* <AcademicWork /> */}
      <CapstoneProject />
      <ProfessionalSummary />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Portfolio;

