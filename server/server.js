const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();
const app = express();
const port = process.env.PORT || 5002;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'attendance',
    port: 3006
});

connection.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to the database');
});

// Login Route
app.post('/api/login', (req, res) => {
    const { userId, password } = req.body;

    connection.query('SELECT * FROM users WHERE user_id = ?', [userId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        if (results.length > 0) {
            const user = results[0];
            if (password === user.password) { // Direct comparison for testing
                const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET,{
                    expiresIn: '1h',
                });
                return res.json({ message: 'Login successful', token, role: user.role });
            } else {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
        } else {
            return res.status(404).json({ message: 'User not found' });
        }
    });
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
