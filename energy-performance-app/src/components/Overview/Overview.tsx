import './Overview.css'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Table from '../Table/Table'

function Overview() {
  return (
    <>
    <Navbar blueBackground={true}/>
    <h1>Overview component</h1>
    <Table/>

    <Footer/>
    </>
  )
}

export default Overview
