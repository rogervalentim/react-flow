import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

import data from "../constants/data";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <Link to="/">
        <h3>Dashboard</h3>
        </Link>
      </div>
      <div className="dashboard-body">
        {data.linksDashboard.map((link) => (
          <ul key={link}>
            <Link className="link-path" to={link.path}>
            <li>{link.title}</li>
            </Link>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
