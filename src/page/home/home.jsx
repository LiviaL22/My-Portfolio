import Style from './home.module.css';
import Image from './../../assets/ll.jpg';
import { GiGrapes } from 'react-icons/gi';
import  Clock  from 'react-simple-clock';
import Contacts from '../../components/contacts/contacts';
import Portfolio from '../portfolio/portfolio';

export default function Home() {
   
    return(
        <>
       
        <h1 className={Style.title}>
            <GiGrapes/>
            Livia Luciani
            <GiGrapes/>
        </h1>

        <div className={Style.container1}>
            <Clock className={Style.clock} live={true} hourMarkFormat="number" mode="dark"  />
            <p className={Style.text}>
            Mi presento sono Livia, e sono sviluppatrice web. <br/> Negli ultimi anni ho coltivato una grande passione per l’ informatica tramandata dalla mia famiglia. <br/>Per lungo tempo ho lavorato nel campo della ristorazione, <br/> 
            diverse esperienze mi hanno insegnato la precisione, la puntualità e la determinazione, 
            oltre alla conoscenza dei vini e dell&apos;alta ristorazione.<br/> 
            Ma a 30 anni ho capito che volevo assecondare questo mio bisogno che è la tecnologia. <br/>
            L&apos;idea di poter creare qualcosa che prima non c&apos;era mi rende felice. <br/> 
            Così ho deciso di intraprendere gli studi nello sviluppo. <br/>
            Vorrei poter unire la mie passioni nel digitale.<br/>
            Di seguito i miei progetti.
      
            </p>
              <img className={Style.photo} src={Image} alt="photo-LL" />
        </div>

        <Contacts/>
        <Portfolio/>
    
        </>
    )
}
