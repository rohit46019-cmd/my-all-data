import { motion } from "framer-motion";
import { useUpload } from "../../hooks/useUpload";

export default function UploadDropzone() {
  const { onFiles } = useUpload();
  return (
    <motion.div
      className="glass"
      style={{ padding: 24, borderStyle: "dashed", borderWidth: 2 }}
      whileHover={{ scale: 1.01 }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        onFiles(files);
      }}
    >
      <p>Drag & drop files here or click to select</p>
      <input type="file" multiple onChange={(e) => onFiles(Array.from(e.target.files || []))} />
    </motion.div>
  );
}
