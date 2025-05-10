import ContactForm from "@/components/ContactComponents/ContactForm";
import ContactInfoList from "@/components/ContactComponents/ContactInfoList";
import MotionWrapper from "@/components/CommonComponents/MotionWrapper";

import info from "@/data/contactPageData";

export const metadata = {
  title: "Menath Nadungoda | Contact",
  description:
    "Contact me for any inquiries or to discuss your project requirements.",
  keywords:
    "Menath Nadungoda, Menath, Nadungoda, contact, contact me, contact form, contact information, contact details, contact page, contact form submission, contact form submission success, contact form submission failed",
};

const Contact = () => {
  return (
    <MotionWrapper as="section" className={"py-6"}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="order-2 xl:order-none xl:w-[58%]">
            <ContactForm />
          </div>
          <div className="flex items-center flex-1 order-1 mb-8 xl:justify-end xl:order-none xl:mb-0">
            <ContactInfoList info={info} />
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
};

export default Contact;
