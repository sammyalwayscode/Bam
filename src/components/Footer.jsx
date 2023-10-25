import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <span>BamBams Project</span>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 30px;
  background-color: #087cc5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
`;
