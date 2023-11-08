import Style from './skills.module.css';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { SiNetlify } from 'react-icons/si';
import { DiGithubFull } from 'react-icons/di';
import { SiWebpack } from 'react-icons/si';
import { FaNode } from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';

export default function Skills(){
    return(
        <>
        <div className={Style.skills}>

            <AiFillHtml5/>
            <FaCss3Alt/>
            <IoLogoJavascript/>
            <FaReact />
            <TbBrandReactNative/>
            <SiNetlify/>
            <DiGithubFull/>
            <SiWebpack/>
            <FaNode/>
            
        </div>
        </>
    )
}