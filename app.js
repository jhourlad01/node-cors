const express = require('express');
const cors = require('cors');
const app = express();

// Enable all CORS requests
app.use(cors());

// Or you can configure CORS with options
// For example, allow requests from a specific origin
/*
app.use(cors({
  origin: 'http://example.com'
}));
*/

// Define your routes
app.get('/', (req, res) => {
  res.send('Hello, CORS enabled!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
