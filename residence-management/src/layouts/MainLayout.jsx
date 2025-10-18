import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({ children, title }) {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Navbar />
      
      {/* Full-width header */}
      <header className="bg-primary text-white py-3 shadow-sm">
        <div className="container-fluid px-5">
          <h1 className="h4 m-0">{title || "Residence Management System"}</h1>
        </div>
      </header>

      {/* Full-width content area */}
      <main className="flex-grow-1 container-fluid py-4 px-5">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
