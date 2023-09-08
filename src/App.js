import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Pages/Home';
import Register from './components/Pages/Account/Register';
import Navbar from "./components/NavBar/Navbar";


function App() {
  return (
    <>
      <Navbar />
        <div className="container">
          <p id="errorMessage" className="text-danger"></p>
          <p id="successMesage" className="text-success"></p>

          <ul id="ulErrors" className="text-danger"></ul>

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
