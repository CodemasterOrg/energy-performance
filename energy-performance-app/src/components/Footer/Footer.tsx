import type { FC } from "react";
import "./Footer.css";
import { HiLightningBolt } from "react-icons/hi";
import { Link } from "react-router-dom";

const Footer: FC = () => (
  <div className="footer">
    <h2 className="footer-title">
      <HiLightningBolt size={18} color="black" />
      <Link to="/">Energy Performance</Link>
    </h2>
    <p className="contact">Contact us now</p>
    <ul className="fnavItems">
      <li className="item">
        <Link
          to="/"
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          Home
        </Link>
      </li>
      <li className="item">
        <Link
          to="/overview"
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          Overview
        </Link>
      </li>
    </ul>
  </div>
);

export default Footer;
