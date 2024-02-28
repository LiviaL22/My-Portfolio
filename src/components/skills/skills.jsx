import Style from "./skills.module.css";
import { skillsData } from "./skillsData";

export default function Skills() {
  return (
    <>
      <div className={Style.skills}>
        {skillsData.map(({ id, icon }) => (
          <div key={id} className={Style.icon}>
            {icon}
          </div>
        ))}
      </div>
    </>
  );
}
