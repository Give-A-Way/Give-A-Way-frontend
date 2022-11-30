import Context from "./Context"
import { useState } from "react"

function ContextProvider({ children }) {
    
    const state = {}

    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )
}
export default ContextProvider;