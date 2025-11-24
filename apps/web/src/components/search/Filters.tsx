export default function Filters({ onChange }: { onChange: (p: any) => void }) {
  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
      <select className="glass" onChange={(e) => onChange({ sort: e.target.value })}>
        <option value="createdAt-desc">Newest</option>
        <option value="createdAt-asc">Oldest</option>
        <option value="size-desc">Size desc</option>
        <option value="size-asc">Size asc</option>
      </select>
      <select className="glass" onChange={(e) => onChange({ type: e.target.value })}>
        <option value="">All types</option>
        <option value="application/pdf">PDF</option>
        <option value="image/png">Image</option>
        <option value="video/mp4">Video</option>
        <option value="application/zip">ZIP</option>
        <option value="audio/mpeg">Audio</option>
        <option value="text/plain">Text</option>
      </select>
    </div>
  );
}
