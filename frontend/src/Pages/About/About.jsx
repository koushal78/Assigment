
import Logout from "../../Component/Logout"
import Navbar from "../../Component/Navbar"

const About = () => {
  return (
    <div>
        
        <div>
        <div
  className="w-screen h-screen bg-cover bg-center bg-no-repeat relative"
  style={{ backgroundImage: "url('/assets/pexels-stywo-1054218.jpg')" }}
>
         <Navbar  />
         <div className="flex flex-col h-[calc(100vh-100px)] items-center justify-center   px-6 text-center  z-0">
           <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug text-gray-200   px-[10%] ">
             Working...
           </h1>
             <div>
                <Logout/>
             </div>
         </div>
      
       
       </div>
     
    </div>
    </div>
  )
}

export default About