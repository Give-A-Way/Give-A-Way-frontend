import Context from "./Context"
import { useState } from "react"

function ContextProvider({ children }) {
    const [userName, setUserName] = useState(false)
    const [churchData, setChurchData] = useState([])
    const state = {
        userName,
        churchData,
        setUserName,
        setChurchData
    }

    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )
}
export default ContextProvider;