import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('adminToken');
    
        if (!token) {
          setError('You are not authorized to view this page.');
          setLoading(false);
          return;
        }
        // Make the API request to fetch users
        const response = await axios.get('https://socialmedia-backend-imw8.onrender.com/api/users', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        });

        // If successful, set the users state
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch users. Please try again.');
        setLoading(false);
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container-fluid bg-dark py-5">
      <div className="container">
        <h2 className="text-center mb-5 text-light">Admin Dashboard</h2>
        {loading && <p className="text-center text-light">Loading...</p>}
        {error && <p className="text-center text-danger">{error}</p>}

        <div className="row">
          {users.length === 0 ? (
            <div className="col-12">
              <p className="text-center text-muted">No users found.</p>
            </div>
          ) : (
            users.map((user) => (
              <div className="col-md-4 mb-4" key={user._id}>
                <div className="card border-0 shadow-lg rounded-4 bg-secondary text-light">
                  <div className="card-body">
                    <h5 className="card-title text-center text-warning">{user.name}</h5>
                    <p className="card-text text-muted">
                      <strong>Social Media Handle:</strong> {user.socialHandle}
                    </p>
                    <div className="text-center">
                      <strong>Uploaded Images:</strong>
                      <div className="d-flex justify-content-center flex-wrap mt-3">
                        {user.images.map((image, index) => (
                          <div key={index} className="m-2">
                            <a
                              href={`https://socialmedia-backend-imw8.onrender.com${image}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="d-block"
                            >
                              <img
                                src={`https://socialmedia-backend-imw8.onrender.com${image}`}
                                alt={`User Upload ${index}`}
                                className="img-thumbnail rounded-lg"
                                style={{
                                  width: '120px',
                                  height: '120px',
                                  objectFit: 'cover',
                                  transition: 'transform 0.3s ease',
                                  border: '2px solid #ffffff',
                                }}
                              />
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
