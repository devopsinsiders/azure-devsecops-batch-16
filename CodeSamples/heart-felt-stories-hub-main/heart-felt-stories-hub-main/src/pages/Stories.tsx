
import React from 'react';
import Layout from '@/components/Layout';
import { Camera, Heart, Play } from 'lucide-react';

const Stories = () => {
  const stories = [
    {
      id: '1',
      author: 'Emma Wilson',
      avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face',
      preview: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=400&fit=crop',
      timestamp: '2h',
      hasVideo: false,
    },
    {
      id: '2',
      author: 'James Chen',
      avatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face',
      preview: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=400&fit=crop',
      timestamp: '5h',
      hasVideo: true,
    },
  ];

  return (
    <Layout>
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Stories</h1>
          <button className="w-10 h-10 soul-gradient rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
            <Camera className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Your Story */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Camera className="w-6 h-6 text-gray-400" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">+</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Add to your story</h3>
              <p className="text-sm text-gray-500">Share a moment with your circle</p>
            </div>
          </div>
        </div>

        {/* Friends' Stories */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Recent Stories</h2>
          {stories.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <Heart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">No stories yet</h3>
              <p className="text-gray-500">Be the first to share a story with your friends!</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {stories.map((story) => (
                <div key={story.id} className="relative bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
                  <div 
                    className="h-48 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${story.preview})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Author Avatar */}
                    <div className="absolute top-3 left-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 p-0.5 rounded-full">
                        <img 
                          src={story.avatar} 
                          alt={story.author}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Video Indicator */}
                    {story.hasVideo && (
                      <div className="absolute top-3 right-3">
                        <div className="w-8 h-8 bg-black/30 rounded-full flex items-center justify-center">
                          <Play className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    )}

                    {/* Story Info */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-semibold text-sm">{story.author}</h3>
                      <p className="text-white/80 text-xs">{story.timestamp} ago</p>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Stories;
