import type { FC } from "react";
import './Navbar.css'
 import { HiLightningBolt } from "react-icons/hi";
 import { Link } from 'react-router-dom'


interface NavbarProps {
  blueBackground?: boolean;
}

const Navbar: FC<NavbarProps> = ({ blueBackground = false }) => (
  <div className={`navbar ${blueBackground ? 'blue-bg' : ''}`}>
    <h2 className="header-title"><HiLightningBolt size={18} /><Link to="/">Energy Performance</Link></h2>
    <ul className="navItems">
      <li className="item"><Link to="/">Home</Link></li>
      <li className="item"><Link to="/overview">Overview</Link></li>

    </ul>
  </div>
);

export default Navbar;
