import React from 'react';
import UrlForm from '../components/UrlForm';

const HomePage = () => {
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
                {/* Hero Section */}
                <div className="text-center mb-12 max-w-4xl">
                    <div className="flex items-center justify-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                            </svg>
                        </div>
                    </div>
                    
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                        LinkShrink
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed">
                        Transform your long URLs into short, powerful links
                    </p>
                    
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Create shorter, more manageable links that are perfect for sharing on social media, 
                        emails, and anywhere else you need clean, professional URLs.
                    </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Lightning Fast</h3>
                        <p className="text-gray-600">Instantly shorten your URLs with our high-performance platform</p>
                    </div>
                    
                    <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">100% Reliable</h3>
                        <p className="text-gray-600">Your links will always work with our 99.9% uptime guarantee</p>
                    </div>
                    
                    <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Analytics Ready</h3>
                        <p className="text-gray-600">Track clicks and performance with detailed analytics</p>
                    </div>
                </div>

                {/* URL Form */}
                <div className="w-full max-w-2xl">
                    <UrlForm />
                </div>

                {/* CTA Section */}
                <div className="text-center mt-12 max-w-2xl">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Ready to get started?
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Join thousands of users who trust LinkShrink for their URL shortening needs.
                        Create an account to unlock advanced features and analytics.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/auth"
                            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Sign Up Free
                        </a>
                        <a
                            href="/auth"
                            className="bg-white/80 backdrop-blur-lg border border-gray-200 hover:bg-white text-gray-800 font-semibold py-3 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-16 text-center">
                    <p className="text-gray-500 text-sm">
                        © 2025 LinkShrink. Made with ❤️ for better link management.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
