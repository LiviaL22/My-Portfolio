import Style from './skills.module.css';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { SiNetlify } from 'react-icons/si';
import { DiGithubFull } from 'react-icons/di';


export default function Skills(){
    return(
        <>
        <div className={Style.skills}>

            <AiFillHtml5/>
            <FaCss3Alt/>
            <IoLogoJavascript/>
            <FaReact/>
            <SiNetlify/>
            <DiGithubFull/>
            
        </div>
        </>
    )
}