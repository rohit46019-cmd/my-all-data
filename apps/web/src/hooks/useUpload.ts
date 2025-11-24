import { useState } from "react";
import { filesApi } from "../api/files";
import { useFilesStore } from "../store/files.store";

export function useUpload() {
  const [progress, setProgress] = useState(0);
  const { addFiles } = useFilesStore();

  async function onFiles(files: File[]) {
    const form = new FormData();
    files.forEach((f) => form.append("files", f));
    const res = await filesApi.upload(form, (p) => setProgress(p));
    addFiles(res.files);
  }

  return { progress, onFiles };
}
