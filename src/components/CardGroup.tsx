// CardGroup.tsx
import React from 'react';

interface CardGroupProps {
  cols: number;
  children: React.ReactNode;
}

const CardGroup: React.FC<CardGroupProps> = ({ cols, children }) => {
  const groupStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gap: '1rem'
  };

  return <div style={groupStyle}>{children}</div>;
};

export default CardGroup;
