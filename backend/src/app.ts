import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// TODO: Import and use routes
// app.use('/api/users', userRoutes);

app.get("/", (_req, res) => {
  res.send("SureGuy API is running");
});

export default app;