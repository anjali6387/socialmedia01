

const dotenv = require('dotenv')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const adminRoute =  require('./routes/adminRoute')
dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve uploaded images
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
