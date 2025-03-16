import { Element } from "react-scroll";
import { FaClipboardList, FaProjectDiagram, FaFileAlt, FaListOl, FaUser, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaDollarSign, } from "react-icons/fa";

const CapstoneProject = () => {
    return (
        <Element name="capstone" className="capstone">
            <h2 className="text-4xl font-bold mb-6">Capstone Project</h2>
            <div className="capstone-section">
                <h3 className="text-2xl font-semibold">Project Summary</h3>
                <p className="mb-4">
                    SportsUp is an innovative sports engagement platform that connects players with local matches 
                    and allows fans to discover venues for watching live games. This project focuses on building a 
                    seamless experience for both sports enthusiasts and venue managers.
                </p>
            </div>
            <div className="capstone-section">
                <h3 className="text-2xl font-semibold"><FaListOl /> Project Vision</h3>
                <a href="https://drive.google.com/file/d/1uYZ_ESm15uShUqcb0ghB0Bzdy5b0iIR7/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn">View Project Vision</a>
            </div>
            <div className="capstone-section">
                <h3 className="text-2xl font-semibold">Project/Business Requirements</h3>
                <ul className="list-disc pl-8">
                    <li>Connect sports players and fans with local matches and venues.</li>
                    <li>Provide real-time updates, match schedules, venue promotions, and a way for sports enthusiasts to connect with local businesses.</li>
                    <li>Provide a platform for sports players to find and book local matches and venues.</li>
                </ul>
            </div>
            <div className="capstone-section">
                <h3 className="text-2xl font-semibold"><FaClipboardList /> Project Plan</h3>
                <a href="https://drive.google.com/file/d/1JBpNJRaToqOb1miOAxbExAtyIZya4p8y/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn" >View Project Plan</a>
            </div>
            <div className="capstone-section">
                <h3 className="text-2xl font-semibold"><FaListOl /> Requirements Analysis and Design</h3>
                <a href="https://drive.google.com/file/d/1rHNoIL1R64iMQpvi9eAE1BbIE1WgGEqE/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn">View Requirements Analysis and Design</a>
            </div>
            <div className="capstone-section">
                <h3 className="text-2xl font-semibold"><FaProjectDiagram /> Wireframes/Mockups</h3>
                <a href="https://www.figma.com/design/7P1PdYOOClbAAt6OTmTnso/Sports-Up-IOS?node-id=0-1&p=f" target="_blank" rel="noopener noreferrer" className="btn">View Wireframes</a>
            </div>
            <div className="capstone-section">
                <h3 className="text-2xl font-semibold"><FaClipboardList /> Status Reports</h3>
                <a href="https://drive.google.com/file/d/1ftJNzh-bDlHlUSryLdvFb4xM_1frUd8E/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn">View Status Reports</a>
            </div>
            <div className="capstone-section">
                <h3 className="text-2xl font-semibold">System Implementation</h3>
                <ul className="list-disc pl-8">
                    <li>Developed a full-stack iOS app using supabase, Xcode, and Swift to connect sports players and watchers.</li>
                    <li>Implemented a user-friendly interface with a clean design.</li>
                    <li>Integrated real-time updates, match schedules, venue promotions, and a way for sports enthusiasts to connect with local businesses.</li>
                    <li>Provided a platform for sports players to find and book local matches and venues.</li>
                    <li>Provided a way for sports enthusiasts to connect with local businesses.</li>
                    <li>Provided a way for sports players to find and book local matches and venues.</li>
                </ul>
            </div>
            <div className="capstone-section">
                <h3 className="text-2xl font-semibold">Tech Stack</h3>
                <ul className="list-disc pl-8">
                    <li><strong>Frontend:</strong> Swift (iOS), SwiftUI</li>
                    <li><strong>Backend:</strong> Supabase</li>
                    <li><strong>Database:</strong> Supabase</li>
                    <li><strong>Tools:</strong> Xcode, Figma</li>
                </ul>
            </div>

        </Element>
    );
};

export default CapstoneProject;


