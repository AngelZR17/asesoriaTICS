import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
    const [tutorialsOpen, setTutorialsOpen] = useState(false);
    const [appsOpen, setAppsOpen] = useState(false);
    const tutorialsDropdownRef = useRef(null);
    const appsDropdownRef = useRef(null);

    const toggleTutorials = () => {
        setTutorialsOpen(!tutorialsOpen);
        setAppsOpen(false);
    }

    const toggleApps = () => {
        setAppsOpen(!appsOpen);
        setTutorialsOpen(false);
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">Inicio</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/conagua' className="nav-link">Términos de TICs</Link>
                        </li>
                        <li className="nav-item dropdown" ref={tutorialsDropdownRef}>
                            <a className="nav-link dropdown-toggle" role="button" aria-expanded={tutorialsOpen ? "true" : "false"} onClick={toggleTutorials}>
                                Tutoriales
                            </a>
                            <ul className={`dropdown-menu ${tutorialsOpen ? "show" : ""}`}>
                                <li>
                                    <Link to='/cfe' className="dropdown-item">CFE</Link>
                                </li>
                                <li>
                                    <Link to='/infinitum' className="dropdown-item">Mercado Libre</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown" ref={appsDropdownRef}>
                            <a className="nav-link dropdown-toggle" role="button" aria-expanded={appsOpen ? "true" : "false"} onClick={toggleApps}>
                                Aplicaciones
                            </a>
                            <ul className={`dropdown-menu ${appsOpen ? "show" : ""}`}>
                                <li>
                                    <Link to='/facebook' className="dropdown-item">Facebook</Link>
                                </li>
                                <li>
                                    <Link to='/whatsapp' className="dropdown-item">Whatsapp</Link>
                                </li>
                                <li>
                                    <Link to='/navegadores' className="dropdown-item">Navegadores</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
