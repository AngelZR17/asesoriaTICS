import React from "react";
import { Card } from "./card";
import facebook from '../imagenes/facebook.png'
import whatsapp from '../imagenes/whatsapp.png'
import chrome from '../imagenes/chrome.png'

export const Cards3 = () => {
    return(
        <>
        <div className="col-4">
            <Card
            image={facebook}
            title="FACEBOOK"
            description="Aprender a crear una cuenta de facebook"
            link='/facebook'
            />
        </div>
        <div className="col-4">
            <Card
            image={whatsapp}
            title="WHATSAPP"
            description="Aprender a crear una cuenta de whatsapp"
            link='/whatsapp'
            />
        </div>
        <div className="col-4">
            <Card
            image={chrome}
            title="NAVEGADORES"
            description="Aprender a usar un navegador web"
            link='/navegadores'
            />
        </div>
        </>
    );
}