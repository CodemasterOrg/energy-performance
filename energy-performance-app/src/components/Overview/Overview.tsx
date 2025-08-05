import "./Overview.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Table from "../Table/Table";
import Graphs from "../Graphs/Graphs";

function Overview() {
  return (
    <>
      <Navbar blueBackground={true} />
      <h1 className="title">Overview component</h1>
      <Table />
      <Graphs />
      <Footer />
    </>
  );
}

export default Overview;
