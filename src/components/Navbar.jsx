import React from 'react';
import { Button } from './ui/button';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-5 font-body relative z-50">
      <div className="text-xl font-semibold tracking-tight text-foreground flex items-center gap-1.5">
        <span className="text-xl">✦</span> Nexora
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <a href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</a>
        <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
        <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
        <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        <Button className="rounded-full px-5 text-sm font-medium">Book a demo</Button>
      </div>
    </nav>
  );
}
