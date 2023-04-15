import HomeFun from "./comments/Home"
import FavListFun from "./comments/FavList";
import NavFun from "./comments/Navbar"
import FooterFun from "./comments/Footer"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
  <>
  <NavFun/>
  <Routes>
    <Route path="/" element={<HomeFun/>}/>

    <Route path="/favourite" element={<FavListFun/>}/>
  </Routes>
  <FooterFun/>
  </>
  );
}

export default App;
