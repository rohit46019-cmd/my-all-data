import { useEffect, useState } from "react";
import { foldersApi } from "../../api/folders";
import FolderItem from "./FolderItem";

export default function FolderGrid() {
  const [folders, setFolders] = useState<any[]>([]);
  useEffect(() => { foldersApi.list().then(setFolders); }, []);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 12 }}>
      {folders.map((f) => <FolderItem key={f._id} folder={f} />)}
    </div>
  );
}
