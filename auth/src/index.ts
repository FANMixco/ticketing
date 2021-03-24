const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/users/currentuser', (req:any, res:any) => {
    res.send('hey there!');
});

app.listen(3000, () => {
    console.log('Listening on port 3000!');
});

