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
  font-size: 30px;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
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
