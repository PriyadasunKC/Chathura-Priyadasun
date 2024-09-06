"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+94) 765 619 482",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "cpriyadasun@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Galle, Sri Lanka",
  },
];

const Alert = ({ message, isSuccess }) => (
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    className={`fixed top-5 right-5 p-5 rounded-md shadow-md ${
      isSuccess ? "bg-accent" : "bg-red-500"
    } text-primary max-w-md w-full mx-auto text-center z-50`}
  >
    {message}
  </motion.div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertState, setAlertState] = useState({
    show: false,
    message: "",
    isSuccess: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleServiceChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      service: value,
    }));
  };

  const showAlert = (message, isSuccess) => {
    setAlertState({ show: true, message, isSuccess });
    setTimeout(
      () => setAlertState({ show: false, message: "", isSuccess: true }),
      3000
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        "service_m4qpw4q",
        "template_e8f32ue",
        {
          to_name: "Chathura Priyadasun",
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        "frDtBGCCD-GOcxv7E"
      );

      console.log(result.text);
      showAlert("Message sent successfully!", true);
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      showAlert("Failed to send message. Please try again.", false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6 relative"
    >
      <AnimatePresence>
        {alertState.show && (
          <Alert
            message={alertState.message}
            isSuccess={alertState.isSuccess}
          />
        )}
      </AnimatePresence>

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl "
            >
              <h3 className="text-4xl text-accent ">Let's work together</h3>
              <p className="text-white/60">
                Fill out the form below and I will get back to you as soon as
                possible.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {/* Select */}
              <Select
                onValueChange={handleServiceChange}
                value={formData.service}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select Services</SelectLabel>
                    <SelectItem value="for Web Development">Web Development</SelectItem>
                    <SelectItem value="Hire for Software Engineering Intern">
                      Hire for an Software Engineering Internship
                    </SelectItem>
                    <SelectItem value="Hire for DevOps Engineering Intern">
                      Hire for an DevOps Engineering Internship
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Textarea */}
              <Textarea
                className="h-[200px] "
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              {/* Submit Button */}
              <Button
                type="submit"
                size="md"
                className="max-w-40 h-12 w-[40]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 ">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex gap-4">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center text-[28px]">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white/60 ">{item.title}</h4>
                    <p className="text-xl">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
