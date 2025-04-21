import React from 'react';
import { Icon } from '@iconify/react';

interface IconProps {
  children: string;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

export function ICON({ children, size = 24, color, style }: IconProps) {
  return (
    <span>
      <Icon
        icon={children}
        height={size}
        color={color}
        style={{ verticalAlign: '-0.35em', ...style }}
      />
    </span>
  );
}
