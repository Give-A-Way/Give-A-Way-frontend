import Context from "./Context"
import { useState } from "react"

function ContextProvider({ children }) {
    const [isUserLogedIn, setIsUserLogedIn] = useState(false)
    const [churchData, setChurchData] = useState([])
    const [userData, setUserData] = useState(null)
    const state = {
        isUserLogedIn,
        userData,
        churchData,
        setIsUserLogedIn,
        setChurchData,
        setUserData
    }
    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )
}
export default ContextProvider;