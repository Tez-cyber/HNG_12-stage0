const express = require('express');


const app = express();


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
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});