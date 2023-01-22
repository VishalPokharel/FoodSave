import Header from '../components/Header';
import "../App.css"
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import MarketPlace from '../components/MarketPlace';
import Donate from '../components/Donate';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Analytics from '../components/Analytics';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/marketplace" element={<MarketPlace />}></Route>
        <Route path="/donate" element={<Donate />}></Route>
        <Route exact path="/analytics" element={<Analytics />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
