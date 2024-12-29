'use client';
import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [dateTime, setDateTime] = useState<Date | null>(null);

  useEffect(() => {
    // Set the initial date and start the timer once the component is mounted on the client
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Format the date once it's available
  const formattedDate = dateTime
    ? new Intl.DateTimeFormat('en-US', {
        weekday: 'long', // e.g., 'Monday'
        year: 'numeric', // e.g., '2024'
        month: 'long', // e.g., 'December'
        day: 'numeric', // e.g., '19'
        hour: '2-digit', // e.g., '03'
        minute: '2-digit', // e.g., '45'
        second: '2-digit', // e.g., '59'
        hour12: false, // 24-hour clock
      }).format(dateTime)
    : 'Loading...';

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex flex-wrap p-4 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
  <Image
    src="/logo2.jpg"
    alt="Logo"
    width={60}
    height={60}
    
  />
</div>

       
        <nav className="flex flex-1 justify-center space-x-6 h-[50px]  text-lg font-medium">
          <Link href="/home" className="text-black hover:text-gray-600">
            Home
          </Link>
          <Link href="/about" className="text-black hover:text-gray-600">
            About
          </Link>
          <Link href="/blogPage" className="text-black hover:text-gray-600">
            Blog
          </Link>
          <Link href="/contact" className="text-black hover:text-gray-600">
            Contact
          </Link>
        </nav>
      </div>

      {/* Date and Time Section */}
      <div className="bg-gray-100 py-2 text-center">
        <p className="text-lg font-bold text-gray-700">{formattedDate}</p>
      </div>
    </header>
  );
}


