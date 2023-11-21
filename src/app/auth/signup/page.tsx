// pages/auth/signup.tsx
'use client'
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SignUpPage() {
    const [errorMessage, setErrorMessage] = useState('');
    //const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage('');

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        const tel = event.target.tel.value;

        // Validate password match
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }

        // Add your API call logic here
        // Example: POST request to your signup API endpoint
        // ...

        // if (/* response is OK */) {
        //     router.push('/auth/signin');
        // } else {
        //     setErrorMessage('Failed to sign up');
        // }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="flex w-full max-w-4xl px-40">
                {/* Other components */}
                <div className="flex flex-col justify-center mr-10">
                    <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                        JobFair
                    </h1>
                </div>

                {/* Sign-Up Box */}
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <div className="w-full max-w-md px-6 py-10 bg-white rounded-3xl shadow-md bg-gradient-to-r from-purple-600 to-pink-600">
                        <h2 className="mb-6 text-2xl font-semibold text-center text-white">Sign-Up for JobFair!</h2>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                required
                                className="w-full px-4 py-2 border rounded-full focus:ring focus:ring-purple-300 bg-white"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                className="w-full px-4 py-2 border rounded-full focus:ring focus:ring-purple-300 bg-white"
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                                className="w-full px-4 py-2 border rounded-full focus:ring focus:ring-purple-300 bg-white"
                            />
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                required
                                className="w-full px-4 py-2 border rounded-full focus:ring focus:ring-purple-300 bg-white"
                            />
                            <input
                                type="tel"
                                name="tel"
                                placeholder="Telephone"
                                required
                                className="w-full px-4 py-2 border rounded-full focus:ring focus:ring-purple-300 bg-white"
                            />
                            {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
                            <button
                                type="submit"
                                className="w-full px-6 py-2 text-white text-lg bg-green-500 font-semibold rounded-full hover:bg-green-600 focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                            >
                                Sign Up!
                            </button>
                        </form>
                        <p className="mt-6 text-sm text-center text-white">
                            <a href="/auth/signin" className="text-white hover:underline hover:underline-offset-2"> Already have an account?</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
