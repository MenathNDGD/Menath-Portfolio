import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+94) 76 549 3072",
    action: () => (window.location.href = "tel:+94765493072"),
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "nadungmenath1@gmail.com",
    action: () => (window.location.href = "mailto:nadungmenath1@gmail.com"),
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Location",
    description: "Colombo, Sri Lanka",
    action: () =>
      window.open(
        "https://www.google.com/maps/search/?api=1&query=Colombo,+Sri+Lanka",
        "_blank"
      ),
  },
];

export default info;
