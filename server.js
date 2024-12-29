import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Set up __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// API endpoint to save cheque data
app.post("/api/saveCheque", (req, res) => {
  const { recipient, bank, amount } = req.body;
  const filePath = path.join(__dirname, "data", "outgoing.csv");

  // Format the new data
  const newLine = `${recipient},${bank},${amount}\n`;

  // Append the new data to the CSV file
  fs.appendFile(filePath, newLine, (err) => {
    if (err) {
      console.error("Error writing to file", err);
      return res.status(500).json({ error: "Failed to save data" });
    }
    res.json({ success: true, message: "Data saved successfully" });
  });
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
