import React from 'react';
import UrlForm from '../components/UrlForm';
import UserUrl from '../components/UserUrl';
import { useSelector } from 'react-redux';

const DashboardPage = () => {
    const { user } = useSelector((state) => state.auth);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-br from-green-200/5 to-blue-200/5 rounded-full blur-3xl"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-32 left-16 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
            <div className="absolute top-48 right-24 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce"></div>
            <div className="absolute bottom-40 left-24 w-2 h-2 bg-gradient-to-r from-pink-400 to-red-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-32 right-16 w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce"></div>

            {/* Main content */}
            <div className="relative z-10 min-h-screen py-8 px-4">
                {/* Header */}
                <div className="max-w-6xl mx-auto mb-8">
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                                </svg>
                            </div>
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent ml-3">
                                Dashboard
                            </h1>
                        </div>
                        <p className="text-gray-600 text-lg">
                            Welcome back, {user?.name || 'User'}! Manage your shortened URLs
                        </p>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="max-w-6xl mx-auto mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-6">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600">Total Links</p>
                                    <p className="text-2xl font-bold text-gray-900">Active</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-6">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600">Total Clicks</p>
                                    <p className="text-2xl font-bold text-gray-900">Tracking</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-6">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600">Performance</p>
                                    <p className="text-2xl font-bold text-gray-900">Growing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* URL Form */}
                <div className="max-w-6xl mx-auto mb-8">
                    <UrlForm />
                </div>

                {/* User URLs */}
                <div className="max-w-6xl mx-auto">
                    <UserUrl />
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
