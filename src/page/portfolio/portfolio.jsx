import Style from './portfolio.module.css';
import Skills from '../../components/skills/skills';
import { portfolioData } from './portfolioData';
import { BsPersonWorkspace } from 'react-icons/bs';
 

export default function Portfolio() {
    return(
        <>
        <h1 className={Style.title}>
            <BsPersonWorkspace/>
            Portfolio
            <BsPersonWorkspace/>
            </h1>

        <Skills/>

        <div className={Style.container}>

            {portfolioData.map(({id,image,description,link})=>(
               <div key={id}>
                 <a href={link}  target='_blank' rel='noreferrer'>
                    <img className={Style.photo} src={image} alt={description} />
                 </a>
               </div> 
            ))}

        </div>   

    

       
        </>
    )
}


