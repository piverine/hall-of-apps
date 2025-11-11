// File: app/components/Header.tsx
'use client'; // This must be a client component

import { UserButton } from "@stackframe/stack";

export default function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
      <h1>My App</h1>
      <UserButton /> {/* <-- THIS IS THE LOGIN/SIGNUP BUTTON */}
    </header>
  );
}