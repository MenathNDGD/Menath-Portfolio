"use client";

import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PhoneInput } from "@/components/ContactFormComponents/PhoneInput";
import MessageDialog from "@/components/ContactFormComponents/MessageDialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { sendContactEmail } from "@/services/emailJSService";

const ContactForm = () => {
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

  const validateForm = (data) => {
    const newErrors = {};

    if (!data.firstName.trim()) {
      newErrors.firstName = "First name is required!";
    }

    if (!data.lastName.trim()) {
      newErrors.lastName = "Last name is required!";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Invalid email address!";
    }

    if (!data.phone.trim()) {
      newErrors.phone = "Phone number is required!";
    }

    if (!data.service) {
      newErrors.service = "Please select a service!";
    }

    if (!data.message.trim()) {
      newErrors.message = "Message is required!";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSending(false);

      const firstErrorField = Object.keys(validationErrors)[0];
      document.getElementsByName(firstErrorField)[0]?.focus();

      return;
    }

    setErrors({});

    try {
      await sendContactEmail(formData);
      setDialogOpen(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setDialogOpen(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } finally {
      setIsSending(false);
    }
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
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
      >
        <h3 className="text-4xl text-accent">Drop Me a Line</h3>
        <p className="text-white/60">
          Have a project in mind or just want to say hello? Fill out the form
          below, and I'll get back to you as soon as possible.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col">
            <Input
              type="text"
              name="firstName"
              placeholder="First Name"
              autoComplete="given-name"
              autoCorrect="off"
              value={formData.firstName}
              onChange={handleInputChange}
              aria-label="First Name"
              aria-invalid={!!errors.firstName}
              aria-describedby="firstName-error"
            />
            <div
              id="firstName-error"
              className={`text-red-500 italic h-3 ${
                errors.firstName ? "visible" : "invisible"
              }`}
            >
              {errors.firstName}
            </div>
          </div>
          <div className="flex flex-col">
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name"
              autoComplete="family-name"
              autoCorrect="off"
              value={formData.lastName}
              onChange={handleInputChange}
              aria-label="Last Name"
              aria-invalid={!!errors.lastName}
              aria-describedby="lastName-error"
            />
            <div
              id="lastName-error"
              className={`text-red-500 italic h-3 ${
                errors.lastName ? "visible" : "invisible"
              }`}
            >
              {errors.lastName}
            </div>
          </div>
          <div className="flex flex-col">
            <Input
              type="text"
              name="email"
              placeholder="Email Address"
              autoComplete="email"
              autoCorrect="off"
              value={formData.email}
              onChange={handleInputChange}
              aria-label="Email Address"
              aria-invalid={!!errors.email}
              aria-describedby="email-error"
            />
            <div
              id="email-error"
              className={`text-red-500 italic h-3 ${
                errors.email ? "visible" : "invisible"
              }`}
            >
              {errors.email}
            </div>
          </div>
          <div className="flex flex-col">
            <PhoneInput
              placeholder="Phone Number"
              defaultCountry="LK"
              autoComplete="tel"
              autoCorrect="off"
              value={formData.phone}
              onChange={(phone) => setFormData({ ...formData, phone })}
              className="flex items-center w-full"
              aria-label="Phone Number"
              aria-invalid={!!errors.phone}
              aria-describedby="phone-error"
            />
            <div
              id="phone-error"
              className={`text-red-500 italic h-3 ${
                errors.phone ? "visible" : "invisible"
              }`}
            >
              {errors.phone}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <Select
            onValueChange={(value) =>
              setFormData({ ...formData, service: value })
            }
            value={formData.service}
            aria-label="Select a Service"
            aria-invalid={!!errors.service}
            aria-describedby="service-error"
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a Service" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select a Service</SelectLabel>
                <SelectItem value="Web Development">Web Development</SelectItem>
                <SelectItem value="Web Applications">
                  Web Applications
                </SelectItem>
                <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                <SelectItem value="Logo Design">Logo Design</SelectItem>
                <SelectItem value="Video Editing">Video Editing</SelectItem>
                <SelectItem value="Content Writing">Content Writing</SelectItem>
                <SelectItem value="Document Creation">
                  Document Creation
                </SelectItem>
                <SelectItem value="Custom Service">Custom Service</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div
            id="service-error"
            className={`text-red-500 italic h-3 ${
              errors.service ? "visible" : "invisible"
            }`}
          >
            {errors.service}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <Textarea
            className="h-[150px]"
            placeholder={
              formData.service
                ? `Please provide details about your ${formData.service.toLowerCase()} request.`
                : "What’s on your mind? Let me know here..."
            }
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            aria-label="Message"
            aria-invalid={!!errors.message}
            aria-describedby="message-error"
          />
          <div
            id="message-error"
            className={`text-red-500 italic h-3 ${
              errors.message ? "visible" : "invisible"
            }`}
          >
            {errors.message}
          </div>
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
      <MessageDialog isOpen={dialogOpen} onClose={handleCloseDialog} />
    </>
  );
};

export default ContactForm;
