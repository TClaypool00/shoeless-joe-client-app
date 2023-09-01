import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Pages/Home';
import Register from './components/Pages/Account/Register';
import Login from './components/Pages/Account/Login';
import Navbar from "./components/NavBar/Navbar";


function App() {
  return (
    <>
      <Navbar />
        <BrowserRouter>
          <Routes>
          <Route index element={<Home />} />
          <Route path="account/login" element={<Login />} />
          <Route path="account/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
