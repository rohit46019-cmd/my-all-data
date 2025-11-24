export default function StorageBar() {
  // Placeholder static
  return (
    <div className="glass" style={{ padding: 12 }}>
      <div className="accent-bar" />
      <div style={{ fontSize: 12, color: "var(--muted)" }}>Used: 1.2 GB / 10 GB</div>
    </div>
  );
}
