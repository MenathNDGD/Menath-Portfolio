"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaSpinner } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import info from "@/data/contactPageData";
import { PhoneInput } from "@/components/PhoneInput";
import MessageDialog from "@/components/MessageDialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [dialogOpen, setDialogOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setErrors({});

    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First name is required.";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required.";
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    }
    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }
    if (!formData.message) {
      newErrors.message = "Message is required.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSending(false);
      return;
    }

    const fullName = `${formData.firstName} ${formData.lastName}`;

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: fullName,
          to_name: "Recipient Name",
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          setDialogOpen(true);
          setIsSending(false);
        },
        (error) => {
          setIsSending(false);
        }
      );
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    setErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="order-2 xl:order-none xl:w-[58%]">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Drop Me a Line</h3>
              <p className="text-white/60">
                Have a project in mind or just want to say hello? Fill out the
                form below, and I'll get back to you as soon as possible.
              </p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  {errors.firstName && (
                    <p className="text-red-500">{errors.firstName}</p>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                  {errors.lastName && (
                    <p className="text-red-500">{errors.lastName}</p>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <Input
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email}</p>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <PhoneInput
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(phone) => setFormData({ ...formData, phone })}
                    className="flex items-center w-full"
                  />
                  {errors.phone && (
                    <p className="text-red-500">{errors.phone}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, service: value })
                  }
                  value={formData.service}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a Service</SelectLabel>
                      <SelectItem value="Web Development">
                        Web Development
                      </SelectItem>
                      <SelectItem value="Web Applications">
                        Web Applications
                      </SelectItem>
                      <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                      <SelectItem value="Logo Design">Logo Design</SelectItem>
                      <SelectItem value="Video Editing">
                        Video Editing
                      </SelectItem>
                      <SelectItem value="Content Writing">
                        Content Writing
                      </SelectItem>
                      <SelectItem value="Document Creation">
                        Document Creation
                      </SelectItem>
                      <SelectItem value="Custom Service">
                        Custom Service
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.service && (
                  <p className="text-red-500">{errors.service}</p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <Textarea
                  className="h-[200px]"
                  placeholder="What’s on your mind? Let me know here..."
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                {errors.message && (
                  <p className="text-red-500">{errors.message}</p>
                )}
              </div>
              <Button
                size="md"
                className="max-w-40"
                type="submit"
                disabled={isSending}
              >
                {isSending ? (
                  <div className="flex items-center">
                    <FaSpinner className="w-5 h-5 mr-2 text-white animate-spin" />
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
          <div className="flex items-center flex-1 order-1 mb-8 xl:justify-end xl:order-none xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-full flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1 cursor-pointer" onClick={item.action}>
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <MessageDialog isOpen={dialogOpen} onClose={handleCloseDialog} />
    </motion.section>
  );
};

export default Contact;
