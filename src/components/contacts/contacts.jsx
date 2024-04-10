import { contactsData } from "./contactsData";
import styled from "styled-components";

const IconContact = styled.a`
  font-size: 30px;
  color: #783c8e;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;
const ContainerIcon = styled.div`
  display: flex;
  justify-content: space-around;
  margin-right: 20px;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-right: 20px;
  }
`;

export default function Contacts() {
  return (
    <>
      {contactsData.map(({ id, link, icon }) => (
        <ContainerIcon>
          <IconContact
            key={id}
            href={link}
            rel="noopener noreferrer"
            target="_blank"
          >
            {icon}
          </IconContact>
        </ContainerIcon>
      ))}
    </>
  );
}
