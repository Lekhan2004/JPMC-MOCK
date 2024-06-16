const { Router } = require("express");
const userApp = Router();

userApp.use((req, res, next) => {
    req.pumpoperater = req.app.get('pumpoperater');
    next();
});

userApp.post('/pumpoperater', (req, res) => {
    const pumps = req.pumpoperater;
    
    res.send("hello");
});

module.exports = userApp;
