import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; 

const socials = [
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/cpriyadasun", 
  },
  {
    icon: <FaGithub />,
    path: "https://github.com/PriyadasunKC",
  },
  {
    icon: <FaEnvelope />,
    path: "mailto:cpriyadasun@gmail.com", 
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
