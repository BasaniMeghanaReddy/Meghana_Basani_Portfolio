import React from "react";

export default function Projects() {
  return (
    <section id="projects">
      <div className="rounded-xl shadow p-6 bg-white">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <ul className="space-y-4">
          <li>
            <strong>E-Laundry Services</strong> – Android app connecting users with laundry services. Real-time tracking, notifications, and reviews.
          </li>
          <li>
            <strong>Water Quality Monitoring (ML)</strong> – ML pipeline using RF, SVM, XGBoost for estimating water parameters from satellite data.
          </li>
          <li>
            <strong>Smart Ambulance System</strong> – App for auto-detecting accidents and sending emergency alerts via Firebase & Maps API.
          </li>
        </ul>
      </div>
    </section>
  );
}
