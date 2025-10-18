// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white text-center py-5 rounded shadow-sm">
        <div className="container-fluid px-5">
          <h1 className="display-5 fw-bold mb-3">Welcome to Residence4You </h1>
          <p className="lead text-muted mb-4">
            Simplifying student accommodation applications and residence
            management for universities and students alike.
          </p>
          <div>
            <Link to="/apply" className="btn btn-primary btn-lg me-3">
              Apply Now
            </Link>
            <Link to="/residences" className="btn btn-outline-primary btn-lg">
              View Residences
            </Link>
          </div>
        </div>
      </section>

      {/* System Highlights */}
      <section className="mt-5">
        <div className="container">
          <h3 className="fw-semibold mb-4 text-center">System Highlights</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 h-100 border rounded shadow-sm bg-white">
                <h5> Student Applications</h5>
                <p className="text-muted">
                  Students can easily submit residence applications online with
                  personal and academic details.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 h-100 border rounded shadow-sm bg-white">
                <h5> Automated Allocation</h5>
                <p className="text-muted">
                  Fair placement of students based on their academic
                  performance and distance from campus.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 h-100 border rounded shadow-sm bg-white">
                <h5> Admin Management</h5>
                <p className="text-muted">
                  Admins can manage residences, monitor capacity, and view
                  application statistics in real-time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mt-5 bg-light py-5 border-top border-bottom">
        <div className="container text-center">
          <h4 className="fw-semibold mb-3">Why Residence4You?</h4>
          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Residence was built to make university accommodation processes
            more transparent, efficient, and fair. With a clean user interface
            and automated placement logic, both students and administrators
            benefit from faster, smarter decision-making.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
