import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Apropos from "./Pages/Apropos";
import Logements from "./Pages/Logements";
import Page404 from "./Pages/404";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/apropos" exact element={<Apropos />} />
          <Route path="/logements" exact element={<Logements />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
