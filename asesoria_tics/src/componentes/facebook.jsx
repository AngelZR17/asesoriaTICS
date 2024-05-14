import React, { useEffect } from "react";
import { Regresar } from "./btnRegresar";

export const FACEBOOK = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);    

    return(
        <>
        <div className = 'container'>
            <h2>Como crear una cuenta de Facebook</h2>
        </div>
        <Regresar/>
        </>
    );
}