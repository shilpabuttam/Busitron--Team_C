import express from "express";
import compression from "compression";

const app = express();
app.use(compression());

app.get("/data", (req, res) => {
  res.json({ message: "Optimized API Response" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
