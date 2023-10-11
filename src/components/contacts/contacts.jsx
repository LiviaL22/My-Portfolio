import Style from './contacts.module.css';
import { contactsData } from './contactsData';


export default function Contacts() {
    return(
        <>
        
        <div className={Style.contacts}>

            {contactsData.map(({id,link,icon})=>(

                    <a key={id} href={link} rel="noopener noreferrer" target='_blank'  className={Style.link} >
                        {icon}
                    </a>
              
            ))}
        
        </div>
        
        </>
    )
}