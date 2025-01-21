import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { submitUserData } from '../api/api';

const UserForm = () => {
    const [name, setName] = useState('');
    const [socialHandle, setSocialHandle] = useState('');
    const [images, setImages] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('socialHandle', socialHandle);
        images.forEach((image) => formData.append('images', image));

        await submitUserData(formData);
        alert('Submission successful!');
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">User Submission Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="socialHandle" className="form-label">Social Media Handle:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="socialHandle"
                        value={socialHandle}
                        onChange={(e) => setSocialHandle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="images" className="form-label">Upload Images:</label>
                    <input
                        type="file"
                        className="form-control"
                        id="images"
                        multiple
                        onChange={(e) => setImages([...e.target.files])}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
        </div>
    );
};

export default UserForm;
