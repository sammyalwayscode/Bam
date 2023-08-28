import React from "react";
import { styled } from "styled-components";

const HeroPage = () => {
  return (
    <Container>
      <Section01>Section 1</Section01>
      <Section02>Section 2</Section02>
    </Container>
  );
};

export default HeroPage;

const Container = styled.div`
  height: 85vh;
  width: 100%;
  display: flex;
`;
const Section01 = styled.div`
  height: 85vh;
  width: 50vw;
  background-color: darkred;
`;
const Section02 = styled.div`
  height: 85vh;
  width: 50vw;
  background-color: darkcyan;
`;
