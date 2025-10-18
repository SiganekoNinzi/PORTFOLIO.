import React from "react";

function Footer() {
  return (
    <footer className="bg-light text-center text-muted py-3 mt-5 border-top">
      <div className="container">
        <small>
          © {new Date().getFullYear()} Residence Management System | Developed by S.N
        </small>
      </div>
    </footer>
  );
}

export default Footer;
