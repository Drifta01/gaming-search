
'use clint';
import React from "react";
import Link from "next/link";
import './globals.css';



export const Page = () => {
  return (
    <div>
      <h1>Welcome to Gaming Search</h1>
      <Link href="/search">Search</Link>
    </div>
  );

}