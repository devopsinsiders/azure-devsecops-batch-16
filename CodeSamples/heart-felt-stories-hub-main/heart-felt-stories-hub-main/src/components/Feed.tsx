
import React, { useState } from 'react';
import { Heart, MessageCircle, Bell, Camera, Image } from 'lucide-react';

interface Post {
  id: string;
  author: {
    name: string;
    avatar: string;
    verified?: boolean;
  };
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  isLiked: boolean;
}

const Feed = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      author: { name: 'Sarah Chen', avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face' },
      content: 'Just finished reading an amazing book about human connections. It reminded me how precious our relationships are! 📚✨',
      timestamp: '2 hours ago',
      likes: 24,
      comments: 8,
      isLiked: false,
    },
    {
      id: '2',
      author: { name: 'Alex Thompson', avatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face' },
      content: 'Beautiful sunset from my evening walk. Sometimes the simple moments are the most magical 🌅',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=300&fit=crop',
      timestamp: '4 hours ago',
      likes: 67,
      comments: 12,
      isLiked: true,
    },
  ]);

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isLiked: !post.isLiked, 
            likes: post.isLiked ? post.likes - 1 : post.likes + 1 
          }
        : post
    ));
  };

  const stories = [
    { id: '1', name: 'Your Story', avatar: '', isOwn: true },
    { id: '2', name: 'Emma', avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face' },
    { id: '3', name: 'James', avatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face' },
    { id: '4', name: 'Lisa', avatar: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=100&h=100&fit=crop&crop=face' },
  ];

  return (
    <div className="space-y-6">
      {/* Stories Section */}
      <div className="bg-white rounded-xl shadow-sm p-4 mx-4 mt-4">
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col items-center flex-shrink-0">
              <div className={`relative ${story.isOwn ? 'soul-gradient' : 'bg-gradient-to-br from-pink-400 to-purple-600'} p-1 rounded-full`}>
                {story.isOwn ? (
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <Camera className="w-6 h-6 text-gray-400" />
                  </div>
                ) : (
                  <img 
                    src={story.avatar} 
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                )}
                {story.isOwn && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">+</span>
                  </div>
                )}
              </div>
              <span className="text-xs mt-2 text-gray-600 font-medium">{story.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Create Post */}
      <div className="bg-white rounded-xl shadow-sm p-4 mx-4">
        <div className="flex space-x-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <div className="flex-1">
            <div className="bg-gray-50 rounded-full px-4 py-3 cursor-pointer hover:bg-gray-100 transition-colors">
              <span className="text-gray-500">What's on your mind?</span>
            </div>
            <div className="flex justify-around mt-3 pt-3 border-t border-gray-100">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                <Image className="w-5 h-5 text-green-500" />
                <span className="text-gray-600 font-medium">Photo</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                <Heart className="w-5 h-5 text-pink-500" />
                <span className="text-gray-600 font-medium">Feeling</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Posts */}
      {posts.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-8 mx-4 text-center">
          <Heart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">No posts yet</h3>
          <p className="text-gray-500">Share your first memory and connect with friends!</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl shadow-sm mx-4 hover:shadow-md transition-shadow">
            {/* Post Header */}
            <div className="p-4">
              <div className="flex items-center space-x-3">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                    {post.author.verified && (
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{post.timestamp}</p>
                </div>
              </div>
            </div>

            {/* Post Content */}
            <div className="px-4 pb-3">
              <p className="text-gray-800 leading-relaxed">{post.content}</p>
            </div>

            {/* Post Image */}
            {post.image && (
              <div className="px-4 pb-3">
                <img 
                  src={post.image} 
                  alt="Post content"
                  className="w-full rounded-lg object-cover max-h-80"
                />
              </div>
            )}

            {/* Post Stats */}
            <div className="px-4 py-2 border-t border-gray-100">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{post.likes} people love this</span>
                <span>{post.comments} comments</span>
              </div>
            </div>

            {/* Post Actions */}
            <div className="px-4 py-3 border-t border-gray-100">
              <div className="flex justify-around">
                <button 
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    post.isLiked 
                      ? 'text-pink-600 bg-pink-50' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${post.isLiked ? 'fill-current animate-heart' : ''}`} />
                  <span className="font-medium">Love</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-medium">Comment</span>
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Feed;
