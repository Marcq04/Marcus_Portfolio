import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex items-center justify-center">
        <p>Copyright &copy; {new Date().getFullYear()} Marcus Quitiquit</p>
      </div>
    </footer>
  );
};

export default Footer;
