import React from 'react';

export function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = 'px-4 py-2 rounded-md transition-colors duration-200';
  const variants = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700',
    outline: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50',
    large: 'px-8 py-3 text-lg'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}