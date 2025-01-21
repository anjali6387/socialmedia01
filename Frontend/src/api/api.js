import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/users';
const API_URL = 'https://socialmedia-backend-imw8.onrender.com/api/users';

export const submitUserData = async (data) => {
    return await axios.post(API_URL, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
};

export const fetchUsers = async () => {
    return await axios.get(API_URL);
};
