//import Style from "./footer.module.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  color: #e66a72;
  margin-top: 10px;
`;

export default function footer() {
  return (
    <>
      <Container>
        <small> Livia Luciani &copy; 2023 </small>
      </Container>
    </>
  );
}
