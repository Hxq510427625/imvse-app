import { currentMembers } from '../data';
export default function CurrentMembers() {

  return (
    <div className="min-h-screen  mx-auto pb-12 animate-fadeIn">

      <div className='w-full h-80 border-t-4 border-customPurple relative'>
        <p className="text-6xl text-customBlueq font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap tracking-wider">
          Current Members
        </p>
        <img src="/imvse-pc/mockImage.jpg" alt="society" className='w-full h-full object-cover object-[100%_35%]' />
      </div>

      <div className='w-4/5 mx-auto mt-10'>
        {/* Title */}
        <div className="relative mb-10">
          <span className="text-2xl text-white font-bold bg-gradient-to-r from-customBlue to-customPurple px-8 py-4 inline-block ">
            Current Members
          </span>
          <div className="w-full h-1 bg-gradient-to-r from-customBlue to-customOrange "></div>
        </div>
        {/* Current Members 部分 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {member.position}
              </h2>
              <p className="mt-2 text-lg text-customPurple font-medium">
                {member.name}
              </p>
              <p className="mt-1 text-gray-600">{member.organization}</p>
              <p className="mt-2 text-gray-700">
                <span className="font-semibold">Contact: </span>
                <a
                  href={`mailto:${member.contact}`}
                  className="text-customBlue hover:underline"
                >
                  {member.contact}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 