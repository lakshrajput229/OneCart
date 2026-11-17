import React, { createContext, useContext, useEffect, useState } from 'react'
import { authDataContext } from './AuthContext'
import axios from 'axios'

export const adminDataContext = createContext()
function AdminContext({children}) {
    let [adminData,setAdminData] = useState(null)
    let {serverUrl} = useContext(authDataContext)


    
const getAdmin = async () => {
    try {
        const result = await axios.get(
            serverUrl + "/api/user/getadmin",
            { withCredentials: true }
        );

        setAdminData(result.data);
        console.log("Admin Data:", result.data);

        return result.data;

    } catch (error) {
        setAdminData(null);
        console.log("Get Admin Error:", error.response?.data || error.message);

        return null;
    }
};


    useEffect(()=>{
     getAdmin()
    },[])


    let value = {
adminData,setAdminData,getAdmin
    }
  return (
    <div>
<adminDataContext.Provider value={value}>
    {children}
</adminDataContext.Provider>
      
    </div>
  )
}

export default AdminContext