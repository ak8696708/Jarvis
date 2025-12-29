// In server.js
   const auth = require('basic-auth');
   
   app.use((req, res, next) => {
     const user = auth(req);
     if (!user || user.name !== 'admin' || user.pass !== 'password') {
       res.set('WWW-Authenticate', 'Basic realm="JARVIS"');
       return res.status(401).send('Unauthorized');
     }
     next();
   });const rateLimit = require('express-rate-limit');
   
   const limiter = rateLimit({
     windowMs: 15 * 60 * 1000, // 15 minutes
     max: 100 // limit each IP to 100 requests per windowMs
   });
   
   app.use('/api/', limiter);app.use(cors({
     origin: 'https://your-domain.com',
     credentials: true
   }));// In server.js
app.post('/api/chat', async (req, res) => {
    console.log(`[${new Date().toISOString()}] Chat request from ${req.ip}`);
    console.log(`Message: ${req.body.message.substring(0, 50)}...`);
    
    // ... rest of the code
});