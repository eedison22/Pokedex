import { createContext, useState } from "react";

export const UserNameConext = createContext(null);

export const UserNameProvider = ({ children }) => {
    const [userName, setUserName] = useState(localStorage.getItem("userName") ?? "");

    const saveUserName = (NewUserName) => {
        setUserName(NewUserName);
        localStorage.setItem('userName', NewUserName)
    }

    const removeUserName = () => {
        setUserName('');
        localStorage.removeItem("userName")
    };
    
    const value= { userName, saveUserName, removeUserName }

    return (
        <UserNameConext.Provider value={value}>
            {children}
        </UserNameConext.Provider>
    )
};