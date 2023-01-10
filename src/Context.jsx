import { createContext, useState, useEffect } from "react";


const Context = createContext({});

const ContextProvider = ({ children }) => {

    const [users, setUsers] = useState([]);
    const [isAuth, setisAuth] = useState(false);
    const [loginForm, setLoginForm] = useState({});
    const [userLogged, setUserLogged] = useState({});

    const[selectedProgram, setSelectedProgram] = useState({});

    const getUsers = async () => {
        const endPoint = "/users.json";
        const response = await fetch(endPoint);
        const data = await response.json();

        setUsers(data);
        console.log(data);
    }

    useEffect(() => {
        getUsers();
    }, []);

    // función cerrar sesión
    const logOut = () => {
        setisAuth(false)
    
    }

    return (
        <Context.Provider value={{ users, setUsers, isAuth, setisAuth, loginForm, setLoginForm, userLogged, setUserLogged, logOut, selectedProgram, setSelectedProgram}}>
            {children}
        </Context.Provider>
    );
};

export { ContextProvider };
export default Context;