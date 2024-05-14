import React from "react";
import { Card } from "./card";
import cfe from '../imagenes/cfe.png'
import shein from '../imagenes/shein.png'

export const Cards2 = () => {
    return(
        <>
        <div className="col-4">
            <Card
            image={cfe}
            title="CFE"
            description="Aprender a consultar el recibo de la luz "
            link='/cfe'
            />
        </div>
        <div className="col-4">
            <Card
            image={shein}
            title="SHEIN"
            description="Aprender a comprar en linea"
            link='/shein'
            />
        </div>
        </>
    );
}