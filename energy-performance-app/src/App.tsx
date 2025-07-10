import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Overview from './components/Overview/Overview'


function App() {
  return (
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/overview" element={<Overview />} />
      {/* <Route path="*" element={<h1>NOT FOUND 404</h1>}> */}
    </Routes>
  )
}

export default App
