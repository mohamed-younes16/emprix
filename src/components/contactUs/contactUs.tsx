/* eslint-disable @typescript-eslint/no-explicit-any */
// ContactForm.tsx
import React, { useState } from "react";
import "./contactus.css";
import emailjs from "@emailjs/browser";
import group7335 from "../../assets/Group 7335.png";
import group7340 from "../../assets/Group 7340.svg";
// import vector from "../../assets/Vector.png";
import basilinsta from "../../assets/basil_instagram-solid.png";
import { motion as m } from "framer-motion";
import { toast } from "sonner";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
//   const { VITE_TEMPLATE_KEY, VITE_SERVICE_KEY, VITE_PUBLIC_KEYOF_EMAILJS } =
//     import.meta.env;
// console.log({ VITE_TEMPLATE_KEY, VITE_SERVICE_KEY, VITE_PUBLIC_KEYOF_EMAILJS })
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
       "service_gs498hk",
        "template_ggda3fg",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "B164vLhOO6HuPrZsJ"
      )
      .then((result: any) => {
        console.log(result);
        result.status == 200 &&
          toast.success("your message has been  sent successfully ✅");
      });
  };

  return (
    <>
      <m.div
      initial={{ opacity: 0, y: 200 }}
      transition={{ duration: .9 }}
      whileInView={{ opacity: 1 ,y:0}}
      viewport={{once:true}}
      className="formSec" id="section6">
        <div
          className="formWrapper  transition-all
           cursor-pointer 
         rounded-lg backdrop-blur-md  flex flex-col "
        >
        
       
        <div className="flex justify-center"> <img className="imgFormWrap h-[100px] w-[200px] max-md:w-[180px] "  src={group7340} alt="" /></div> 
          <form
            style={{}}
            className=" space-y-5  lg:w-[25dvw]   "
            onSubmit={handleSubmit}
          >
            <div>
              {/* <label htmlFor="name">Name:</label> */}
              <input
                type="text"
                placeholder="Full Name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className=" p-2"
              />
            </div>
            <div>
              {/* <label htmlFor="email">Email:</label> */}
              <input
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className=" p-2"
              />
            </div>
            <div>
              {/* <label htmlFor="message">Message:</label> */}
              <textarea
                placeholder="Message"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={9}
                required
              />
            </div>
            <button
              className="contact-button rounded-lg text-black
               !border-white  bg-blue-600 !border-2"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
        <div className="innerSecFormRt flex-col flex justify-center">
          <div className="inInnerSecTxt max-md:mt-4">
            <h1>GET IN TOUCH</h1>
            <div className="cellForm3">
              <img src={basilinsta} alt="" />
              <p>support@Emprixmarketing</p>
            </div>
          </div>
          <img className="imgFotseter" src={group7335} alt="" />
        </div>
      </m.div>
    </>
  );
};

export default ContactForm;
