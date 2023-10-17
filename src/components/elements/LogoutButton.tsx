// LogoutButton.js

import React from 'react';
import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  const handleLogout = () => {
    signOut();
  };

  return (
    <div>
      <button onClick={handleLogout} className="text-sm font-semibold leading-6 text-gray-900">Log out</button>
    </div>
  );
}
