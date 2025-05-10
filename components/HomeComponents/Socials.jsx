import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaReddit,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/MenathNDGD" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/menath-nadungoda-910905286/",
  },
  { icon: <FaReddit />, path: "https://www.reddit.com/user/leoCheMess1090/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/_me_na_th_/" },
  { icon: <FaFacebook />, path: "https://facebook.com/meNaThNDGD/" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
