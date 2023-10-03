import Style from './home.module.css';
import Image from './../../assets/ll.jpg';
import { GiGrapes } from 'react-icons/gi';
import { Clock } from 'react-clock';
import { useEffect, useState } from 'react';
import 'react-clock/dist/Clock.css';
import Contacts from '../../components/contacts/contacts';

export default function Home() {
    const [value, setValue] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);

    return(
        <>
       
        <h1 className={Style.title}>
            <GiGrapes/>
            Livia Luciani
            <GiGrapes/>
        </h1>

        <div className={Style.container1}>
            <Clock className={Style.clock} value={value} />
            <p className={Style.text}>
            Ho amato e lavorato nel campo della ristorazione per più di un decennio, <br/> 
            diverse esperienze mi hanno insegnato la precisione, la puntualità e la determinazione, <br/> 
            oltre alla conoscenza dei vini e dell&apos;alta ristorazione ma ho sempre avuto <br/> 
            una grande passione per l’ informatica tramandata dalla mia famiglia. <br/>
            A 30 anni ho capito che avevo bisogno di assecondare questo mio bisogno. <br/>
            L&apos;idea di poter creare qualcosa che prima non c&apos;era mi rende felice. <br/> 
            Così ho deciso di studiare per diventare sviluppatrice front-end. <br/>
            Vorrei poter unire la mia passione per la natura e la forte propensione ai diritti umani nel digitale.<br/>
            Nella pagina portfolio troverete i miei progetti.
            </p>
            <img className={Style.photo} src={Image} alt="photo-LL" />
        </div>

        <Contacts/>
    
        </>
    )
}
