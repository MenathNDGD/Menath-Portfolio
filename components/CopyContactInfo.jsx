"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const CopyContactInfo = ({ email, phone }) => {
  const [emailCopyStatus, setEmailCopyStatus] = useState("Copy Email");
  const [phoneCopyStatus, setPhoneCopyStatus] = useState("Copy Phone");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setEmailCopyStatus("Copied!");
      setTimeout(() => {
        setEmailCopyStatus("Copy Email");
      }, 5000);
    });
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone).then(() => {
      setPhoneCopyStatus("Copied!");
      setTimeout(() => {
        setPhoneCopyStatus("Copy Phone");
      }, 5000);
    });
  };

  return (
    <>
      {email && (
        <Button
          onClick={handleCopyEmail}
          className="px-3 py-1 mt-0 text-sm text-white bg-gray-900 rounded-lg hover:bg-gray-800"
        >
          {emailCopyStatus}
        </Button>
      )}
      {phone && (
        <Button
          onClick={handleCopyPhone}
          className="px-3 py-1 mt-0 text-sm text-white bg-gray-900 rounded-lg hover:bg-gray-800"
        >
          {phoneCopyStatus}
        </Button>
      )}
    </>
  );
};

export default CopyContactInfo;
