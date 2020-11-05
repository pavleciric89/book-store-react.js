import React from 'react';
import Navbar from "../Navbar/Navbar";
import Searchbar from "../Searchbar/Searchbar";


export default function AppLayout({ children }) {
  return (
    <>
      <Navbar />
      <Searchbar />
      {children}
      <section>footer</section>
    </>
  )
}