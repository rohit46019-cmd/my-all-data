import http from "http";
import { Server } from "socket.io";
import app from "./app.js";
import { initUploadProgress } from "./sockets/uploadProgress.js";
import { connectDB } from "./config/db.js";

const port = process.env.PORT || 8080;

async function bootstrap() {
  await connectDB();
  const server = http.createServer(app);
  const io = new Server(server, {
    cors: { origin: process.env.CLIENT_URL, credentials: true }
  });
  initUploadProgress(io);

  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

bootstrap().catch(err => {
  console.error("Bootstrap error:", err);
  process.exit(1);
});
