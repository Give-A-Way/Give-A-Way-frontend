import Context from "./Context"
import { useState } from "react"

function ContextProvider({ children }) {
    const [userName, setUserName] = useState(false)
    const state = {
        userName,
        setUserName
    }

    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )
}
export default ContextProvider;