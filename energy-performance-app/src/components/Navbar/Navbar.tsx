import type { FC } from "react";
import './Navbar.css'
 import { HiLightningBolt } from "react-icons/hi";
 import { Link } from 'react-router-dom'



const Navbar: FC = () => (
  <div className="navbar">
    <h2><HiLightningBolt size={18}/>
Energy Performance</h2>
    <ul className="navItems">
      <li className="item"><Link to="/">Home</Link></li>
      <li className="item"><Link to="/overview">Overview</Link></li>

    </ul>
  </div>
);

export default Navbar;
