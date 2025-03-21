"use client";

import { useState } from "react";
import { Copy, ClipboardCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

const CopyContactInfo = ({ email, phone }) => {
  const [emailCopyStatus, setEmailCopyStatus] = useState("Copy Email");
  const [phoneCopyStatus, setPhoneCopyStatus] = useState("Copy Phone");
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setEmailCopyStatus("Copied!");
      setEmailCopied(true);
      setTimeout(() => {
        setEmailCopyStatus("Copy Email");
        setEmailCopied(false);
      }, 5000);
    });
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone).then(() => {
      setPhoneCopyStatus("Copied!");
      setPhoneCopied(true);
      setTimeout(() => {
        setPhoneCopyStatus("Copy Phone");
        setPhoneCopied(false);
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
          {!emailCopied ? (
            <Copy className="inline-block w-4 h-4 mr-2" />
          ) : (
            <ClipboardCheck className="inline-block w-4 h-4 mr-2" />
          )}
          {emailCopyStatus}
        </Button>
      )}
      {phone && (
        <Button
          onClick={handleCopyPhone}
          className="px-3 py-1 mt-0 text-sm text-white bg-gray-900 rounded-lg hover:bg-gray-800"
        >
          {!phoneCopied ? (
            <Copy className="inline-block w-4 h-4 mr-2" />
          ) : (
            <ClipboardCheck className="inline-block w-4 h-4 mr-2" />
          )}
          {phoneCopyStatus}
        </Button>
      )}
    </>
  );
};

export default CopyContactInfo;
