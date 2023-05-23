import { Outlet } from "react-router-dom"
import NavBar from "../share/NavBar"
import Footer from "../share/Footer"

function Main() {
  return (
    <div>
        <NavBar></NavBar>
         <Outlet></Outlet>
         <Footer></Footer>
    </div>
  )
}

export default Main