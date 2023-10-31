import { styled } from "styled-components";
// import Hero1 from "../../assets/hero1.jpg";
import Hero2 from "../../assets/hero2.jpg";
import Hero3 from "../../assets/hero3.jpg";

const HeroPage = () => {
  return (
    <Container>
      <Section01>
        <SectionContent>
          <SectionCintentHold>
            <ContentDate>04th Sep 2023</ContentDate>
            <ContentTitle>
              Match Info. Wythenshawe FC (A), Tue 5th Sep, 7.45pm CAT
            </ContentTitle>
            <SectionButtons>
              <Btn1>Latest News</Btn1>
              <Btn2>Read This Post</Btn2>
            </SectionButtons>
          </SectionCintentHold>
        </SectionContent>
      </Section01>
      <Section02>
        <SectionContent>
          <SectionCintentHold>
            <ContentDate>30th Aug 2023</ContentDate>
            <ContentTitle>
              Treasureline: Week 14, Community Series Comming Up
            </ContentTitle>
            <SectionButtons>
              <Btn1>Community News</Btn1>
              <Btn2>Read This Post</Btn2>
            </SectionButtons>
          </SectionCintentHold>
        </SectionContent>
      </Section02>
    </Container>
  );
};

export default HeroPage;

const Container = styled.div`
  height: 85vh;
  width: 100%;
  display: flex;
  /* flex-wrap: wrap; */
  margin-bottom: 20px;
  @media (max-width: 800px) {
    flex-direction: column;
    height: 100%;
  }
`;
const Section01 = styled.div`
  height: 85vh;
  width: 50vw;
  background-image: url(${Hero3});
  background-position: center;
  background-size: cover;
  @media (max-width: 800px) {
    width: 100vw;
  }
`;
const Section02 = styled.div`
  height: 85vh;
  width: 50vw;
  background-image: url(${Hero2});
  background-position: center;
  background-size: cover;
  @media (max-width: 800px) {
    width: 100vw;
  }
`;

const SectionContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
const SectionCintentHold = styled.div`
  width: 75%;
`;
const ContentDate = styled.div`
  font-size: 14px;
  font-weight: 700;
`;
const ContentTitle = styled.div`
  font-size: 40px;
  font-weight: 900;
  line-height: normal;

  @media (max-width: 800px) {
    font-size: 30px;
  }
  @media (max-width: 500px) {
    font-size: 25px;
  }
`;
const SectionButtons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  @media (max-width: 800px) {
    margin-top: 10px;
  }
`;
const Btn1 = styled.div`
  height: 35px;
  width: 150px;
  background-color: #087cc5;
  margin-right: 30px;
  border-radius: 2px;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 350ms;
  :hover {
    transform: scale(1.1);
  }
`;
const Btn2 = styled.div`
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
  width: 120px;
`;
