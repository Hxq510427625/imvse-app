//icons
import { useState } from 'react';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdTime } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import { MdLanguage, MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { pastConferences, upcomingConferences } from '../data';


export default function Conferences() {
  const [selectedConference, setSelectedConference] = useState(null);
  const [pastPage, setPastPage] = useState(1);
  const pageSize = 3;
  const totalPastPages = Math.ceil(pastConferences.length / pageSize);
  const pagedPastConferences = pastConferences.slice((pastPage - 1) * pageSize, pastPage * pageSize);

  const handleConferenceClick = (conference) => {
    setSelectedConference(conference);
  };

  const handleBackClick = () => {
    setSelectedConference(null);
  };

  // 会议详情页面
  const ConferenceDetail = ({ conference }) => {
    return (
      <div className="w-full animate-fadeIn">
        {/* 返回按钮 */}
        <button
          onClick={handleBackClick}
          className="flex items-center text-customBlue hover:text-customOrange transition-colors duration-300 mb-6"
        >
          <IoArrowBack className="w-6 h-6 mr-2" />
          <span className="text-lg">Back to Conferences</span>
        </button>

        {/* 会议详情内容 */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-customBlue mb-6">{conference.title}</h2>

          {/* 主要信息 */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <FaUser className="w-5 h-5 mr-3 text-customOrange" />
                <span className="font-semibold">Chairman:</span>
                <span className="ml-2">{conference.chairman}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <IoMdTime className="w-5 h-5 mr-3 text-customOrange" />
                <span className="font-semibold">Date:</span>
                <span className="ml-2">{conference.date}</span>
              </div>

            </div>
            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <MdLanguage className="w-5 h-5 mr-3 text-customOrange" />
                <span className="font-semibold">Language:</span>
                <span className="ml-2">{conference.language}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <HiOutlineLocationMarker className="w-5 h-5 mr-3 text-customOrange" />
                <span className="font-semibold">Location:</span>
                <span className="ml-2">{conference.location}</span>
              </div>
              {/* <div className="flex items-center text-gray-700">
                <MdEmail className="w-5 h-5 mr-3 text-customOrange" />
                <span className="font-semibold">Email:</span>
                <span className="ml-2">{conference.email}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <MdPhone className="w-5 h-5 mr-3 text-customOrange" />
                <span className="font-semibold">Phone:</span>
                <span className="ml-2">{conference.phone}</span>
              </div> */}
            </div>
          </div>

          {/* 地址信息 */}
          <div className="mb-8">
            <div className="flex items-start text-gray-700">
              <MdLocationOn className="w-5 h-5 mr-3 text-customOrange mt-1" />
              <div>
                <span className="font-semibold block mb-2">Address:</span>
                <span>{conference.address}</span>
              </div>
            </div>
          </div>

          {/* 描述 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-customBlue mb-4">Description</h3>
            <p className="text-gray-700 leading-relaxed">{conference.description}</p>
          </div>

          {/* 网站链接 */}
          {conference.poster && (
            <div className="flex justify-center">
              <a
                href={conference.poster}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-customBlue text-white rounded-full hover:bg-customOrange transition-colors duration-300"
              >
                Visit our poster
                <MdOutlineKeyboardDoubleArrowRight className="ml-2" />
              </a>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen mx-auto pb-12 animate-fadeIn">
      <div className='w-full h-80 border-t-4 border-customPurple relative'>
        <p className="text-6xl text-customBlue font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap tracking-wider">
          The International Mine Ventilation Congress
        </p>
        <img src="/imvse-pc/DSCF4261.JPG" alt="society" className='w-full h-full object-cover object-[100%_80%]' />
      </div>

      <div className='w-4/5 mx-auto mt-10'>
        {/* Title */}
        <div className="relative mb-10">
          <span className="text-2xl text-white font-bold bg-gradient-to-r from-customBlue to-customPurple px-8 py-4 inline-block">
            Conferences
          </span>
          <div className="w-full h-1 bg-gradient-to-r from-customBlue to-customOrange"></div>
        </div>

        {/* Content */}
        {selectedConference ? (
          <ConferenceDetail conference={selectedConference} />
        ) : (
          <div className="flex gap-8 relative animate-fadeIn">
            {/* Past Conferences */}
            <div className="w-1/2">
              <h2 className="text-2xl font-bold text-customBlue mb-6 flex items-center">
                <span className="w-3 h-3 rounded-full bg-customOrange mr-3"></span>
                Past Conferences
              </h2>
              <div className="space-y-6">
                {pagedPastConferences.map((conference) => (
                  <div
                    key={conference.id}
                    onClick={() => handleConferenceClick(conference)}
                    className="group relative bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:cursor-pointer"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-customPurple transition-all duration-300">{conference.title}</h3>
                    <div className="flex flex-col items-left text-gray-600 mb-3">
                      <div className="flex items-center">
                        <FaUser className="mr-2 group-hover:text-customPurple transition-all duration-300" />
                        <span className="mr-4">{conference.chairman}</span>
                      </div>
                      <div className="flex items-center">
                        <IoMdTime className="mr-2 group-hover:text-customPurple transition-all duration-300" />
                        <span className="mr-4">{conference.date}</span>
                      </div>
                      <div className="flex items-center">
                        <HiOutlineLocationMarker className="mr-2 group-hover:text-customPurple transition-all duration-300" />
                        <span>{conference.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 group-hover:text-customPurple transition-all duration-300">{conference.description}</p>
                    <div className="flex items-center justify-end absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-customOrange text-2xl">View Details</span>
                      <MdOutlineKeyboardDoubleArrowRight className="text-customOrange text-4xl ml-2" />
                    </div>
                  </div>
                ))}
              </div>
              {/* 分页按钮 */}
              <div className="flex justify-center mt-8 space-x-2">
                <button
                  className="px-3 py-1 rounded bg-gray-200 hover:bg-customBlue hover:text-white transition-colors disabled:opacity-50"
                  onClick={() => setPastPage(p => Math.max(1, p - 1))}
                  disabled={pastPage === 1}
                >
                  Previous
                </button>
                {Array.from({ length: totalPastPages }, (_, i) => (
                  <button
                    key={i + 1}
                    className={`px-3 py-1 rounded ${pastPage === i + 1 ? 'bg-customBlue text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                    onClick={() => setPastPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  className="px-3 py-1 rounded bg-gray-200 hover:bg-customBlue hover:text-white transition-colors disabled:opacity-50"
                  onClick={() => setPastPage(p => Math.min(totalPastPages, p + 1))}
                  disabled={pastPage === totalPastPages}
                >
                  Next
                </button>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px border-dashed border-l-4 border-customBlue opacity-70"></div>

            {/* Upcoming Conferences */}
            <div className="w-1/2">
              <h2 className="text-2xl font-bold text-customBlue mb-6 flex items-center">
                <span className="w-3 h-3 rounded-full bg-customOrange mr-3"></span>
                Upcoming Conferences
              </h2>
              <div className="space-y-6">
                {upcomingConferences.map((conference) => (
                  <div
                    key={conference.id}
                    onClick={() => handleConferenceClick(conference)}
                    className="group relative bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:cursor-pointer"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-customPurple transition-all duration-300">{conference.title}</h3>
                    <div className="flex flex-col items-left text-gray-600 mb-3">
                      <div className="flex items-center ">
                        <FaUser className="mr-2 group-hover:text-customPurple transition-all duration-300" />
                        <span className="mr-4">{conference.chairman}</span>
                      </div>
                      <div className="flex items-center ">
                        <IoMdTime className="mr-2 group-hover:text-customPurple transition-all duration-300" />
                        <span className="mr-4">{conference.date}</span>
                      </div>
                      <div className="flex items-center ">
                        <HiOutlineLocationMarker className="mr-2 group-hover:text-customPurple transition-all duration-300" />
                        <span>{conference.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 group-hover:text-customPurple transition-all duration-300">{conference.description}</p>
                    <div className="flex items-center justify-end absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-customOrange text-2xl">View Details</span>
                      <MdOutlineKeyboardDoubleArrowRight className="text-customOrange text-4xl ml-2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}