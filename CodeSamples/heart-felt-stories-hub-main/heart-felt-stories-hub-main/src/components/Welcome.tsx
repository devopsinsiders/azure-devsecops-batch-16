
import React, { useState } from 'react';
import { Heart, Users, MessageCircle, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WelcomeProps {
  onGetStarted: () => void;
}

const Welcome = ({ onGetStarted }: WelcomeProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: Heart,
      title: "Welcome to SoulCircle",
      description: "Connect with friends and family in a warm, meaningful way",
      color: "from-pink-400 to-red-400"
    },
    {
      icon: Users,
      title: "Build Real Connections",
      description: "Share moments, express feelings, and strengthen relationships",
      color: "from-blue-400 to-purple-400"
    },
    {
      icon: MessageCircle,
      title: "Stay in Touch",
      description: "Chat, react, and engage with the people who matter most",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: Camera,
      title: "Share Your Story",
      description: "Capture and share the beautiful moments of your life",
      color: "from-green-400 to-blue-400"
    }
  ];

  const features = [
    { icon: '💫', title: 'Stories', desc: '24-hour moments' },
    { icon: '💬', title: 'Messages', desc: 'Private chats' },
    { icon: '❤️', title: 'Reactions', desc: 'Express yourself' },
    { icon: '👥', title: 'Groups', desc: 'Connect together' },
  ];

  const currentSlideData = slides[currentSlide];
  const Icon = currentSlideData.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 soul-gradient rounded-full flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold soul-text-gradient">SoulCircle</span>
        </div>
        <button 
          onClick={onGetStarted}
          className="text-gray-500 hover:text-gray-700 font-medium"
        >
          Skip
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        {/* Slide Indicator */}
        <div className="flex space-x-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-blue-500 w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Icon with Gradient Background */}
        <div className={`w-24 h-24 bg-gradient-to-r ${currentSlideData.color} rounded-full flex items-center justify-center mb-8 animate-float`}>
          <Icon className="w-12 h-12 text-white" />
        </div>

        {/* Content */}
        <div className="text-center mb-12 max-w-sm">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {currentSlideData.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {currentSlideData.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-4 mb-12 max-w-sm w-full">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/80 transition-colors">
              <div className="text-2xl mb-2">{feature.icon}</div>
              <h3 className="font-semibold text-gray-800 text-sm">{feature.title}</h3>
              <p className="text-xs text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="p-6 space-y-4">
        {currentSlide < slides.length - 1 ? (
          <>
            <Button 
              onClick={() => setCurrentSlide(currentSlide + 1)}
              className="w-full soul-gradient text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Next
            </Button>
            <div className="flex justify-center space-x-4">
              {currentSlide > 0 && (
                <button 
                  onClick={() => setCurrentSlide(currentSlide - 1)}
                  className="text-gray-500 hover:text-gray-700 font-medium"
                >
                  Previous
                </button>
              )}
            </div>
          </>
        ) : (
          <Button 
            onClick={onGetStarted}
            className="w-full soul-gradient text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started
          </Button>
        )}
      </div>
    </div>
  );
};

export default Welcome;
