import { useState } from "react";

export default function SearchBar() {
  const [q, setQ] = useState("");
  return (
    <input
      className="glass"
      style={{ padding: "6px 12px", width: 300 }}
      placeholder="Search files, folders, notes"
      value={q}
      onChange={(e) => setQ(e.target.value)}
    />
  );
}
