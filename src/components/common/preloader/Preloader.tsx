import * as React from 'react';
import img from "../../Users/img/pngtree-user-vector-avatar-png-image_1541962.jpg";
import preloader from "../../../Spinner-2.gif";

type Props = {
};
export const Preloader = (props: Props) => {
    return (
        <>
            <img src={preloader} alt="#"/>
        </>
    );
};