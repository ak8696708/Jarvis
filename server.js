// In server.js
app.post('/api/chat', async (req, res) => {
    console.log(`[${new Date().toISOString()}] Chat request from ${req.ip}`);
    console.log(`Message: ${req.body.message.substring(0, 50)}...`);
    
    // ... rest of the code
});