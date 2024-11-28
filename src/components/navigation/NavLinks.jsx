import React from 'react';
import { navigationLinks } from '../../constants/navigation';

export function NavLinks() {
  return (
    <>
      {navigationLinks.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className="text-gray-600 hover:text-purple-600"
        >
          {label}
        </a>
      ))}
    </>
  );
}