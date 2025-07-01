
import type { FC } from "react";
import './Footer.css'
 import { HiLightningBolt } from "react-icons/hi";


const Footer: FC = () => (
  <div className="footer">
    <h2><HiLightningBolt size={18}/>
Energy Performance</h2>
    <ul className="fnavItems">
      <li className="item">About</li>
      <li className="item">My overview</li>

    </ul>
  </div>
);

export default Footer;
