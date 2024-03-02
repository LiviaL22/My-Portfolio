//import Style from "./portfolio.module.css";
import Skills from "../../components/skills/skills";
import { portfolioData } from "./portfolioData";
import { BsPersonWorkspace } from "react-icons/bs";
import styled from "styled-components";

const ContainerName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 2px 2px#fac7f6;
  border-radius: 10px;
  margin-left: 450px;
  margin-right: 450px;
  margin-top: 50px;
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
const ContainerProg = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const TitlePro = styled.h3`
  text-align: center;
  font-weight: bolder;
  margin-left: 10px;
  margin-right: 10px;
  @media (max-width: 600px) {
    text-align: center;
    font-weight: bolder;
  }
`;
const Project = styled.img`
  height: 150px;
  border-radius: 20px;
  box-shadow: 2px 2px 2px 2px #fac7f6;
  margin-left: 30px;
  margin-top: 20px;
  @media (max-width: 600px) {
    height: 120px;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px #fac7f6;
  }
`;
export default function Portfolio() {
  return (
    <>
      <ContainerName>
        <BsPersonWorkspace size={20} />
        <Title>Portfolio</Title>
        <BsPersonWorkspace size={20} />
      </ContainerName>

      <Skills />

      <ContainerProg>
        {portfolioData.map(({ id, image, title, description, link }) => (
          <div key={id}>
            <TitlePro>{title}</TitlePro>
            <a href={link} target="_blank" rel="noreferrer">
              <Project src={image} alt={description} />
            </a>
          </div>
        ))}
      </ContainerProg>
    </>
  );
}
