const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('../frontend'));

// Dummy credentials DB
const credentials = {
  "CERT123": { name: "Sample User", course: "Web Development", status: "Verified", issuer: "DCV Gateway" },
  "CERT124": { name: "John Doe", course: "Full Stack", status: "Verified", issuer: "DCV Gateway" }
};

app.post('/api/verify', (req, res) => {
  const { certificateId } = req.body;
  if (credentials[certificateId]) {
    res.json({ success: true, data: credentials[certificateId] });
  } else {
    res.json({ success: false, message: "Invalid Certificate ID" });
  }
});

app.listen(PORT, () => {
  console.log(`Credential Hub running at http://localhost:${PORT}`);
});