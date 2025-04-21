import React from 'react';
import './Card.css';

interface CardProps {
  title: string;
  href: string;
  icon: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, href, icon, children }) => {
  return (
    <div className="card">
      <a href={href}>
        <img src={icon} alt={`${title} icon`} />
        <h3>{title}</h3>
        <p>{children}</p>
      </a>
    </div>
  );
};

export default Card;
