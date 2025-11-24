import dotenv from "dotenv";
dotenv.config();

export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: Number(process.env.PORT || 8080),
  CLIENT_URL: process.env.CLIENT_URL!,
  MONGO_URI: process.env.MONGO_URI!,
  JWT_SECRET: process.env.JWT_SECRET!,
  ENC_SECRET: process.env.ENC_SECRET!, // 32 bytes base64 for AES-256-GCM key
  ENC_IV: process.env.ENC_IV!,         // 12 bytes base64 for AES-GCM IV prefix
  STORAGE_QUOTA_MB: Number(process.env.STORAGE_QUOTA_MB || 10240)
};
