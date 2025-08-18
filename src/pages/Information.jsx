import { useState } from 'react';
import { informationSource } from '../data';


export default function Information() {
  const [activeModule, setActiveModule] = useState(informationSource[0].id);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleModuleChange = (moduleId) => {
    if (moduleId === activeModule || isTransitioning) return;
    setIsTransitioning(true);
    setActiveModule(moduleId);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="min-h-screen  mx-auto pb-12 animate-fadeIn">

      <div className='w-full h-80 border-t-4 border-customPurple relative'>
       <p className="text-6xl text-customBlue font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap tracking-wider">
          Information
        </p>
        <img src="/imvse-pc/mockImage.jpg" alt="society" className='w-full h-full object-cover' />
      </div>

      <div className='w-4/5 mx-auto mt-10'>
        {/* Title */}
        <div className="relative mb-10">
          <span className="text-2xl text-white font-bold bg-gradient-to-r from-customBlue to-customPurple px-8 py-4 inline-block ">
            Information
          </span>
          <div className="w-full h-1 bg-gradient-to-r from-customBlue to-customOrange "></div>
        </div>

        {/* 主体左右布局 */}
        <div className="flex w-full gap-8">
          {/* 左侧：模块标题列表 */}
          <div className="w-1/4 flex flex-col space-y-2">
            {informationSource.map((module) => (
              <button
                key={module.id}
                onClick={() => handleModuleChange(module.id)}
                className={`flex items-center px-6 py-4 rounded-lg transition-all duration-300 text-left
                ${activeModule === module.id
                    ? 'bg-gradient-to-r from-customBlue to-customPurple text-white font-bold shadow'
                    : 'bg-white text-gray-900 hover:bg-gray-50'
                  }`}
              >
                <div className={`w-2 h-8 rounded-full mr-4 ${activeModule === module.id ? 'bg-customOrange' : 'bg-gradient-to-b from-customBlue to-customOrange'}`}></div>
                <span>{module.title}</span>
              </button>
            ))}
          </div>

          {/* 右侧：内容展示区 */}
          <div className="w-3/4 bg-white rounded-xl shadow-lg px-10 py-8 min-h-[300px] flex flex-col  transition-all duration-500 overflow-hidden">
              <div className={` ${isTransitioning ? 'animate-slideInRight' : ''}`}>
              <h2 className="text-2xl font-bold text-customBlue mb-4 flex items-center">
                <span className="w-3 h-3 rounded-full bg-customOrange mr-3"></span>
                {informationSource.find(m => m.id === activeModule)?.title}
              </h2>
              <div className="prose prose-lg text-gray-700 whitespace-pre-line leading-relaxed">
                {informationSource.find(m => m.id === activeModule)?.content.split('\n').map((line, i) => (
                  <p key={i} className="mb-4">{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


  //   <div className="flex flex-col justify-center items-center min-h-screen mx-auto bg-gradient-to-br from-customBlue/10 to-customOrange/10 animate-fadeIn">
  //   <div className="flex flex-col items-center gap-6 p-10 rounded-xl shadow-lg bg-white/80 backdrop-blur-md">
  //     <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-customOrange animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  //       <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
  //     </svg>
  //     <span className="text-3xl md:text-4xl text-customOrange font-bold text-center drop-shadow-lg">This page is under construction.<br/>Stay tuned!</span>
  //   </div>
  // </div>
  );
}