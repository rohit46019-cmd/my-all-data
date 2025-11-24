export default function FolderItem({ folder }: { folder: any }) {
  return (
    <div className="glass" style={{ padding: 12 }}>
      <div style={{ width: 64, height: 48, background: "linear-gradient(135deg,#ff9ff3,#feca57)", borderRadius: 8, boxShadow: "0 8px 30px rgba(0,0,0,0.3)" }} />
      <div style={{ marginTop: 8, fontWeight: 600 }}>{folder.name}</div>
    </div>
  );
}
