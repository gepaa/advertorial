import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Tracking Routes
  app.post("/api/track", (req, res) => {
    try {
      const { event, visitorId } = req.body;
      console.log(`[TRACKING] Event: ${event} | Visitor: ${visitorId}`);

      // Dynamic import to avoid build issues if db.ts isn't fully transpiled yet in some setups
      // but here we use direct import if we update the imports above.
      // For simplicity in this file structure, let's assume we imported db.
      const { db } = require("./db");
      db.addEvent({ event, visitorId });

      res.json({ success: true });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Tracking failed" });
    }
  });

  app.post("/api/lead", (req, res) => {
    try {
      const { email, visitorId } = req.body;
      console.log(`[LEAD] New Lead: ${email}`);

      const { db } = require("./db");
      db.addLead({ email, visitorId });

      res.json({ success: true });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Lead save failed" });
    }
  });

  return app;
}
