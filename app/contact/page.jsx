import ContactForm from "@/components/ContactForm";
import ContactInfoList from "@/components/ContactInfoList";
import MotionWrapper from "@/components/MotionWrapper";

import info from "@/data/contactPageData";

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
