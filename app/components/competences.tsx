import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaJenkins } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";

export default function Competences() {
    return (
      <>
      <FaHtml5 size={40} color="orange" />
      <FaCss3Alt size={40} color="blue" />
      <FaJava size={40} color="red" />
      <IoLogoJavascript size={40} color="yellow" />
      <FaNode size={40} color="green" />
      <FaGithubAlt size={40} color="black" />
      <FaDocker size={40} color="blue" />
      <FaJenkins size={40} color="orange" />
      <FaReact size={40} color="cyan" />
      <RiTailwindCssFill size={40} color="teal" />
      <SiMysql size={40} color="navy" />

      </>
    )
}