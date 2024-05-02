import React from "react";
import { Card } from "./card";
import cfe from '../imagenes/cfe.png'
import mercado from '../imagenes/mercado-libre.png'

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
            image={mercado}
            title="MERCADO LIBRE"
            description="Aprender a comprar en linea"
            link='/mercado'
            />
        </div>
        </>
    );
}