import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="relative h-screen flex flex-col bg-background overflow-hidden text-foreground">
      {/* Background Video Covers Everything */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260329_050842_be71947f-f16e-4a14-810c-06e83d23ddb5.mp4"
        />
        {/* Gradient fade from top white to transparent bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-transparent h-[60vh] pointer-events-none" />
      </div>
      
      {/* Main UI Overlay */}
      <div className="relative z-10 flex flex-col h-full w-full">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
