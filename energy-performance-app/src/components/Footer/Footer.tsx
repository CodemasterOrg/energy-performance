import { useRef, type FC } from "react";
import "./Footer.css";
import { HiLightningBolt } from "react-icons/hi";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openDialog = () => dialogRef.current?.showModal();
  const closeDialog = () => dialogRef.current?.close();

  return (
    <div className="footer">
      <h2 className="footer-title">
        <HiLightningBolt size={18} color="black" />
        <Link
          to="/"
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          Energy Performance
        </Link>
      </h2>
      <button className="contact" onClick={openDialog}>
        Contact us now
      </button>
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

      <dialog ref={dialogRef}>
        <h2>Write to this mail:</h2>
        <br></br>
        <p>hello@energyperformance.com</p>

        <button className="closeDialog" onClick={closeDialog}>
          Luk
        </button>
      </dialog>
    </div>
  );
};

export default Footer;
