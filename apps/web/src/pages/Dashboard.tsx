// apps/web/src/pages/Dashboard.tsx
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {/* Stats section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold">Storage Used</h2>
          <p className="text-gray-600">2.5 GB / 10 GB</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold">Files Uploaded</h2>
          <p className="text-gray-600">120</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold">Active Sessions</h2>
          <p className="text-gray-600">3</p>
        </div>
      </div>

      {/* Recent activity */}
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Uploaded `project-report.pdf`</li>
          <li>Shared `design-mockup.png` with team</li>
          <li>Deleted `old-backup.zip`</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
