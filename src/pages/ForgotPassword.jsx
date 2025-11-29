import React, { useState } from 'react';
import { Link } from 'react-router';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../authentication/firebase.init';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleResetPassword = (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        sendPasswordResetEmail(auth, email)
            .then(() => {
                setMessage('Password reset email sent! Check your inbox.');
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-50 py-12 px-4">
            <div className="card bg-white w-full max-w-md shadow-lg">
                <div className="card-body">
                    <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Forgot Password</h2>
                    
                    {message && (
                        <div className="alert alert-success mb-4">
                            <span>{message}</span>
                        </div>
                    )}

                    {error && (
                        <div className="alert alert-error mb-4">
                            <span>{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleResetPassword}>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control mb-4">
                            <button type="submit" className="btn bg-green-600 text-white hover:bg-green-700">
                                Reset Password
                            </button>
                        </div>
                    </form>

                    <p className="text-center mt-4">
                        Remember your password?{' '}
                        <Link to="/login" className="link link-primary font-semibold">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
