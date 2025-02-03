import { useAuthContext } from "./Context/AuthContext";
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import SignUp from "./Pages/SignUp/SignUp"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SuccessPage from "./Pages/SuccessPage/SuccessPage";
import About from "./Pages/About/About";
import Contact from "./Pages/Contect/Contact";

const App = () => {
  const {authUser}=  useAuthContext()
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path ='/' element={<SuccessPage/>}/>
        <Route path="/Home" element={authUser ?<Home/>: <Login/>}/>
      <Route path="/auth/Login" element={authUser ? <Navigate to ='/' />:<Login/>}/>
      <Route path="/auth/SignUp" element={ authUser ? <Navigate to ='/' />: <SignUp/>}/>
      <Route path ="/About" element = {authUser ?<About/>: <Login/>}/>
      <Route path ="/Contact" element = {authUser ?<Contact/>: <Login/>}/>
      {/**/}
      </Routes>
      
      </BrowserRouter>
    
    </div>
  )
}

export default App 