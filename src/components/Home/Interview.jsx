import styled from "styled-components";
import InterImg from "../../assets/bam4.jpg";

const Interview = () => {
  return (
    <Container>
      <Wrapper>
        <HoldDiv>
          <InterViewImage>
            <img src={InterImg} alt="" />
          </InterViewImage>
          <InterviewContent>
            <ContentHold>
              <Title>FEATURED INTERVIEW</Title>
              <hr />
              <SubTitle>INCOMING: ANDY KELLETT</SubTitle>
              <Content>
                Bury FC are excited to announce former Wigan Athletic player
                Andy Kellett will join the club for the upcoming campaign. The
                29-year-old has a wealth of experience to bring to Andy Welsh’s
                squad and can play in an array of positions including
                central-midfield as well as left-back/left-midfield.
              </Content>
              <strong>Updates Coming Soon...</strong>
            </ContentHold>
          </InterviewContent>
        </HoldDiv>
      </Wrapper>
    </Container>
  );
};

export default Interview;

const Container = styled.div`
  height: 75vh;
  width: 100%;
  background-color: #087cc5;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1320px) {
    height: 100%;
  }
`;
const Wrapper = styled.div`
  width: 85%;
  /* display: flex;
  justify-content: center; */
  margin: 10px 0;

  @media (max-width: 600px) {
    width: 95%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const HoldDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const InterViewImage = styled.div`
  height: 400px;
  width: 550px;
  background-color: azure;
  margin: 0 15px;
  img {
    width: 550px;
    height: 400px;
    object-fit: cover;
  }
  @media (max-width: 1320px) {
    margin-top: 20px;
  }
  @media (max-width: 600px) {
    width: 100%;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
`;
const InterviewContent = styled.div`
  width: 450px;
  margin: 0 15px;
  display: flex;
  align-items: center;
  @media (max-width: 1320px) {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
const ContentHold = styled.div``;
const Title = styled.div`
  font-weight: 800;
  font-size: 35px;
  @media (max-width: 600px) {
    font-size: 25px;
    font-weight: 900;
  }
`;
const SubTitle = styled.div`
  margin: 10px 0;
  font-size: 20px;
  font-weight: 800;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
const Content = styled.div`
  margin-bottom: 20px;
`;
