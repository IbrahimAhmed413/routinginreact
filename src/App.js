import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Contact from "./components/contacts";
import Address from "./components/address";
import Details from "./components/details";
export default function App(){
  return(
    <>
   
      <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="Contact" element={<Contact/>}>
            <Route path="address" element={<Address/>} />
            </Route>
          <Route path="Details/:id" element={<Details/>} /> 
      </Routes>
    </>

  //   <>
  //   {/* <h1>React Router</h1>
  //   <nav>
  //     <Link to="/Home">Home</Link> <br/>
  //     <Link to="/Contact">Contact</Link>
  //   </nav>
  //   <Routes>
  //     <Route path="Home" element={<Home />} />
  //     <Route path="Contact" element={<Contact />} />
  //   </Routes> */}
  // </>
  )
}