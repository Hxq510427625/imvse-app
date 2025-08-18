import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { slides, tabs, members } from '../data';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState(1);
  const [direction, setDirection] = useState('right');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isTabTransitioning, setIsTabTransitioning] = useState(false);

  const getSlidePosition = (index) => {
    if (index === currentSlide) return 'current';
    if (direction === 'right') {
      return index === (currentSlide - 1 + slides.length) % slides.length ? 'prev' : 'next';
    } else {
      return index === (currentSlide + 1) % slides.length ? 'next' : 'prev';
    }
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection('right');
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection('left');
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  // 自动切换
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [isTransitioning]);

  const handleTabChange = (tabId) => {
    if (tabId === activeTab || isTabTransitioning) return;
    setIsTabTransitioning(true);
    setActiveTab(tabId);
    setTimeout(() => {
      setIsTabTransitioning(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white w-4/5 mx-auto animate-fadeIn">
      {/* 轮播图部分 */}
      <div className="relative w-full h-[600px] overflow-hidden">
        {/* 轮播图片 */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => {
            const position = getSlidePosition(index);
            return (
              <div
                key={slide.id}
                className={`absolute w-full h-full transition-all duration-700 ease-in-out transform ${position === 'current'
                    ? 'translate-x-0 opacity-100 scale-100'
                    : position === 'prev'
                      ? '-translate-x-full opacity-0 scale-95'
                      : 'translate-x-full opacity-0 scale-95'
                  }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div
                    className={`text-center text-white px-4 transform transition-all duration-700 ease-in-out ${position === 'current'
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-8 opacity-0'
                      }`}
                  >
                    <h2 className="text-5xl opacity-70 font-bold mb-4">{slide.title}</h2>
                    <p className="text-xl opacity-70">{slide.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 左右箭头 */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white/50 rounded-full p-3 text-white transition-all duration-300 z-10"
        >
          <FaChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white/50 rounded-full p-3 text-white transition-all duration-300 z-10"
        >
          <FaChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* 标签页部分 */}
      <div className="mx-auto py-16">
        <h2 className="text-6xl font-bold text-gray-900 text-center mb-12">
          About Us
        </h2>
        <div className="">
          <nav className="-mb-px flex space-x-8 justify-center">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`py-4 pb-2 px-1 border-b-2 text-s transition-all duration-300 hover:cursor-pointer ${
                  activeTab === tab.id
                    ? 'border-b-2 border-customOrange text-customOrange font-bold'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </div>
            ))}
          </nav>
        </div>
        <div className="mt-8">
          <div className='flex'>
            <img 
              src={tabs.find(tab => tab.id === activeTab)?.image} 
              alt="" 
              className={`w-1/2 h-[600px] rounded-lg mr-10 object-cover transition-all duration-300 ease-in-out ${
                isTabTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <div className='relative w-1/2'>
              <div className={`transition-all duration-300 ease-in-out ${
                isTabTransitioning ? 'opacity-0' : 'opacity-100'
              }`}>
                <h4 className='text-5xl mb-20 font-bold text-gray-900 mt-5 text-center'>
                  {tabs.find(tab => tab.id === activeTab)?.title}
                </h4>
                <p className='mb-20 text-gray-600 text-lg leading-relaxed'>
                  {tabs.find(tab => tab.id === activeTab)?.content}
                </p>
                <button 
                  className='absolute bottom-20 right-1/2 translate-x-1/2 w-1/3 bg-customBlue text-white px-4 py-2 rounded-full hover:bg-customOrange hover:text-customBlue transition-all duration-300' 
                  onClick={() => {
                    window.location.href = tabs.find(tab => tab.id === activeTab)?.link;
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Members 部分 */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Corporate Members
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg p-6 flex items-center justify-center hover:transition-shadow duration-300"
              >
                <img
                  src={member.logo}
                  alt={member.name}
                  className="max-w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 