import React, { useState } from "react";

import { createContext } from "react";


export const Usercontext = createContext();



const ContextApi = ({ children }) => {
    const [UserData, SetUserdata] = useState('');



    return (<>

        <Usercontext.Provider value={{ UserData, SetUserdata }}>
            {children}

        </Usercontext.Provider>

    </>)


}


export default ContextApi;