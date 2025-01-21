const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const upload = require('../middleware/uploadMiddleware');
const checkAdmin = require('../middleware/checkAdmin');

// @route POST /api/users
// @desc Save user data and uploaded images
router.post('/', upload.array('images', 10), async (req, res) => {
    try {
        const { name, socialHandle } = req.body;
        const imagePaths = req.files.map((file) => `/uploads/${file.filename}`);

        const user = await User.create({
            name,
            socialHandle,
            images: imagePaths,
        });

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @route GET /api/users
// @desc Fetch all user submissions
router.get('/', checkAdmin ,async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
