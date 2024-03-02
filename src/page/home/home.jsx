//import Style from "./home.module.css";
import Image from "./../../assets/ll.jpg";
import { GiGrapes } from "react-icons/gi";
import Contacts from "../../components/contacts/contacts";
import Portfolio from "../portfolio/portfolio";
import styled from "styled-components";

const ContainerPage = styled.div`
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
  }
`;
const ContainerName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 450px;
  margin-right: 450px;
  box-shadow: 2px 2px 2px 2px #fac7f6;
  border-radius: 10px;
  margin-top: 20px;
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    padding: 20px;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-weight: bolder;
  margin-left: 10px;
  margin-right: 10px;
  @media (max-width: 600px) {
    text-align: center;
    font-weight: bolder;
  }
`;

const Container1 = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  margin-left: 20px;
  margin-right: 20px;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ContainerText = styled.div`
  margin-left: 80px;
  margin-right: 80px;
  box-shadow: 2px 2px 2px 2px #fac7f6;
  border-radius: 10px;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    padding: 20px;
  }
`;

const Text = styled.p`
  text-align: center;
  margin: 20px;
`;

const ContainerContacts = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 80px;
  margin-right: 80px;
  @media (max-width: 600px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const ContainerPhoto = styled.div`
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Photo = styled.img`
  border-radius: 20px;
  height: 300px;
  box-shadow: 2px 2px 2px 2px #fac7f6;
  @media (max-width: 600px) {
  }
`;

export default function Home() {
  return (
    <ContainerPage>
      <ContainerName>
        <GiGrapes size={20} />
        <Title>Livia Luciani</Title>
        <GiGrapes size={20} />
      </ContainerName>
      <Container1>
        <ContainerText>
          <Text>
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
          </Text>
          <ContainerContacts>
            <Contacts />
          </ContainerContacts>
        </ContainerText>
        <ContainerPhoto>
          <Photo src={Image} alt="photo-LL" />
        </ContainerPhoto>
      </Container1>

      <Portfolio />
    </ContainerPage>
  );
}
