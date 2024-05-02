import React from "react";
import { Link } from "react-router-dom";

export const Regresar = () => {
    return(
        <div style={{marginBottom: '20px'}}>
        <Link to='/'>
            <button className="actionback">
                <span aria-hidden="true">←</span>
                Regresar
            </button>
        </Link>
        </div>
    );
}