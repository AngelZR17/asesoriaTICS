import React from 'react';

export const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="content">
        <p className="title">{title}</p>
        <p className="desc">{description}</p>
        <a className="action" href="#">
          Ver guía
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}