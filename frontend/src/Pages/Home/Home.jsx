import Navbar from "../../Component/Navbar";
import ScrollDownIndicator from "../../Component/ScrollDownIndicator";

const Home = () => {
  return (
    <div
    className="w-screen h-screen bg-cover bg-center bg-no-repeat relative"
    style={{ backgroundImage: "url('/assets/pexels-stywo-1054218.jpg')" }}
  >
      <Navbar  />
      <div className="flex flex-col h-[calc(100vh-100px)] items-center justify-center   px-6 text-center  z-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug text-gray-200   px-[10%] ">
          Join us to empower lives, mentor caregivers, and build a supportive community for families battling cancer.
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mt-4 max-w-3xl">
          Together, we can create hope, spread awareness, and ensure no one faces cancer alone.
        </p>
      </div>
    <ScrollDownIndicator/>
    
    </div>
  );
};

export default Home;
