export default function FilePreviewModal({ file, onClose }: { file: any; onClose: () => void }) {
  const url = `/api/files/${file._id}/preview`;
  const type = file.type || "application/octet-stream";

  return (
    <div className="glass" style={{ position: "fixed", inset: 0, display: "grid", placeItems: "center", backdropFilter: "blur(6px)" }}>
      <div className="glass" style={{ padding: 16, maxWidth: "90vw", maxHeight: "80vh" }}>
        <button onClick={onClose} style={{ float: "right" }}>Close</button>
        {type.startsWith("image/") && <img src={url} style={{ maxWidth: "80vw", maxHeight: "70vh" }} />}
        {type.startsWith("video/") && <video src={url} controls style={{ maxWidth: "80vw", maxHeight: "70vh" }} />}
        {type === "application/pdf" && <iframe src={url} style={{ width: "80vw", height: "70vh" }} />}
        {type.startsWith("text/") && <iframe src={url} style={{ width: "80vw", height: "70vh" }} />}
      </div>
    </div>
  );
}
