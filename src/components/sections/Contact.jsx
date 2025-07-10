import React, { useState } from "react";
import emailjs from "emailjs-com";
import resumefile from "../../assets/files/Carl_Justin_Ularte_Resume.pdf";

// TextArea
const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  return (
    <div className="mb-6">
      <textarea
        rows={row}
        placeholder={placeholder}
        name={name}
        className="w-full resize-none rounded-[8px] border border-gray-600 px-[14px] py-3 text-base text-body-color outline-none focus:border-primary"
        defaultValue={defaultValue}
      />
    </div>
  );
};

// InputBox
const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <div className="mb-6">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full rounded-[8px] border border-gray-600 px-[14px] py-3 text-base text-body-color outline-none focus:border-primary"
      />
    </div>
  );
};

// Rotating Card
const RotatingCard = () => {
  const [isTapped, setIsTapped] = useState(false);
  const [copied, setCopied] = useState("");

  const handleTap = () => {
    setIsTapped(true);
    setTimeout(() => {
      setIsTapped(false);
    }, 5000);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => {
      setCopied("");
    }, 1500);
  };

  return (
    <div
      onClick={handleTap}
      className={`relative duration-300 group border border-[#3259a2] border-4 shadow-xl overflow-hidden rounded-2xl h-60 w-90 bg-[#3259a2] p-5 flex flex-col items-start gap-4
        ${isTapped ? "rotate-0" : "rotate-0 lg:-rotate-12 lg:hover:rotate-0"}`}
    >
      <div className="font-dmsans text-gray-50">
        <span className="font-bold text-2xl">Contact me</span>
        <p
          className="text-s cursor-pointer underline"
          onClick={(e) => {
            e.stopPropagation();
            handleCopy("ulartecarljustin@gmail.com");
          }}
        >
          ulartecarljustin@gmail.com
          {copied === "ulartecarljustin@gmail.com" && (
            <span className="ml-2 text-green-300 text-xs">Copied!</span>
          )}
        </p>
        <p
          className="text-s cursor-pointer underline"
          onClick={(e) => {
            e.stopPropagation();
            handleCopy("+639217531408");
          }}
        >
          +639 21 7531 408
          {copied === "+639217531408" && (
            <span className="ml-2 text-green-300 text-xs">Copied!</span>
          )}
        </p>
      </div>

      <a
        href={resumefile}
        download
        className="duration-300 hover:bg-[#2c497b] rounded-[5px] border hover:text-gray-50 bg-gray-50 font-dmsans font-semibold text-[#3259a2] px-3 py-2 flex flex-row items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        Download CV
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z"
            fillRule="evenodd"
          ></path>
        </svg>
      </a>

      {/* Decorative SVGs */}
      <svg
        className="group-hover:scale-125 duration-500 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2 fill-gray-50 stroke-[#2c497b]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
      >
        <path
          d="M50.4 51C40.5 49.1 40 46 40 44v-1.2a18.9 18.9 0 0 0 5.7-8.8h.1c3 0 3.8-6.3 3.8-7.3s.1-4.7-3-4.7C53 4 30 0 22.3 6c-5.4 0-5.9 8-3.9 16-3.1 0-3 3.8-3 4.7s.7 7.3 3.8 7.3c1 3.6 2.3 6.9 4.7 9v1.2c0 2 .5 5-9.5 6.8S2 62 2 62h60A14.6 14.6 0 0 0 50.4 51z"
          strokeMiterlimit="10"
          strokeWidth="5"
        />
      </svg>
      <svg
        className="group-hover:scale-125 duration-200 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2 fill-gray-50 stroke-[#3259a2]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
      >
        <path
          d="M50.4 51C40.5 49.1 40 46 40 44v-1.2a18.9 18.9 0 0 0 5.7-8.8h.1c3 0 3.8-6.3 3.8-7.3s.1-4.7-3-4.7C53 4 30 0 22.3 6c-5.4 0-5.9 8-3.9 16-3.1 0-3 3.8-3 4.7s.7 7.3 3.8 7.3c1 3.6 2.3 6.9 4.7 9v1.2c0 2 .5 5-9.5 6.8S2 62 2 62h60A14.6 14.6 0 0 0 50.4 51z"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

// Main Contact
export const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pd93l4u", 
        "template_h0yfje6", 
        e.target,
        "Cn9uukZqRsAYGy3mj" 
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong, please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-[120px] min-h-screen mb-[10vh] flex items-center"
    >
      <div className="w-full container mx-auto">
        <div className="bg-white/80 rounded-[20px] shadow-lg p-8 md:p-12 w-full max-w-6xl mx-auto min-h-[600px]">
          <div className="flex flex-col lg:flex-row h-full">
            {/* Contact Info */}
            <div className="w-full lg:w-1/2 lg:pr-8 mb-12 lg:mb-0">
              <h2 className="text-[32px] font-dmsans font-bold leading-snug tracking-tight text-[#3259a2] sm:text-[40px] lg:text-[40px] xl:text-[50px]">
                Let's connect!
              </h2>
              <h2 className="mb-6 text-[20px] font-dmsans font-bold leading-none tracking-tight text-[#1d1d1f] sm:text-[20px] lg:text-[25px] xl:text-[35px]">
                I'd be thrilled to work with you.
              </h2>
              <div className="flex items-center justify-center mt-20">
                <RotatingCard />
              </div>
            </div>

            {/* Contact Form */}
            <div className="mt-0 sm:mt-0 lg:mt-5 w-full lg:w-1/2">
              <div className="h-full flex flex-col">
                <form className="flex-grow" onSubmit={sendEmail}>
                  <ContactInputBox
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />
                  <ContactInputBox
                    type="email"
                    name="email"
                    placeholder="Your Email"
                  />
                  <ContactInputBox
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                  />
                  <ContactTextArea
                    row="6"
                    placeholder="Your Message"
                    name="details"
                    defaultValue=""
                  />
                  <div className="mt-auto">
                    <button
                      type="submit"
                      className="w-full bg-[#3259a2] rounded-[10px] border border-primary bg-primary p-3 text-white transition active:bg-[#2c497b] active:scale-95 hover:bg-[#2c497b] hover:scale-105 duration-500"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

