import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllUserUrls } from '../api/user.api';
import { BASE_URL } from '../utils/base-url.js';

const UserUrl = () => {
  const { data: urls, isLoading, isError, error } = useQuery({
    queryKey: ['userUrls'],
    queryFn: getAllUserUrls,
    refetchInterval: 30000, 
    staleTime: 0,
  });
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (url, id) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto mt-8">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-bounce"></div>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <p className="text-center text-gray-600 mt-4">Loading your URLs...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-6xl mx-auto mt-8">
        <div className="bg-red-50 border-l-4 border-red-400 rounded-xl p-6">
          <div className="flex">
            <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"/>
            </svg>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Error loading URLs</h3>
              <p className="text-sm text-red-700 mt-1">{error.message}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!urls.data || urls.data.length === 0) {
    return (
      <div className="max-w-6xl mx-auto mt-8">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-12">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No URLs Found</h3>
            <p className="text-gray-500 text-lg">You haven't created any shortened URLs yet.</p>
            <p className="text-gray-400 mt-2">Start by shortening your first URL above!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-8 py-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Your Shortened URLs</h2>
              <p className="text-gray-600">Manage and track your shortened links</p>
            </div>
            <div className="ml-auto">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {urls.data.length} {urls.data.length === 1 ? 'URL' : 'URLs'}
              </span>
            </div>
          </div>
        </div>
        
        {/* Table */}
        <div className="overflow-x-auto">
          <div className="max-h-96 overflow-y-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50/80 sticky top-0">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Original URL
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Short URL
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Analytics
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {urls.data.reverse().map((url, index) => (
                  <tr key={url.id} className="hover:bg-gray-50/50 transition-colors duration-150">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                          </svg>
                        </div>
                        <div className="max-w-xs">
                          <div className="text-sm font-medium text-gray-900 truncate">
                            {url.fullUrl}
                          </div>
                          <div className="text-xs text-gray-500">
                            Original Link
                          </div>
                        </div>
                      </div>
                    </td>
                    
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"/>
                          </svg>
                        </div>
                        <div>
                          <a 
                            href={`${BASE_URL}/${url.shortUrl}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-150"
                          >
                            {`${BASE_URL}/${url.shortUrl}`}
                          </a>
                          <div className="text-xs text-gray-500">
                            Shortened Link
                          </div>
                        </div>
                      </div>
                    </td>
                    
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                          </svg>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900">
                            {url.clicks}
                          </div>
                          <div className="text-xs text-gray-500">
                            {url.clicks === 1 ? 'Click' : 'Clicks'}
                          </div>
                        </div>
                      </div>
                    </td>
                    
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleCopy(`${BASE_URL}/${url.shortUrl}`, url.id)}
                        className={`inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                          copiedId === url.id
                            ? 'bg-gradient-to-r from-green-500 to-green-600 text-white focus:ring-green-500'
                            : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 focus:ring-blue-500'
                        }`}
                      >
                        {copiedId === url.id ? (
                          <>
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                            </svg>
                            Copied!
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/>
                            </svg>
                            Copy URL
                          </>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserUrl;
