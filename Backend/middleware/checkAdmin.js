const jwt = require('jsonwebtoken');

// Middleware to check if the user is an admin
const checkAdmin = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from Authorization header

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token with your secret
        if (!decoded.isAdmin) {
            return res.status(403).json({ message: 'Access denied, admin only' }); // Deny access if not admin
        }
        req.user = decoded; // Attach the user data to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = checkAdmin;
