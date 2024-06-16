const { Router } = require("express");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = Router();

auth.use((req, res, next) => {
    req.users = req.app.get('users');
    next();
});

auth.get('/data',(req,res)=>{
  res.send("This is test Data2222")
})

auth.post("/signup", async (req, res) => {
    const { userType, userId, password } = req.body;
    const users = req.users;

    try {
        const existingUser = await users.findOne({ userId: userId });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await users.insertOne({ userType, userId, password: hashedPassword });

        res.status(201).json({
            message: "User created successfully",
            user: result.insertedId,
        });
    } catch (error) {
        console.error("Signup error", error);
        res.status(500).json({ message: "Failed to register user" });
    }
});

auth.post("/login", async (req, res) => {
    const { userId, password } = req.body;
    const users = req.users;
    try {
        const dbuser = await users.findOne({ userId: userId });
        if (!dbuser) {
            return res.status(400).json({ message: "Invalid username" });
        }

        const isPasswordValid = await bcrypt.compare(password, dbuser.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = jwt.sign({ userId: dbuser.userId }, "secretkey", { expiresIn: "1d" });
        res.json({
            message: "Login successful",
            token,
            userType: dbuser.userType,
            userId:dbuser.userId
        });
    } catch (error) {
        console.error("Login error", error);
        res.status(500).json({ message: "Failed to login" });
    }
});


module.exports = auth;

