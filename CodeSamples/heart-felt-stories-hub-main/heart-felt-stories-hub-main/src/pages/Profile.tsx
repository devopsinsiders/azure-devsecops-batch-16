
import React from 'react';
import Layout from '@/components/Layout';
import { Camera, Heart, MessageCircle, User, Bell } from 'lucide-react';

const Profile = () => {
  const userPosts = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=300&fit=crop',
      likes: 24,
      comments: 8,
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop',
      likes: 67,
      comments: 12,
    },
  ];

  return (
    <Layout>
      <div className="pb-6">
        {/* Cover Photo */}
        <div className="relative h-48 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          <button className="absolute top-4 right-4 w-10 h-10 bg-black/20 rounded-full flex items-center justify-center hover:bg-black/30 transition-colors">
            <Camera className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Profile Info */}
        <div className="relative px-4 -mt-16">
          <div className="flex items-end space-x-4 mb-4">
            <div className="relative">
              <div className="w-24 h-24 bg-white p-1 rounded-full">
                <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-gray-400" />
                </div>
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Camera className="w-4 h-4 text-white" />
              </button>
            </div>
            
            <div className="flex-1 pb-2">
              <h1 className="text-2xl font-bold text-gray-800">Your Name</h1>
              <p className="text-gray-600">Welcome to SoulCircle! ✨</p>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
            <div className="flex justify-around">
              <div className="text-center">
                <div className="text-xl font-bold text-gray-800">156</div>
                <div className="text-sm text-gray-600">Friends</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-gray-800">12</div>
                <div className="text-sm text-gray-600">Posts</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-gray-800">342</div>
                <div className="text-sm text-gray-600">Memories</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 mb-6">
            <button className="flex-1 soul-gradient text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
              Edit Profile
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
              Share Profile
            </button>
          </div>

          {/* About Section */}
          <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">About</h2>
            <div className="space-y-2 text-gray-600">
              <p>📍 Lives in San Francisco, CA</p>
              <p>💼 Works at Amazing Company</p>
              <p>🎂 Born on January 1st</p>
              <p>❤️ In a relationship</p>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Posts</h2>
            {userPosts.length === 0 ? (
              <div className="text-center py-8">
                <Heart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">No posts yet</h3>
                <p className="text-gray-500">Share your first memory!</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {userPosts.map((post) => (
                  <div key={post.id} className="relative group cursor-pointer">
                    <img 
                      src={post.image} 
                      alt="User post"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors rounded-lg flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-4 text-white">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span className="text-sm">{post.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
