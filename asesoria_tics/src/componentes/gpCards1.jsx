import React from "react";
import { Card } from "./card";
import terminos from '../imagenes/terminos.jpeg'

export const Cards1 = () => {
    return(
        <>
        <div className="col-4">
            <Card
            image={terminos}
            title="Términos de TICs"
            description="Lista de términos"
            link='/terminos'
            />
        </div>
        </>
    );
}