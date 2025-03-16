import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="home" smooth={true} duration={500}>Marcus Quitiquit</Link>
      <div className="nav-links">
        <ul>
          <li><Link to="personal" smooth={true} duration={500}>Personal</Link></li>
          <li><Link to="academic" smooth={true} duration={500}>Academics</Link></li>
          <li><Link to="capstone" smooth={true} duration={500}>Capstone</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

