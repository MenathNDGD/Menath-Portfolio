import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

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
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    description: "Connect with me on LinkedIn",
    action: () =>
      window.open("https://www.linkedin.com/in/menath-ndgd/", "_blank"),
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    description: "Check out my GitHub",
    action: () => window.open("https://github.com/MenathNDGD", "_blank"),
  },
];

export default info;
