import React from "react";

export default function Experience() {
  return (
    <section id="experience">
      <div className="rounded-xl shadow p-6 bg-white">
        <h2 className="text-2xl font-semibold mb-2">Experience</h2>
        <ul className="space-y-4">
          <li>
            <strong>AgDA, NDSU</strong> – Software Development Intern (Apr 2025 – Present)
            <p>• Designed unified APIs with PostgreSQL and tested using Postman.</p>
          </li>
          <li>
            <strong>CCAST, NDSU</strong> – Software Intern (Jan 2025 – Jun 2025)
            <p>• Deployed drone imaging tools on HPC using Docker and Podman.</p>
          </li>
          <li>
            <strong>GEP, Hyderabad</strong> – Associate Software Engineer (Aug 2023 – Jun 2024)
            <p>• Built migration tool with MEAN stack; led automation testing using Cypress.</p>
          </li>
          <li>
            <strong>DXC Technology</strong> – Software Intern (May 2023 – Aug 2023)
            <p>• Managed Azure VMs and configured network security with Apache.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
