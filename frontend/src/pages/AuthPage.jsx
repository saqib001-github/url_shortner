import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const AuthPage = () => {
    const [login, setLogin] = useState(true);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-200/10 to-purple-200/10 rounded-full blur-3xl"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-20 left-20 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-32 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce"></div>
            <div className="absolute bottom-32 left-32 w-3 h-3 bg-gradient-to-r from-pink-400 to-red-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-5 h-5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce"></div>

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                            </svg>
                        </div>
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent ml-4">
                            LinkShrink
                        </h1>
                    </div>
                    <p className="text-gray-600 text-lg">
                        Transform your long URLs into short, powerful links
                    </p>
                </div>

                {/* Auth Form */}
                {login ? <LoginForm state={setLogin} /> : <RegisterForm state={setLogin} />}

                {/* Footer */}
                <div className="mt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        © 2025 LinkShrink. Made with ❤️ for better link management.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
