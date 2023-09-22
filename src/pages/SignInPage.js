import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";

function SigninPage() {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">Sign In</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="form-input mt-1 block w-full rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 font-medium"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="form-input mt-1 block w-full rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <button
                            onClick={() => loginWithRedirect()}
                            type="submit"
                            className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
                <p className="text-gray-600 text-center">
                    Don't have an account?{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
}

export default SigninPage;