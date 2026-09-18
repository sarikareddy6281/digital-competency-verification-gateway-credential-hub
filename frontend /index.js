<!DOCTYPE html>
<html>
<head>
  <title>DCV Gateway - Credential Hub</title>
  <style>
    body { font-family: Arial; text-align: center; padding: 50px; background: #f4f6f8; }
   .card { background: white; padding: 30px; border-radius: 10px; max-width: 400px; margin: auto; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
    input { padding: 10px; width: 80%; margin: 10px 0; }
    button { padding: 10px 20px; background: #0077b5; color: white; border: none; border-radius: 5px; cursor: pointer; }
    #result { margin-top: 20px; }
  </style>
</head>
<body>
  <div class="card">
    <h2>Digital Competency Verification Gateway</h2>
    <p>Credential Hub - Verify Your Certificate</p>
    <input type="text" id="certId" placeholder="Enter Certificate ID e.g. CERT123">
    <br>
    <button onclick="verify()">Verify</button>
    <div id="result"></div>
  </div>
  <script>
    async function verify() {
      const id = document.getElementById('certId').value;
      const res = await fetch('/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ certificateId: id })
      });
      const data = await res.json();
      document.getElementById('result').innerHTML = data.success
       ? `<b style="color:green">✓ Verified</b><br>Name: ${data.data.name}<br>Course: ${data.data.course}`
        : `<b style="color:red">✗ Invalid Certificate</b>`;
    }
  </script>
</body>
</html>