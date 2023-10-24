import styled from "styled-components";

const Interview = () => {
  return (
    <Container>
      <Wrapper>
        <HoldDiv>
          <InterViewImage>
            <img src="" alt="" />
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
  background-color: #087cc5;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 85%;
  /* display: flex;
  justify-content: center; */
`;
const HoldDiv = styled.div`
  display: flex;
`;

const InterViewImage = styled.div`
  height: 400px;
  width: 600px;
  background-color: azure;
  margin: 0 15px;
`;
const InterviewContent = styled.div`
  width: 600px;
  margin: 0 15px;
  display: flex;
  align-items: center;
`;
const ContentHold = styled.div``;
const Title = styled.div``;
const SubTitle = styled.div``;
const Content = styled.div``;
