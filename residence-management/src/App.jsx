import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Residences from "./pages/Residences";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout title="Welcome to Residence4You">
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/apply"
          element={
            <MainLayout title="Apply for Residence">
              <Apply />
            </MainLayout>
          }
        />
        <Route
          path="/residences"
          element={
            <MainLayout title="Available Residences" fluid>
              <Residences />
            </MainLayout>
          }
        />
        <Route
          path="/login"
          element={
            <MainLayout title="Login">
              <Login />
            </MainLayout>
          }
        />
        <Route
          path="/admin"
          element={
            <MainLayout title="Admin Dashboard" fluid>
              <AdminDashboard />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
