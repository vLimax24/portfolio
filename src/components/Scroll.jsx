import React from 'react';
import { Link } from 'react-scroll';

const Scroll = ({ to, children }) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    offset={-70} // Adjust this offset according to your layout
    duration={500}
  >
    {children}
  </Link>
);

export default Scroll;