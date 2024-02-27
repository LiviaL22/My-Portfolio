import Style from "./portfolio.module.css";
import Skills from "../../components/skills/skills";
import { portfolioData } from "./portfolioData";
import { BsPersonWorkspace } from "react-icons/bs";

export default function Portfolio() {
  return (
    <>
      <div className={Style.containerName}>
        <BsPersonWorkspace size={30} />
        <h1 className={Style.title}>Portfolio</h1>
        <BsPersonWorkspace size={30} />
      </div>

      <Skills />

      <div className={Style.containerSkills}>
        {portfolioData.map(({ id, image, description, link }) => (
          <div key={id}>
            <a href={link} target="_blank" rel="noreferrer">
              <img className={Style.photo} src={image} alt={description} />
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
