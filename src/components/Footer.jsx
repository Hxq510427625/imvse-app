import { FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { contactInfo } from '../data';
import { navigation } from '../data';


export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white py-8">
      <div className="mx-auto w-4/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* 左侧：联系信息和社交图标 */}
        <div className="flex flex-col gap-4 md:w-1/2">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-2">
              <img src="/imvse-pc/logo.png" alt="IMVSE Logo" className="w-14 h-14" />
              <span className="text-customOrange text-3xl font-extrabold">IMVSE</span>
            </div>
            <div className='pb-2'>Contact Person：{contactInfo.name}</div>
            <div className='pb-2'>E-mail：{contactInfo.email}</div>
            <div className='pb-2'>Address：{contactInfo.address}</div>
          </div>
          <div className="flex gap-4 mt-2">
            <a href={contactInfo.account[0].link} target="_blank" rel="noopener noreferrer" className="border-2 border-white hover:border-customOrange rounded-full p-2 text-white hover:text-customOrange transition-colors text-2xl "><FaTwitter /></a>
            <a href={contactInfo.account[1].link} target="_blank" rel="noopener noreferrer" className="border-2 border-white hover:border-customOrange rounded-full p-2 text-white hover:text-customOrange transition-colors text-2xl"><FaLinkedin /></a>
            <a href={contactInfo.account[2].link} target="_blank" rel="noopener noreferrer" className="border-2 border-white hover:border-customOrange rounded-full p-2 text-white hover:text-customOrange transition-colors text-2xl"><FaYoutube /></a>
          </div>
        </div>
        {/* 右侧：子页面链接 */}
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {navigation.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-white hover:underline hover:text-customOrange transition-colors text-base"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 