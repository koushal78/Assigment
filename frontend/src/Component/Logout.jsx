import UseLogout from "../hooks/UseLogout"


function Logout() {
 const{loading,Logout} =  UseLogout()
  return (
    <button 
    onClick={Logout} 
    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300"
>
    Logout
</button>

  )
}

export default Logout