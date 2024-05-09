// Import required modules
const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());   // enables req.body fucntion to work and access the json object..



app.post('/api/login', (req, res) => {
  console.log(req.body);
  res.redirect('http://localhost:4200/dashboard/');
});


app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
