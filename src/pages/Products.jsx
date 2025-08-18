import { useState } from 'react';
import { products } from '../data';

export default function Products() {
  const [activeProduct, setActiveProduct] = useState(products[0].id);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleProductChange = (productId) => {
    if (productId === activeProduct || isTransitioning) return;
    setIsTransitioning(true);
    setActiveProduct(productId);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  return (
    // <div className="min-h-screen mx-auto pb-12 animate-fadeIn">
    //   <div className='w-full h-80 border-t-4 border-customPurple relative'>
    //    <p className="text-6xl text-customBlue font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap tracking-wider">
    //       Products
    //     </p>
    //     <img src="/imvse-pc/mockImage.jpg" alt="products" className='w-full h-full object-cover' />
    //   </div>

    //   <div className='w-4/5 mx-auto mt-10'>
    //     {/* Title */}
    //     <div className="relative mb-10">
    //       <span className="text-2xl text-white font-bold bg-gradient-to-r from-customBlue to-customPurple px-8 py-4 inline-block">
    //         Our Products
    //       </span>
    //       <div className="w-full h-1 bg-gradient-to-r from-customBlue to-customOrange"></div>
    //     </div>

    //     {/* 主体上下布局 */}
    //     <div className="flex flex-col w-full gap-8">
    //       {/* 上方：产品列表 */}
    //       <div className="flex justify-center space-x-4">
    //         {products.map((product) => (
    //           <button
    //             key={product.id}
    //             onClick={() => handleProductChange(product.id)}
    //             className={`flex items-center px-6 py-4 rounded-lg transition-all duration-300 text-left min-w-[200px]
    //             ${activeProduct === product.id
    //                 ? 'bg-gradient-to-r from-customBlue to-customPurple text-white font-bold shadow'
    //                 : 'bg-white text-gray-900 hover:bg-gray-50'
    //               }`}
    //           >
    //             <div className={`w-2 h-8 rounded-full mr-4 ${activeProduct === product.id ? 'bg-customOrange' : 'bg-gradient-to-b from-customBlue to-customOrange'}`}></div>
    //             <span>{product.title}</span>
    //           </button>
    //         ))}
    //       </div>

    //       {/* 下方：内容展示区 */}
    //       <div className="w-full bg-white rounded-xl shadow-lg px-10 py-8 min-h-[300px] flex flex-col justify-center transition-all duration-500 overflow-hidden">
    //         <div className={`${isTransitioning ? 'animate-slideInRight' : ''}`}>
    //           <h2 className="text-2xl font-bold text-customBlue mb-4 flex items-center">
    //             <span className="w-3 h-3 rounded-full bg-customOrange mr-3"></span>
    //             {products.find(p => p.id === activeProduct)?.title}
    //           </h2>
    //           {/* <p className="text-gray-700 mb-6">
    //             {products.find(p => p.id === activeProduct)?.description}
    //           </p>
              
    //           <div className="mb-8">
    //             <h3 className="text-xl font-semibold text-customBlue mb-3">Award Criteria</h3>
    //             <ul className="list-disc list-inside space-y-2 text-gray-700">
    //               {products.find(p => p.id === activeProduct)?.criteria.map((criterion, index) => (
    //                 <li key={index}>{criterion}</li>
    //               ))}
    //             </ul>
    //           </div>

    //           <div>
    //             <h3 className="text-xl font-semibold text-customBlue mb-3">Recent Recipients</h3>
    //             <div className="grid grid-cols-2 gap-4">
    //               {products.find(p => p.id === activeProduct)?.recipients.map((recipient, index) => (
    //                 <div key={index} className="bg-gray-50 p-4 rounded-lg">
    //                   <div className="flex justify-between items-center mb-2">
    //                     <span className="font-bold text-customBlue">{recipient.year}</span>
    //                     <span className="font-semibold">{recipient.name}</span>
    //                   </div>
    //                   <p className="text-gray-600">{recipient.institution}</p>
    //                   <p className="text-gray-700 mt-2">{recipient.achievement}</p>
    //                 </div>
    //               ))}
    //             </div>
    //           </div> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col justify-center items-center min-h-screen mx-auto bg-gradient-to-br from-customBlue/10 to-customOrange/10 animate-fadeIn">
    <div className="flex flex-col items-center gap-6 p-10 rounded-xl shadow-lg bg-white/80 backdrop-blur-md">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-customOrange animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
      </svg>
      <span className="text-3xl md:text-4xl text-customOrange font-bold text-center drop-shadow-lg">This page is under construction.<br/>Stay tuned!</span>
    </div>
  </div>
  );
} 













