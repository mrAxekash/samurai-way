import * as React from 'react';
import {ComponentType, Suspense} from "react";
import {Preloader} from "../components/common/preloader/Preloader";

type Props = {
    
};
export const WithSuspens = (Component: ComponentType) => {
    return ( (props: any) => {
        return <Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </Suspense>
    }

    );
};