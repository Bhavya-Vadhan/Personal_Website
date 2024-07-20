import { IoGridOutline, IoCodeSlash, IoCameraOutline } from "react-icons/io5";
import { MdGraphicEq } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { FaLocationDot, FaEnvelopeOpenText } from "react-icons/fa6";
import project_one from "../assets/images/project-1.png"

const Data = [
    {
        id: 0,
        path: "",
        name: "About"
    },
    {
        id: 1,
        path: "Resume",
        name: "Resume"
    },
    {
        id: 2,
        path: "Works",
        name: "Works"
    },
    {
        id: 3,
        path: "Contact",
        name: "Contact"
    }
]

const service = [
    {
        id: 0,
        name: "Ui/Ux Design",
        icon: <IoGridOutline className="text-[#d566ff] w-9 h-9" />,
        background: "#fff4f4",
        para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat."
    },
    {
        id: 1,
        name: "Graphic Designing",
        icon: <MdGraphicEq className="text-[#ff6080] w-9 h-9" />,
        background: "#eef5fa",
        para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat."
    },
    {
        id: 2,
        name: "Photography",
        icon: <IoCameraOutline className="text-[#ff6080] w-9 h-9" />,
        background: "#eef5fa",
        para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat."
    },
    {
        id: 3,
        name: "Web Development",
        icon: <IoCodeSlash className="text-[#269fff] w-9 h-9" />,
        background: "#fff4f4",
        para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat."
    }
]

const info = [
    {
        id: 0,
        name: "Phone",
        icon: <FaMobileAlt className="w-5 h-5 text-[#e93b81]" />,
        detail: "9953447708"
    },
    {
        id: 1,
        name: "Email",
        icon: <FaEnvelopeOpenText className="w-5 h-5 text-[#6ab5b9]" />,
        detail: "Bhavyavadhan4@gmail.com"
    },
    {
        id: 2,
        name: "Location",
        icon: <FaLocationDot className="w-5 h-5 text-[#fd7590]" />,
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
        background: "#ff6464",
        percentage: "85%",
    },
    {
        id: 1,
        skill: "Graphic Design",
        background: "#9272d4",
        percentage: "90%",
    },
    {
        id: 2,
        skill: "React JS",
        background: "#5185d4",
        percentage: "50%",
    },
    {
        id: 3,
        skill: "Git & GitHub",
        background: "#ca56f2",
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