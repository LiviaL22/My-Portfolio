import Style from "./home.module.css";
import Image from "./../../assets/ll.jpg";
import { GiGrapes } from "react-icons/gi";
import Clock from "react-simple-clock";
import Contacts from "../../components/contacts/contacts";
import Portfolio from "../portfolio/portfolio";

export default function Home() {
  return (
    <div className={Style.page}>
      <div className={Style.containerName}>
        <GiGrapes size={30} />
        <h1 className={Style.title}>Livia Luciani</h1>
        <GiGrapes size={30} />
      </div>
      <div className={Style.container1}>
        <Clock
          className={Style.clock}
          live={true}
          hourMarkFormat="number"
          mode="dark"
        />
        <div className={Style.ContainerText}>
          <p className={Style.text}>
            Mi presento sono Livia, e sono junior front-end developer. <br />{" "}
            Negli ultimi anni ho coltivato una grande passione per l’
            informatica tramandata dalla mia famiglia. <br />
            Per lungo tempo ho lavorato nel campo della ristorazione, <br />
            diverse esperienze mi hanno insegnato la precisione, la puntualità e
            la determinazione, oltre alla conoscenza dei vini e dell&apos;alta
            ristorazione.
            <br />
            Poi ho capito che volevo assecondare questo mio bisogno che è la
            tecnologia. <br />
            L&apos;idea di poter creare qualcosa che prima non c&apos;era mi
            rende felice. <br />
            Così ho deciso di intraprendere gli studi nello sviluppo. <br />
            Vorrei poter unire la mie passioni nel digitale.
            <br />
            Di seguito i miei progetti.
          </p>
        </div>
        <img className={Style.photo} src={Image} alt="photo-LL" />
      </div>

      <Contacts />
      <Portfolio />
    </div>
  );
}
