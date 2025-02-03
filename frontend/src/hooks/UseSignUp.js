import { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";

const UseSignUp = () => {
    const [loading ,setloading] = useState(false)
    const {setAuthUser}= useAuthContext()
  
    const Signup = async ({fullname,username,password,confirmpassword,gender})=>{
        const success = handleInputError({fullname,username,password,confirmpassword,gender});
        if(!success) return;
        setloading(true);
        try {
            const res = await fetch("/api/auth/signup",{
                method:'POST',
                headers:{"Content-Type": "application/json" },
                body:JSON.stringify({fullname,username,password,confirmpassword,gender})
            })
        const data = await res.json()
        if(data.error){
            alert(data.error)
        }
        //localstorage

        // localStorage.setItem("auth-user", JSON.stringify(data));
        // setAuthUser(data);
        // console.log("Signup Success:", data);

        localStorage.setItem("auth-user",JSON.stringify(data))
        setAuthUser(data)
        console.log(data)



        } catch (error) {
            alert(error)
        }
      finally{
        setloading(false)

      }
      
    }
    return {loading,Signup}
}

export default UseSignUp

const handleInputError = ({fullname,username,password,confirmpassword,gender})=>{
    if(!fullname || !username || !password || !confirmpassword || !gender){
        alert("please fill all the fields")
        return false;

    }
    if(password !== confirmpassword){
        alert("cofirmpassword and password not match");
        return false;
    }
    if(password.length<8){
        alert("password length must be greater the 8");
        return false;
    }
return true;
}