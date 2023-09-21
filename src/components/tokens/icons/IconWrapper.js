import React from 'react';

const sizes = {
  small: '16px',
  medium: '24px',
  large: '32px',
};

const IconWrapper = ({ iconName, size = 'medium', ...props }) => {
  let IconComponent;

  try {
    IconComponent = require(`./icons-individal/${iconName}.js`).default;
  } catch (error) {
    console.warn(`Icon named "${iconName}" not found.`);
    return null;  
  }

  const iconSize = sizes[size];

  return <IconComponent width={iconSize} height={iconSize} {...props} />;
};

export default IconWrapper;