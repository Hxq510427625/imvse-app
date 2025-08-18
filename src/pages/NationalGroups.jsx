import { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { nationalGroups } from '../data';

export default function NationalGroups() {
  const [selectedContinent, setSelectedContinent] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleContinentClick = (continent) => {
    setSelectedContinent(selectedContinent === continent ? null : continent);
    setSelectedCountry(null); // 关闭已展开的国家
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(selectedCountry === country ? null : country);
  };

  return (
    <div className="min-h-screen mx-auto pb-12 animate-fadeIn">
      <div className='w-full h-80 border-t-4 border-customPurple relative'>
        <p className="text-6xl text-customBlue font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap tracking-wider">
          National Groups
        </p>
        <img src="/imvse-pc/nationalBanner.jpg" alt="national groups" className='w-full h-full object-cover object-[100%_80%]' />
      </div>

      <div className='w-4/5 mx-auto mt-10'>
        {/* Title */}
        <div className="relative mb-10">
          <span className="text-2xl text-white font-bold bg-gradient-to-r from-customBlue to-customPurple px-8 py-4 inline-block">
            Our Members
          </span>
          <div className="w-full h-1 bg-gradient-to-r from-customBlue to-customOrange"></div>
        </div>

        {/* Content */}
        {nationalGroups.map(continent => (
          <div key={continent.continent} className="my-4">
            {/* 大洲标题 */}
            <div
              onClick={() => handleContinentClick(continent.continent)}
              className={`w-full flex justify-between items-center  px-4 py-2 rounded-lg shadow-md hover:bg-customOrange transition-colors hover:cursor-pointer ${selectedContinent === continent.continent ? 'text-customBlue bg-customOrange' : 'bg-customBlue text-white'}`}
            >
              <span className={`text-2xl font-bold `}>· {continent.continent}</span>
              <span>{selectedContinent === continent.continent ? "▲" : "▼"}</span>
            </div>
            {/* 国家列表 */}
            <div
              className={`pl-2 transition-all duration-100 overflow-hidden ${selectedContinent === continent.continent
                ? "max-h-[2000px]"
                : "max-h-0"
                }`}
            >
              {continent.countries.map((group) => (
                <div key={group.country} className={`relative my-3 bg-gradient-to-r from-customBlue to-gray-200 rounded-xl p-6 flex  items-center overflow-hidden hover:cursor-pointer hover:shadow-2xl group transition-all duration-300 ${selectedCountry === group.country ? 'justify-center h-full' : 'justify-between min-h-[50px] '}`} onClick={() => handleCountryClick(group.country)}>
                  {/* country */}
                  <h2 className={`absolute ${selectedCountry === group.country ? 'z-10 opacity-15 text-8xl tracking-widest font-bold text-customOrange' : 'text-xl tracking-widest font-bold text-white group-hover:text-customOrange'}`}>{group.country}</h2>
                  {/* arrow */}
                  <div className={`absolute right-0 transform translate-x-full flex items-center justify-center text-bold  ${selectedCountry === group.country ? '' : 'group-hover:translate-x-0 transition-transform duration-500'}`}>
                    <MdOutlineKeyboardDoubleArrowLeft className='text-xl text-customOrange mr-2' />
                    <span className='text-xl text-customOrange'>Touch to show more</span>
                  </div>
                  {/* content */}
                  <div className={`transform flex items-center justify-center text-bold transition-transform duration-500 ${selectedCountry === group.country ? 'translate-x-0 h-full' : 'translate-x-full h-0'}`}>
                    {/* 成员卡片网格 */}
                    {group.members.map((member) => (
                      <div
                        key={member.id}
                        className="flex w-1/2 ml-10 group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform "
                      >
                        {/* 左侧照片 */}
                        <div className="w-1/2 relative overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full min-h-[330px] object-cover"
                          />
                        </div>

                        {/* 右侧信息 */}
                        <div className="w-1/2 p-4">
                          <div className="flex flex-col h-full">
                            {/* 姓名和邮箱 */}
                            <div className="mb-4">
                              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-customPurple transition-colors duration-300">
                                {member.name}
                              </h3>
                              <div className="flex items-center text-gray-600">
                                <MdEmail className="w-5 h-5 mr-2 group-hover:text-customPurple transition-colors duration-300" />
                                <a
                                  href={`mailto:${member.email}`}
                                  className="hover:text-customPurple transition-colors duration-300 text-sm"
                                >
                                  {member.email}
                                </a>
                              </div>
                            </div>

                            {/* 描述 */}
                            <div className="flex-grow">
                              <p className="text-gray-600 leading-relaxed text-sm">
                                {member.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}


        {/* 三级渲染 */}

      </div>
    </div>
  );
} 