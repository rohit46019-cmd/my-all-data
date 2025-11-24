import client from "./client";

export const filesApi = {
  async list(params?: any) {
    const { data } = await client.get("/files", { params });
    return data;
  },
  async upload(form: FormData, onProgress?: (p: number) => void) {
    const { data } = await client.post("/files/upload", form, {
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress: (evt) => {
        const p = Math.round(((evt.loaded || 0) * 100) / (evt.total || 1));
        onProgress?.(p);
      }
    });
    return data;
  },
  async star(id: string, starred: boolean) {
    const { data } = await client.patch(`/files/${id}/star`, { starred });
    return data;
  },
  async move(id: string, folder?: string) {
    const { data } = await client.patch(`/files/${id}/move`, { folder });
    return data;
  },
  async previewUrl(id: string) {
    return `${client.defaults.baseURL}/files/${id}/preview`;
  },
  async downloadUrl(id: string) {
    return `${client.defaults.baseURL}/files/${id}/download`;
  }
};
