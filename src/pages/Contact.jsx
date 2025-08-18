import { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaUser } from "react-icons/fa";
import { contactInfo } from '../data';

export default function Contact() {

  const [formData, setFormData] = useState({
    surname: "",
    name: "",
    email: "",
    title: "Mr.",
    initials: "",
    callName: "",
    date: "",
    gender: "Male",
    nationality: "",
    telephone: "",
    internationalCode: "",
    postalAddressLine1: "",
    postalAddressLine2: "",
    city: "",
    province: "",
    country: "",
    companyName: "",
    department: "",
    qualification: "",
    professionalAffiliation: "",
    discipline: "",
    terms: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // 清除对应错误提示
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };
  const handleDateChange = (selectedDates, dateStr) => {
    setFormData(prev => ({
      ...prev,
      date: dateStr,
    }));

    //验证
    if (!dateStr) {
      setErrors((prev) => ({
        ...prev,
        date: "This is a required field.",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        date: "",
      }));
    }
  }
  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({ ...prev, terms: e.target.checked }));   
  }
  // 输入框失焦时检查是否为空
  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (!value.trim()) {
      setErrors((prev) => ({
        ...prev,
        [name]: "This is a required field.",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };
  const handleEmailBlur = (e) => {
    const { name, value } = e.target;
    const re = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!re.test(value)) {
      setErrors((prev) => ({
        ...prev,
        [name]: "Invalid email address.",
      }));
      return
    }
    if (!value.trim()) {
      setErrors((prev) => ({
        ...prev,
        [name]: "This is a required field.",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };
  // 表单提交
  const handleSubmit = async(e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.surname.trim()) {
      newErrors.surname = "This is a required field.";
    }
    if (!formData.name.trim()) {
      newErrors.name = "This is a required field.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "This is a required field.";
    }
    if (!formData.initials.trim()) {
      newErrors.initials = "This is a required field.";
    }
    if (!formData.date.trim()) {
      newErrors.date = "This is a required field.";
    }
    if (!formData.qualification.trim()) {
      newErrors.qualification = "This is a required field.";
    }
    if (!formData.discipline.trim()) {
      newErrors.discipline = "This is a required field.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xyzpwewl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          surname: "",
          name: "",
          email: "",
          title: "Mr.",
          initials: "",
          callName: "",
          date: "",
          gender: "Male",
          nationality: "",
          telephone: "",
          internationalCode: "",
          postalAddressLine1: "",
          postalAddressLine2: "",
          city: "",
          province: "",
          country: "",
          companyName: "",
          department: "",
          qualification: "",
          professionalAffiliation: "",
          discipline: "",
          terms: false,
        });
        alert("Submitted successfully")
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (err) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen  mx-auto pb-12 animate-fadeIn">

      <div className='w-full h-80 border-t-4 border-customPurple relative'>
        <p className="text-6xl text-customBlue font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap tracking-wider">
          Contact Us
        </p>
        <img src="/imvse-pc/contactBanner.jpg" alt="society" className='w-full h-full object-cover object-[100%_50%]' />
      </div>

      <div className='w-4/5 mx-auto mt-10'>
        {/* Title */}
        <div className="relative mb-10">
          <span className="text-2xl text-white font-bold bg-gradient-to-r from-customBlue to-customPurple px-8 py-4 inline-block ">
            Contact Us
          </span>
          <div className="w-full h-1 bg-gradient-to-r from-customBlue to-customOrange "></div>
        </div>

        {/* content */}
        <div className="mx-auto">

          <div className="rounded-lg bg-gray-50 p-8">
            <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-center text-gray-600">
                <FaUser className="h-5 w-5 text-primary" />
                <span className="ml-2">{contactInfo.name}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MdEmail className="h-5 w-5 text-primary" />
                <span className="ml-2">{contactInfo.email}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MdLocationOn className="h-5 w-5 text-primary flex-none" />
                <span className="ml-2">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gray-50 p-8">
            <h2 className="text-2xl font-bold text-gray-900">Become our member</h2>
            <p className='text-sm text-gray-500 my-4'>Fields marked with an <span className='text-red-500'>*</span> are required</p>
            <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
              <div className='flex items-center'>
                <label htmlFor="surname" className="block w-1/3 text-right text-sm pr-4 font-medium text-gray-700">
                  Surname (required) <span className='text-red-500'>*</span>
                </label>
                <input
                  type="text"
                  name="surname"
                  id="surname"
                  className={`mt-1 block h-8 w-1/2 rounded-md shadow-sm border focus:border-primary focus:outline-none focus:ring-primary sm:text-sm ${errors.surname ? 'border-red-500' : 'border-gray-300'}`}
                  value={formData.surname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.surname && (
                  <p className="text-red-500 text-sm mt-1 ml-4">{errors.surname}</p>
                )}
              </div>
              <div className='flex items-center'>
                <label htmlFor="name" className="block w-1/3 text-right text-sm pr-4 font-medium text-gray-700">
                  name (required) <span className='text-red-500'>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={`mt-1 block h-8 w-1/2 rounded-md shadow-sm border focus:border-primary focus:outline-none focus:ring-primary sm:text-sm ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 ml-4">{errors.name}</p>
                )}
              </div>
              <div className='flex items-center'>
                <label htmlFor="email" className="block w-1/3 text-right text-sm pr-4 font-medium text-gray-700">
                  E-mail Address (required) <span className='text-red-500'>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`mt-1 block h-8 w-1/2 rounded-md shadow-sm border focus:border-primary focus:outline-none focus:ring-primary sm:text-sm ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleEmailBlur}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 ml-4">{errors.email}</p>
                )}
              </div>
              <div className='flex items-center'>
                <label htmlFor="title" className="block w-1/3 text-right text-sm pr-4 font-medium text-gray-700">
                  Title <span className='text-red-500'>*</span>
                </label>
                <select id="title" name="title" className={`mt-1 block h-8 w-1/2 rounded-md shadow-sm border focus:border-primary focus:outline-none focus:ring-primary sm:text-sm ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
                  value={formData.title}
                  onChange={handleChange}
                >
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Ms.">Ms.</option>
                  <option value="Dr.">Dr.</option>
                </select>
              </div>
              <div className='flex items-center'>
                <label htmlFor="initials" className="block w-1/3 text-right text-sm pr-4 font-medium text-gray-700">
                  Initials (required) <span className='text-red-500'>*</span>
                </label>
                <input
                  type="text"
                  name="initials"
                  id="initials"
                  className={`mt-1 block h-8 w-1/2 rounded-md shadow-sm border focus:border-primary focus:outline-none focus:ring-primary sm:text-sm ${errors.initials ? 'border-red-500' : 'border-gray-300'}`}
                  value={formData.initials}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.initials && (
                  <p className="text-red-500 text-sm mt-1 ml-4">{errors.initials}</p>
                )}
              </div>
              <div className='flex items-center'>
                <label htmlFor="callName" className="block w-1/3 text-right text-sm pr-4 font-medium text-gray-700">
                  Call Name / Nick Name
                </label>
                <input
                  type="text"
                  name="callName"
                  id="callName"
                  className="mt-1 block h-8 w-1/2 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  value={formData.callName}
                  onChange={handleChange}
                />
              </div>
              <div className='flex items-center'>
                <label htmlFor="date" className="block w-1/3 text-right text-sm pr-4 font-medium text-gray-700">
                  Date of Birth <span className='text-red-500'>*</span>
                </label>
                <Flatpickr
                  name="date"
                  id="date"
                  value={formData.date}
                  onChange={handleDateChange}
                  options={{
                    dateFormat: "Y/m/d", // 显示格式 YYYY/MM/DD
                  }}
                  placeholder="YYYY/MM/DD"
                  className={`mt-1 block h-8 w-1/2 rounded-md shadow-sm border focus:border-primary focus:outline-none focus:ring-primary sm:text-sm ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.date && (
                  <p className="text-red-500 text-sm mt-1 ml-4">{errors.date}</p>
                )}
              </div>
              <div className='flex items-center'>
                <label htmlFor="gender" className="block w-1/3 text-right text-sm pr-4 font-medium text-gray-700">
                  Gender
                </label>
                <select id="gender" name="gender" className="mt-1 block h-8 w-1/2 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" value={formData.gender}
                  onChange={handleChange}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className='flex items-center'>
                <label htmlFor="nationality" className="block w-1/3 text-right text-sm pr-4 font-medium text-gray-700">
                  Nationality
                </label>
                <input
                  type="text"
                  name="nationality"
                  id="nationality"
                  className="mt-1 block h-8 w-1/2 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  value={formData.nationality}
                  onChange={handleChange}
                />
              </div>
              <div className='flex items-center'>
                <label htmlFor="telephone" className="block w-1/3 text-right text-sm pr-4 font-medium text-gray-700">
                  Telephone/ Mobile
                </label>
                <input
                  type="text"
                  name="telephone"
                  id="telephone"
                  className="mt-1 block h-8 w-1/2 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  value={formData.telephone}
                  onChange={handleChange}
                />
              </div>
              <div className='flex items-center'>
                <label htmlFor="internationalCode" className="block w-1/3 text-right text-sm pr-4 font-medium text-gray-700">
                  International Code
                </label>
                <input
                  type="text"
                  name="internationalCode"
                  id="internationalCode"
                  className="mt-1 block h-8 w-1/2 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  value={formData.internationalCode}
                  onChange={handleChange}
                />
              </div>
              <div className='flex items-center'>
                <label htmlFor="postalAddressLine1" className="block w-1/3 text-right text-sm pr-4 font-medium text-gray-700">
                  Postal Address Line 1
                </label>
                <input
                  type="text"
                  name="postalAddressLine1"
                  id="postalAddressLine1"
                  className="mt-1 block h-8 w-1/2 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  value={formData.postalAddressLine1}
                  onChange={handleChange}
                />
              </div>
              <div className='flex items-center'>
                <label htmlFor="postalAddressLine2" className="block w-1/3 text-right text-sm pr-4 font-medium text-gray-700">
                  Postal Address Line 2
                </label>
                <input
                  type="text"
                  name="postalAddressLine2"
                  id="postalAddressLine2"
                  className="mt-1 block h-8 w-1/2 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  value={formData.postalAddressLine2}
                  onChange={handleChange}
                />
              </div>
              <div className='flex items-center'>
                <label htmlFor="city" className="block w-1/3 text-right text-sm pr-4 font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="mt-1 block h-8 w-1/2 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className='flex items-center'>
                <label htmlFor="province" className="block w-1/3 text-right text-sm pr-4 font-medium text-gray-700">
                  Province
                </label>
                <input
                  type="text"
                  name="province"
                  id="province"
                  className="mt-1 block h-8 w-1/2 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  value={formData.province}
                  onChange={handleChange}
                />
              </div>
              <div className='flex items-center'>
                <label htmlFor="country" className="block w-1/3 text-right text-sm pr-4 font-medium text-gray-700">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  className="mt-1 block h-8 w-1/2 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
              <div className='flex items-center'>
                <label htmlFor="companyName" className="block w-1/3 text-right text-sm pr-4 font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  className="mt-1 block h-8 w-1/2 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>
              <div className='flex items-center'>
                <label htmlFor="department" className="block w-1/3 text-right text-sm pr-4 font-medium text-gray-700">
                  Department
                </label>
                <input
                  type="text"
                  name="department"
                  id="department"
                  className="mt-1 block h-8 w-1/2 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  value={formData.department}
                  onChange={handleChange}
                />
              </div>
              <div className='flex items-center'>
                <label htmlFor="qualification" className="block w-1/3 text-right text-sm pr-4 font-medium text-gray-700">
                  Qualification(s) <span className='text-red-500'>*</span>
                </label>
                <input
                  type="text"
                  name="qualification"
                  id="qualification"
                  className={`mt-1 block h-8 w-1/2 rounded-md shadow-sm border focus:border-primary focus:outline-none focus:ring-primary sm:text-sm ${errors.qualification ? 'border-red-500' : 'border-gray-300'}`}
                  value={formData.qualification}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.qualification && (
                  <p className="text-red-500 text-sm mt-1 ml-4">{errors.qualification}</p>
                )}
              </div>
              <div className='flex items-center'>
                <label htmlFor="professionalAffiliation" className="block w-1/3 text-right text-sm pr-4 font-medium text-gray-700">
                  Professional Affiliation(s)
                </label>
                <input
                  type="text"
                  name="professionalAffiliation"
                  id="professionalAffiliation"
                  className="mt-1 block h-8 w-1/2 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  value={formData.professionalAffiliation}
                  onChange={handleChange}
                />
              </div>
              <div className='flex'>
                <label htmlFor="discipline" className="block w-1/3 text-right text-sm pr-4 font-medium text-gray-700">
                  Discipline / Field(s) of expertise / Interest(s) <span className='text-red-500'>*</span>
                </label>
                <textarea
                  name="discipline"
                  id="discipline"
                  rows={5}
                  className={`mt-1 block w-1/2 rounded-md shadow-sm border focus:border-primary focus:outline-none focus:ring-primary sm:text-sm ${errors.discipline ? 'border-red-500' : 'border-gray-300'}`}
                  value={formData.discipline}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.discipline && (
                  <p className="text-red-500 text-sm mt-1 ml-4">{errors.discipline}</p>
                )}
              </div>
              <div className='flex '>
                <label htmlFor="terms" className="block w-1/3 text-right text-sm pr-4 font-medium text-gray-700">Terms and Conditions <span className='text-red-500'>*</span></label>
                <div className="w-1/2 flex  space-x-2">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleCheckboxChange}
                    className={`mt-1 block h-8 w-4 h-4 rounded-md shadow-sm border focus:border-primary focus:outline-none focus:ring-primary sm:text-sm hover:cursor-pointer`}
                  />
                  <span className="text-sm text-gray-700 text-bolder">
                    I agree that, in the event of my admission to the IMVSE, I will be governed by the Constitution and By-Laws of this Society and that that I will advance the objects of the Society as far as shall be in my power. By submitting this application form, I the applicant, certify that the statements made by me in this form are true.
                  </span>
                </div>
                {formData.terms && (
                  <p className="text-red-500 text-sm mt-1 ml-4">{errors.terms}</p>
                )}
              </div>
              <div className="flex flex-col items-center">
                <button
                  type="submit"
                  disabled={!formData.terms}
                  className={`w-1/2 rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ${formData.terms ? 'bg-primary hover:bg-primary/90' : 'bg-gray-300 cursor-not-allowed'
                    }`}
                >
                  submit
                </button>
                {!formData.terms && (
                  <p className="text-red-500 text-sm mt-1 ml-4">Please select Terms and Conditions</p>
                )}
              </div>
            </form>
          </div>
        </div>


      </div>
    </div>
  );
} 