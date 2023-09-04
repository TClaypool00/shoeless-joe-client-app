import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Pages/Home';
import Register from './components/Pages/Account/Register';
import Navbar from "./components/NavBar/Navbar";


function App() {
  return (
    <>
      <Navbar />
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="account/register" element={<Register />} />
            </Routes>
          </BrowserRouter>
        </div>
    </>
  );
}

export default App;
