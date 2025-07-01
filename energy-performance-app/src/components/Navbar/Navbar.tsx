// import React, { FC } from 'react';
// import { HeroWrapper } from './Hero.styled';

import type { FC } from "react";
import './Navbar.css'
 import { HiLightningBolt } from "react-icons/hi";


const Navbar: FC = () => (
  <div className="navbar">
    <h2><HiLightningBolt size={18}/>
Energy Performance</h2>
    <ul className="navItems">
      <li className="item">About</li>
      <li className="item">My overview</li>

    </ul>
  </div>
);

export default Navbar;
