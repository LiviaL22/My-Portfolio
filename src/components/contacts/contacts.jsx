import Style from './contacts.module.css';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

export default function Contacts() {
    return(
        <>
        
        <div className={Style.contacts}>
            <a className={Style.link} href='https://github.com/LiviaL22' rel="noopener noreferrer" target='_blank'>
                <BsGithub/>
            </a>
            <a className={Style.link} href='https://www.linkedin.com/in/livia-luciani-b3a2981b0/' rel="noopener noreferrer" target='_blank'>
                <BsLinkedin/>
            </a>
            <a className={Style.link} href='https://www.instagram.com/livia_luciani22/'  rel="noopener noreferrer" target='_blank'>
               <BsInstagram/>
            </a>
        </div>
        
        </>
    )
}