import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";

const AdminDashboard = () => {
  const [applications] = useState([
    { id: 1, name: "Lutho Mkhize", status: "Pending", residence: "Khayelitsha" },
    { id: 2, name: "Amahle Dlamini", status: "Approved", residence: "Langa" },
    { id: 3, name: "Banele Nkosi", status: "Rejected", residence: "Bellville Central" },
  ]);

  return (

      <div className="bg-white p-5 rounded shadow-sm">
        <h2 className="fw-bold text-primary mb-4">Admin Dashboard 🧑‍💼</h2>

        <h5 className="mb-3 fw-semibold">Applications Overview</h5>
        <table className="table table-striped table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Applicant Name</th>
              <th>Residence</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id}>
                <td>{app.id}</td>
                <td>{app.name}</td>
                <td>{app.residence}</td>
                <td>
                  <span
                    className={`badge ${
                      app.status === "Approved"
                        ? "bg-success"
                        : app.status === "Rejected"
                        ? "bg-danger"
                        : "bg-warning text-dark"
                    }`}
                  >
                    {app.status}
                  </span>
                </td>
                <td>
                  <button className="btn btn-sm btn-outline-success me-2">Approve</button>
                  <button className="btn btn-sm btn-outline-danger">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
  );
};

export default AdminDashboard;
