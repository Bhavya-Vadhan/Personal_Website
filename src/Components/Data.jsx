import { IoGridOutline, IoCodeSlash, IoCameraOutline } from "react-icons/io5"
import { MdGraphicEq } from "react-icons/md"
import { FaMobileAlt, FaRegAddressCard } from "react-icons/fa"
import { FaLocationDot, FaEnvelopeOpenText } from "react-icons/fa6"
import { RiFileUserLine } from "react-icons/ri"
import { IoBriefcaseOutline, IoNewspaperOutline } from "react-icons/io5"
import project_one from "../assets/images/project-1.png"

const Data = [
    {
        id: 0,
        path: "",
        icon: <FaRegAddressCard className="w-6 h-6" />,
        name: "About"
    },
    {
        id: 1,
        path: "Resume",
        icon: <RiFileUserLine className="w-6 h-6" />,
        name: "Resume"
    },
    {
        id: 2,
        path: "Works",
        icon: <IoBriefcaseOutline className="w-6 h-6" />,
        name: "Works"
    },
    {
        id: 3,
        path: "Contact",
        icon: <IoNewspaperOutline className="w-6 h-6" />,
        name: "Contact"
    }
]

const service = [
    {
        id: 0,
        name: "Ui/Ux Design",
        icon: <IoGridOutline className="text-main w-9 h-9" />,
        background: "#fff4f4",
        para: "UI/UX design creates intuitive, efficient, and visually appealing user interfaces and experiences, enhancing satisfaction and usability of digital products."
    },
    {
        id: 1,
        name: "Graphic Designing",
        icon: <MdGraphicEq className="text-main w-9 h-9" />,
        background: "#eef5fa",
        para: "Graphic design creates visual content to convey messages, using typography, imagery, color, and layout to enhance communication across various media."
    },
    {
        id: 2,
        name: "Photography",
        icon: <IoCameraOutline className="text-main w-9 h-9" />,
        background: "#eef5fa",
        para: "Photography is the art and practice of capturing images using a camera to create visual representations of moments, scenes, or subjects."
    },
    {
        id: 3,
        name: "Web Development",
        icon: <IoCodeSlash className="text-main w-9 h-9" />,
        background: "#fff4f4",
        para: "Web development involves building and maintaining websites, focusing on coding, design, and functionality to ensure optimal user experience and performance."
    }
]

const info = [
    {
        id: 0,
        name: "Phone",
        icon: <FaMobileAlt className="w-5 h-5 text-main dark:text-white" />,
        detail: "9953447708"
    },
    {
        id: 1,
        name: "Email",
        icon: <FaEnvelopeOpenText className="w-5 h-5 text-main dark:text-white" />,
        detail: "Bhavyavadhan4@gmail.com"
    },
    {
        id: 2,
        name: "Location",
        icon: <FaLocationDot className="w-5 h-5 text-main dark:text-white" />,
        detail: "New Delhi, India"
    }
]

const education = [
    {
        id: 0,
        date: "2020-2022",
        heading: "Arena Animation - Diploma",
        location: "New Delhi, India"
    },
    {
        id: 1,
        date: " 2016-2017",
        heading: "Senior Secondary - NIOS",
        location: "New Delhi, India"
    }
]

const experience = [
    {
        id: 0,
        date: "2022-2024",
        designation: "Graphic and Web Developer",
        company: "Meta 11 Web Services",
        background: "#eef5fa"
    }
]

const skills = [
    {
        id: 0,
        skill: "Web Design",
        percentage: "85%",
    },
    {
        id: 1,
        skill: "Graphic Design",
        percentage: "90%",
    },
    {
        id: 2,
        skill: "React JS",
        percentage: "50%",
    },
    {
        id: 3,
        skill: "Git & GitHub",
        percentage: "72%",
    }
]

const knowledges = [
    {
        id: 0,
        name: "Communication"
    },
    {
        id: 1,
        name: "Web Design"
    },
    {
        id: 2,
        name: "Time Management"
    },
    {
        id: 3,
        name: "Flexibility"
    },
    {
        id: 4,
        name: "Problem Solving"
    }
]

const portfolio = [
    {
        id: 0,
        category: "Marketing",
        name: "WebTeck Technologies",
        image: project_one,
        path: "https://reactjs-portfolio-website-rust.vercel.app",
        Technologies: ["React JS", "Tailwind", "Git & GitHub"],
        background: "#F0EBE3"
    },
    {
        id: 1,
        category: "Marketing",
        name: "WebTeck Technologies",
        image: project_one,
        path: "https://reactjs-portfolio-website-rust.vercel.app",
        Technologies: ["React JS", "Tailwind", "Git & GitHub"],
        background: "#F6E6CB"
    },
    {
        id: 2,
        category: "Marketing",
        name: "WebTeck Technologies",
        image: project_one,
        path: "https://reactjs-portfolio-website-rust.vercel.app",
        Technologies: ["React JS", "Tailwind", "Git & GitHub"],
        background: "#F6E6CB"
    },
    {
        id: 3,
        category: "Marketing",
        name: "WebTeck Technologies",
        image: project_one,
        path: "https://reactjs-portfolio-website-rust.vercel.app",
        Technologies: ["React JS", "Tailwind", "Git & GitHub"],
        background: "#F0EBE3"
    }
]

export { Data, service, info, education, experience, skills, knowledges, portfolio }