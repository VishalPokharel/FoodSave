import Header from "../components/Header"
import "../App.css"
import { Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import MarketPlace from "../components/MarketPlace"
import Donate from "../components/Donate"
import SinglePage from "../components/SinglePage"
import Analytics from "../components/Analytics"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/marketplace" element={<MarketPlace />}></Route>
        <Route path="/donate" element={<Donate />}></Route>
        <Route exact path="/analytics" element={<Analytics />}></Route>
        <Route exact path="/singlePage" element={<SinglePage />}></Route>
      </Routes>
    </div>
  )
}

export default App
