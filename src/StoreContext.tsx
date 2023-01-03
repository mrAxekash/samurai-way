import React from "react";
import {StoreStateType} from "./redux/store";

export let StoreContext: any = React.createContext({})

export const ProviderContext = (props: any) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

