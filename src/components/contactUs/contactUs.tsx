// ContactForm.tsx
import React, { useState } from "react";
import "./contactus.css";
import emailjs from "@emailjs/browser";
import group7335 from "../../assets/Group 7335.png";
import group7340 from "../../assets/Group 7340.svg";
// import vector from "../../assets/Vector.png";
import basilinsta from "../../assets/basil_instagram-solid.png";
import waves from "../../assets/waves.svg";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
      .then(
        (result: any) => {
          console.log(result);
        },
        (error: any) => {
          console.log(error.text);
        }
      );
    console.log("Form submitted with data:", formData);
  };

  return (
    <>
      <div className="formSec" id="section6">
        <div className="formWrapper border-white border-2
         rounded-lg backdrop-blur-md relative flex flex-col ">
          <img
            src={waves}
            className="absolute -z-10 object-cover h-1/2 w-full "
            alt=""
          />
          <img
            src={waves}
            className="absolute -z-10 top-1/2 object-cover h-1/2 w-full "
            alt=""
          />
          <img className="imgFormWrap" src={group7340} alt="" />
          <form
            style={{}}
            className=" space-y-5 p-6   "
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
              className="contact-button rounded-lg text-black !border-black !border-2"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
        <div className="innerSecFormRt flex-col flex justify-center">
          <div className="inInnerSecTxt">
            <h1>GET IN TOUCH</h1>
            {/* <div className="cellForm1">
              <img src={vector} alt="" />
              <p>502 W 7TH STREET SUITE 100 ERIE, PA 16502</p>
            </div> */}
            <div className="cellForm3">
              <img src={basilinsta} alt="" />
              <p>support@Emprixmarketing</p>
            </div>
          </div>
          <img className="imgFotseter" src={group7335} alt="" />
        </div>
      </div>
    </>
  );
};

export default ContactForm;