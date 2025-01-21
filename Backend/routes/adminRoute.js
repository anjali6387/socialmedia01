const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/adminModel'); // Import Admin model

// Admin registration route
router.post('/register', async (req, res) => {
    const { username, password, isAdmin } = req.body;

    try {
        // Check if admin already exists
        const existingAdmin = await Admin.findOne({ username });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Admin already exists!' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new admin
        const newAdmin = await Admin.create({ username, password: hashedPassword, isAdmin: isAdmin || false });

        res.status(201).json({
            message: 'Admin registered successfully!',
            admin: { id: newAdmin._id, username: newAdmin.username, isAdmin:newAdmin.isAdmin },
        });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Server error during registration' });
    }
});

// Admin login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if admin exists
        const admin = await Admin.findOne({ username });
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found!' });
        }

        // Compare the password
        const isPasswordValid = await bcrypt.compare(password, admin.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials!' });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { 
                id: admin._id, 
                username: admin.username, 
                isAdmin: admin.isAdmin // Include the isAdmin field in the token payload
            },
            process.env.JWT_SECRET, // Use an environment variable for the secret
            { expiresIn: '1h' } // Set token expiration time
        );
        

        res.status(200).json({
            message: 'Login successful!',
            token,
            admin: { id: admin._id, username: admin.username },
        });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error during login' });
    }
});

// Export the router
module.exports = router;
