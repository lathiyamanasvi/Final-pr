import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider =({children}) =>{

    const [auth , setAuth] = useState({
        user : null
    })

    useEffect(()=>{
        const login = JSON.parse(localStorage.getItem('user'));
        setAuth({
            ...auth,
            user : login
        })
        console.log(login);
    },[])

    return(
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth = () => useContext(AuthContext);
export {useAuth,AuthProvider};