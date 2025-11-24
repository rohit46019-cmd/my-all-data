import React, { useState } from "react";

const Settings: React.FC = () => {
  const [storageQuota, setStorageQuota] = useState(10240); // MB
  const [theme, setTheme] = useState("light");

  const handleSave = () => {
    console.log("Settings saved:", { storageQuota, theme });
    alert("Settings updated successfully!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      <div className="space-y-6">
        {/* Storage quota */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Storage Quota (MB)
          </label>
          <input
            type="number"
            value={storageQuota}
            onChange={(e) => setStorageQuota(Number(e.target.value))}
            className="border rounded px-3 py-2 w-40"
          />
        </div>

        {/* Theme selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Theme
          </label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="border rounded px-3 py-2"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
