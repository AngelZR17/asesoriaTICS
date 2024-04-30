import React from "react";
import LoremIpsum from "react-lorem-ipsum";

export const Ayuda = ({ title }) => {
    return(
        <div class = 'container'>
            <div class="row">
                <h1 className="title">{title}</h1>
            </div>
            <div class="row">
                <div className = 'textcontainer col-8 card'>
                    <p className="card-body desc" style={{ textAlign: 'justify', marginTop: '35px'}}>
                        <LoremIpsum/>
                    </p>
                </div>
            </div>
        </div>
    );
}