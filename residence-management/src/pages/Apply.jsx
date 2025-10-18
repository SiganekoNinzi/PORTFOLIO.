import React, { useState } from "react";

function Apply() {
  const [form, setForm] = useState({
    studentId: "",
    fullName: "",
    averageMark: "",
    distance: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application submitted:", form);
    alert("Application submitted successfully! (Demo only)");
  };

  return (
    <div className="bg-white p-5 rounded shadow-sm">
      <h2 className="mb-4">Residence Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <label htmlFor="studentId" className="form-label">
              Student ID
            </label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              className="form-control"
              value={form.studentId}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="form-control"
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="averageMark" className="form-label">
              Average Mark (%)
            </label>
            <input
              type="number"
              id="averageMark"
              name="averageMark"
              className="form-control"
              value={form.averageMark}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="distance" className="form-label">
              Distance from Campus (km)
            </label>
            <input
              type="number"
              id="distance"
              name="distance"
              className="form-control"
              value={form.distance}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12">
            <label htmlFor="reason" className="form-label">
              Reason for Request (optional)
            </label>
            <textarea
              id="reason"
              name="reason"
              rows="4"
              className="form-control"
              value={form.reason}
              onChange={handleChange}
              placeholder="Explain why you need on-campus residence..."
            ></textarea>
          </div>
        </div>

        <div className="mt-4">
          <button type="submit" className="btn btn-primary me-3">
            Submit Application
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => setForm({ studentId: "", fullName: "", averageMark: "", distance: "", reason: "" })}
          >
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
}

export default Apply;
