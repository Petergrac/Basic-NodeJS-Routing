// index.cjs
const express = require('express');
const path = require('path'); // Required for handling file paths

const app = express();
const port = 3000; // You can choose any available port

// Serve static files from the current directory (where your HTML files are)
// This is crucial for serving your HTML files as well as any CSS/JS/images
// that might be linked in your HTML.
app.use(express.static(path.join(__dirname)));

// Route for the home page
app.get('/', (req, res) => {
    // __dirname is the current directory where index.cjs resides
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for the about page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

// Route for the contacts page
app.get('/contacts', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact-me.html'));
});
// 404 handler (should always be placed after all specific routes)
app.all('*', (req, res) => {
  // Set the status to 404
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});
// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Open http://localhost:${port}/about for the about page`);
    console.log(`Open http://localhost:${port}/contacts for the contacts page`);
});