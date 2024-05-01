import { Button } from "bootstrap";
import React from "react";
import LoremIpsum from "react-lorem-ipsum";
import { Link } from "react-router-dom";

export const Ayuda = ({ title, description }) => {
    return(
        <div class = 'container'>
            <div class="row">
                <h1 className="title">{title}</h1>
            </div>
            <div class="row">
                <div className = 'textcontainer col-8 card'>
                    <p className="card-body desc" style={{ textAlign: 'justify', marginTop: '35px'}}>
                        {description}
                    </p>
                </div>
            </div>
            <Link to='/'>
                <button>
                    <p>Regresar</p>
                </button>
            </Link>
        </div>
    );
}