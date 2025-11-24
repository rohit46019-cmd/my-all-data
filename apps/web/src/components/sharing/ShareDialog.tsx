import { useState } from "react";
import { shareApi } from "../../api/share";
import QRCode from "qrcode.react";

export default function ShareDialog({ fileId }: { fileId: string }) {
  const [password, setPassword] = useState("");
  const [expiresAt, setExpiresAt] = useState("");
  const [link, setLink] = useState("");

  async function generate() {
    const res = await shareApi.create(fileId, { password, expiresAt });
    const url = `${location.origin}/api/share/d/${res.token}`;
    setLink(url);
  }

  return (
    <div className="glass" style={{ padding: 12 }}>
      <input placeholder="Optional password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="date" value={expiresAt} onChange={(e) => setExpiresAt(e.target.value)} />
      <button className="glass" onClick={generate}>Generate link</button>
      {link && <>
        <input readOnly value={link} />
        <QRCode value={link} size={128} />
      </>}
    </div>
  );
}
