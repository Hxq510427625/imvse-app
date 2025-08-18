import { useState } from 'react';
import { modules } from '../data';

export default function Society() {
  const [activeModule, setActiveModule] = useState(modules[0].id);
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
        <p className="text-6xl text-customBlueq font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap tracking-wider">
          The Society
        </p>
        <img src="/imvse-pc/societyBanner.jpg" alt="society" className='w-full h-full object-cover object-[100%_35%]' />
      </div>

      <div className='w-4/5 mx-auto mt-10'>
        {/* Title */}
        <div className="relative mb-10">
          <span className="text-2xl text-white font-bold bg-gradient-to-r from-customBlue to-customPurple px-8 py-4 inline-block ">
            The Society
          </span>
          <div className="w-full h-1 bg-gradient-to-r from-customBlue to-customOrange "></div>
        </div>

        {/* 主体左右布局 */}
        <div className="flex w-full gap-8">
          {/* 左侧：模块标题列表 */}
          <div className="w-1/4 flex flex-col space-y-2">
            {modules.map((module) => (
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
          <div className="w-3/4 bg-white rounded-xl shadow-lg px-10 py-8 min-h-[300px] flex flex-col justify-center transition-all duration-500 overflow-hidden">
            <div className={` ${isTransitioning ? 'animate-slideInRight' : ''}`}>
              <h2 className="text-2xl font-bold text-customBlue mb-4 flex items-center">
                <span className="w-3 h-3 rounded-full bg-customOrange mr-3"></span>
                {modules.find(m => m.id === activeModule)?.title}
              </h2>
              <div className="prose prose-lg text-gray-700 whitespace-pre-line leading-relaxed font-2xl">
                {/* who are we 内容 */}
                {activeModule === 1 && (<p className='leading-relaxed text-lg'>{modules[0].content}</p>)}
                {/* the imvss board 内容 */}
                {activeModule === 2 && (modules[1].content.map((item, i) => (
                  <div key={i} className="mb-4">
                    <h3 className="text-lg font-bold text-customBlue mb-4">{item.title}</h3>
                    {item.paragraph.map((p, i) => (
                      <p key={i} className='leading-relaxed text-lg'><span className="text-customOrange mr-2 text-xl">•</span> {p}</p>
                    ))}
                  </div>
                )))}
                {/* how to join imvss 内容 */}
                {activeModule === 3 && (
                  <div>
                    {modules[2].content.map((item, i) => (
                      <div key={i} className="mb-4">
                        <h3 className="text-lg font-bold text-customBlue mb-4">{item.title}</h3>
                        {item.paragraph.map((p, i) => (
                          <p key={i} className='leading-relaxed text-lg'> {p}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
                {/* constitution 内容 */}
                {activeModule === 4 && (
                  <div>
                    {modules[3].content.map((item, i) => (
                      <div key={i} className="mb-4">
                        <h3 className="text-lg font-bold text-customBlue mb-4">{item.title}</h3>
                        {item.paragraph.map((p, i) => (
                          <p key={i} className='leading-relaxed text-lg'><span className="text-customOrange mr-2 text-xl">•</span> {p}</p>
                        ))}
                      </div>
                    ))}
                    <p className='leading-relaxed text-lg'>{modules[3].Conclusion}</p>
                  </div>

                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}