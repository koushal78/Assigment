import { useState } from "react"
import { useAuthContext } from "../Context/AuthContext"
import { Navigate } from "react-router-dom"


const UseLogout =()=>{
    const [loading,setloading] = useState(false)
    const {setAuthUser}= useAuthContext()
    const Logout = async ()=>{
        setloading(true)
        try {
            const res = await fetch("api/auth/logout",{
                method:'POST',
                headers:{"Content-Type":"application/json"}
            });
            const data = await res.json()
            if(data.error){
                alert(data.error)
            }
            localStorage.removeItem("auth-user")
            setAuthUser(null)
            window.location.reload();
        } catch (error) {
            alert(error)
            
        }
        finally{
            setloading(false)
        }
    }
    return {loading, Logout}
}

export default UseLogout