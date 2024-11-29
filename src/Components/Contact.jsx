import React from 'react'
import { MdOutlineMail } from "react-icons/md";
const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c35caf6b-068f-476d-91ff-86974c76b7b8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
    alert(res.message);
    }
  };


  return (
    <section className="flex flex-col items-center p-5 text-white h-[130vh] sm:h-[100vh]">
    <h2 className="text-light font-medium text-xs">Get in touch</h2>
    <p className="text-xl font-medium text-primary p-1">Let's Talk</p>
    <div className="flex flex-col lg:flex-row m-5 gap-10 lg:gap-20 items-center">
      {/* Contact Card */}
      <div className="w-[260px] h-[160px] bg-[#2c2c62] rounded-2xl border border-transparent transition-all duration-700 hover:border-primary_variant hover:bg-transparent cursor-pointer">
        <article className="flex flex-col  justify-center items-center p-4">
          <MdOutlineMail className="text-2xl" />
          <h4 className="pt-5 p-[2px] text-xs font-medium">Email</h4>
          <p className="text-xs font-medium">shivashangarisivakumar@gmail.com</p>
          <a href="mailto:shivashangarisivakumar@gmail.com" target="_blank" rel="noopener noreferrer" className="mt-5 text-sm text-primary font-medium"> Send a message </a>
        </article>
      </div>
  
      {/* Contact Form */}
      <form onSubmit={onSubmit} className="flex flex-col gap-10 w-full max-w-[400px] sm:gap-4">
        <input type="text" name="name" placeholder="Your full name" required className="outline-0 bg-transparent border-2 border-primary_variant w-[260px] text-sm font-medium p-5 rounded-lg sm:w-[450px]"/>
        <input type="email" name="email" placeholder="Your Email" required className="outline-0 bg-transparent border-2 border-primary_variant  w-[260px] text-sm font-medium p-5 rounded-lg sm:w-[450px]"/>
        <textarea name="message" rows="7" placeholder="Your Message" required className="outline-0 bg-transparent border-2 border-primary_variant w-[260px] text-sm font-medium p-5 rounded-lg sm:w-[450px]"></textarea>
        <button type="submit" className="relative px-[24px] text-xs font-medium py-3 overflow-hidden text-bg bg-primary rounded-lg shadow-inner group w-[100px] ">
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-white opacity-0 group-hover:opacity-100"></span>
          <span className="relative transition-colors duration-300 delay-200 group-hover:text-bg ease">Submit</span>
        </button>
      </form>
    </div>
  </section>
  
  
  
  
  )
}

export default Contact