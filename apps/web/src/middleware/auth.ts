import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/User.js";

export interface AuthUser {
  _id: string;
  role: "user" | "admin";
}
declare global {
  namespace Express {
    interface Request {
      user?: AuthUser;
    }
  }
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const hdr = req.headers.authorization || "";
  const token = hdr.startsWith("Bearer ") ? hdr.slice(7) : null;
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as AuthUser;
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: "Invalid token" });
  }
}

export function requireAdmin(_req: Request, res: Response, next: NextFunction) {
  if (_req.user?.role !== "admin") return res.status(403).json({ error: "Forbidden" });
  next();
}
