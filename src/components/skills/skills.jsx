import { skillsData } from "./skillsData";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 50px;
  padding-bottom: 50px;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding-top: 50px;
    padding-bottom: 50px;
    margin-right: 20px;
  }
`;

const IconSkill = styled.div`
  color: #fac7f6;
  font-size: 30px;
`;

export default function Skills() {
  return (
    <>
      <Container>
        {skillsData.map(({ id, icon }) => (
          <IconSkill key={id}>{icon}</IconSkill>
        ))}
      </Container>
    </>
  );
}
