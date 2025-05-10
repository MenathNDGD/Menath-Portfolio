"use client";

const ContactInfoList = ({ info }) => {
  const handleAction = (action) => {
    switch (action) {
      case "call":
        window.location.href = "tel:+94765493072";
        break;
      case "email":
        window.location.href = "mailto:nadungmenath1@gmail.com";
        break;
      case "location":
        window.open(
          "https://www.google.com/maps/search/?api=1&query=Colombo,+Sri+Lanka",
          "_blank"
        );
        break;
      case "linkedin":
        window.open("https://www.linkedin.com/in/menath-ndgd/", "_blank");
        break;
      case "github":
        window.open("https://github.com/MenathNDGD", "_blank");
        break;
      default:
        console.warn("Unknown action:", action);
    }
  };

  return (
    <ul className="flex flex-col gap-10">
      {info.map((item, index) => (
        <li key={index} className="flex items-center gap-6">
          <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-full flex items-center justify-center">
            <div className="text-[28px]">{item.icon}</div>
          </div>
          <div
            className="flex-1 cursor-pointer"
            onClick={() => handleAction(item.action)}
          >
            <p className="text-white/60">{item.title}</p>
            <h3 className="text-xl">{item.description}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactInfoList;
