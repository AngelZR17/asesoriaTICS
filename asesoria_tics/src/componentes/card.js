import React from 'react';
import { Link } from "react-router-dom";

export const Card = ({ image, title, description, link }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="content">
        <p className="title">{title}</p>
        <p className="desc">{description}</p>
        <Link to={link}>
          <button className="action">
          Ver guía
          <span aria-hidden="true">→</span>
        </button>
        </Link>
      </div>
    </div>
  );
}