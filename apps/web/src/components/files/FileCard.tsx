import { filesApi } from "../../api/files";
import FilePreviewModal from "./FilePreviewModal";
import { useState } from "react";
import { formatBytes } from "../../utils/format";
import { iconForType } from "../../utils/mime";

export default function FileCard({ file }: { file: any }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass" style={{ padding: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <img src={iconForType(file.type)} style={{ width: 24, height: 24 }} />
          <strong>{file.originalName}</strong>
        </div>
        <button onClick={() => filesApi.star(file._id, !file.starred)}>{file.starred ? "★" : "☆"}</button>
      </div>
      <div style={{ color: "var(--muted)" }}>{formatBytes(file.size)}</div>
      <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
        <button className="glass" onClick={() => setOpen(true)}>Preview</button>
        <a className="glass" href={filesApi.downloadUrl(file._id)}>Download</a>
      </div>
      {open && <FilePreviewModal file={file} onClose={() => setOpen(false)} />}
    </div>
  );
}
