import type { FC } from "react";
import './Footer.css'
 import { HiLightningBolt } from "react-icons/hi";


const Footer: FC = () => (
  <div className="footer">
    <h2 className="footer-title"><HiLightningBolt size={18} color="black"/>
    Energy Performance</h2>
    <p className="contact">Contact us now</p>
    <ul className="fnavItems">
      <li className="item">About</li>
      <li className="item">My overview</li>

    </ul>
  </div>
);

export default Footer;
