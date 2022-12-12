import Context from "./Context"
import { useState } from "react"

function ContextProvider({ children }) {
    const [isUserLogedIn, setIsUserLogedIn] = useState(false)
    const [churchData, setChurchData] = useState([])
    const [userData, setUserData] = useState(null)
    const [userDonationsPledge,setUserDonationsPledge] = useState(null)
    const [doNate, setdoNate] = useState(0)
    const state = {
        isUserLogedIn,
        userData,
        churchData,
        setIsUserLogedIn,
        setChurchData,
        setUserData,
        doNate,
        setdoNate,
        userDonationsPledge,
        setUserDonationsPledge
    }
    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )
}
export default ContextProvider;