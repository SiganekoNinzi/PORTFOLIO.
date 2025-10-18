import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Residences = () => {
  const [residences, setResidences] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setResidences([
      { id: 1, name: "Khayelitsha Residence", capacity: 120, available: 25, gender: "Male" },
      { id: 2, name: "Langa Residence", capacity: 90, available: 10, gender: "Female" },
      { id: 3, name: "Bellville Central Residence", capacity: 200, available: 45, gender: "Mixed" },
    ]);
  }, []);

  return (
    
      <div className="bg-white p-5 rounded shadow-sm">
        <h2 className="mb-4 text-primary fw-bold">Available Residences 🏘️</h2>
        <div className="row g-4">
          {residences.map((res) => (
            <div className="col-md-4" key={res.id}>
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{res.name}</h5>
                  <p className="card-text mb-1">Capacity: {res.capacity}</p>
                  <p className="card-text mb-1">Available: {res.available}</p>
                  <p className="card-text mb-3">Gender: {res.gender}</p>
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => navigate("/apply")}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
   
  );
};

export default Residences;
