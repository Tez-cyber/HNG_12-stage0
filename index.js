const express = require('express');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000;

// ============== MIDDLEWARES
const allowedOrigins = [`http://localhost:${PORT}`, 'https://hng-12-stage0-r0ih.onrender.com/'];
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) === -1) {
            return callback(null, true);
        }
        const msg = 'Go baack!!!!! Origin not allowed by CORS';
        return callback(new Error(msg), false);
        
    }
}));


// ============== ROUTE
app.get('/', (req, res) => {
    // ====== USER DETAILS
    const email = "salamitopeazeez@gmail.com";
    const currentDatetime = new Date().toISOString();
    const githubUrl = 'https://github.com/Tez-cyber/HNG_12-stage0';


    // ======== RESPONSE
    res.status(200).json({
        email: email,
        current_datetime: currentDatetime,
        github_url: githubUrl
    });
})


// ===============
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});