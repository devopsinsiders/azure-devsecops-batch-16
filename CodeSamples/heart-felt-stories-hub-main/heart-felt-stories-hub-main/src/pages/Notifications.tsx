
import React from 'react';
import Layout from '@/components/Layout';
import { Bell, Heart, MessageCircle, User } from 'lucide-react';

const Notifications = () => {
  const notifications = [
    {
      id: '1',
      type: 'like',
      user: {
        name: 'Emma Wilson',
        avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face',
      },
      action: 'loved your post',
      content: 'Beautiful sunset from my evening walk...',
      timestamp: '5m ago',
      isRead: false,
    },
    {
      id: '2',
      type: 'comment',
      user: {
        name: 'James Chen',
        avatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face',
      },
      action: 'commented on your post',
      content: 'This looks amazing! Where was this taken?',
      timestamp: '1h ago',
      isRead: false,
    },
    {
      id: '3',
      type: 'friend_request',
      user: {
        name: 'Lisa Parker',
        avatar: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=100&h=100&fit=crop&crop=face',
      },
      action: 'sent you a friend request',
      timestamp: '2h ago',
      isRead: true,
    },
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'like':
        return <Heart className="w-4 h-4 text-pink-500" />;
      case 'comment':
        return <MessageCircle className="w-4 h-4 text-blue-500" />;
      case 'friend_request':
        return <User className="w-4 h-4 text-green-500" />;
      default:
        return <Bell className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <Layout>
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
          <button className="text-blue-600 font-medium hover:text-blue-700">
            Mark all read
          </button>
        </div>

        {/* Notifications */}
        <div className="space-y-2">
          {notifications.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <Bell className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">No notifications</h3>
              <p className="text-gray-500">When people interact with your posts, you'll see it here!</p>
            </div>
          ) : (
            notifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer ${
                  !notification.isRead ? 'ring-2 ring-blue-100' : ''
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className="relative">
                    <img 
                      src={notification.user.avatar} 
                      alt={notification.user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                      {getNotificationIcon(notification.type)}
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-gray-900">{notification.user.name}</span>
                      <span className="text-gray-600">{notification.action}</span>
                      {!notification.isRead && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse-soft"></div>
                      )}
                    </div>
                    
                    {notification.content && (
                      <p className="text-sm text-gray-500 mt-1 truncate">"{notification.content}"</p>
                    )}
                    
                    <p className="text-xs text-gray-400 mt-1">{notification.timestamp}</p>
                  </div>
                  
                  {notification.type === 'friend_request' && (
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                        Accept
                      </button>
                      <button className="px-4 py-2 bg-gray-200 text-gray-700 text-sm rounded-lg hover:bg-gray-300 transition-colors">
                        Decline
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Notifications;
