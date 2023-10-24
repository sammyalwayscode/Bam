import styled from "styled-components";
import ImgOne from "../../../assets/lat2.jpg";

const Latest = () => {
  return (
    <Container>
      <Wrapper>
        <DateInfo>
          <DateDiv>{Date.now()}</DateDiv>
          <InfoDiv>Latest News</InfoDiv>
          <hr />
        </DateInfo>

        <CardCtrl>
          <MainHold>
            <CardDiv>
              <CardImage>
                <img src={ImgOne} alt="" />
              </CardImage>
              <CardHold>
                <PostTime>2 minutes ago</PostTime>
                <Title>INCOMING: HARRY WRIGHT</Title>
                <ShortDesc>
                  We are delighted to announce the signing of goalkeeper Harry
                  Wright. The 24-year-old, came through
                </ShortDesc>
                <strong>Continue Reading</strong>
              </CardHold>
            </CardDiv>
            <CardDiv>
              <CardImage>
                <img src="" alt="" />
              </CardImage>
              <CardHold>
                <PostTime>2 minutes ago</PostTime>
                <Title>INCOMING: HARRY WRIGHT</Title>
                <ShortDesc>
                  We are delighted to announce the signing of goalkeeper Harry
                  Wright. The 24-year-old, came through
                </ShortDesc>
                <strong>Continue Reading</strong>
              </CardHold>
            </CardDiv>
            <CardDiv>
              <CardImage>
                <img src="" alt="" />
              </CardImage>
              <CardHold>
                <PostTime>2 minutes ago</PostTime>
                <Title>INCOMING: HARRY WRIGHT</Title>
                <ShortDesc>
                  We are delighted to announce the signing of goalkeeper Harry
                  Wright. The 24-year-old, came through
                </ShortDesc>
                <strong>Continue Reading</strong>
              </CardHold>
            </CardDiv>
            <CardDiv>
              <CardImage>
                <img src="" alt="" />
              </CardImage>
              <CardHold>
                <PostTime>2 minutes ago</PostTime>
                <Title>INCOMING: HARRY WRIGHT</Title>
                <ShortDesc>
                  We are delighted to announce the signing of goalkeeper Harry
                  Wright. The 24-year-old, came through
                </ShortDesc>
                <strong>Continue Reading</strong>
              </CardHold>
            </CardDiv>
          </MainHold>
        </CardCtrl>
      </Wrapper>
    </Container>
  );
};

export default Latest;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
const Wrapper = styled.div`
  width: 85%;
`;
const DateInfo = styled.div`
  hr {
    height: 1px;
    background-color: #dfdfdf;
    border: none;
  }
`;
const DateDiv = styled.div`
  color: #9595af;
  font-size: 18px;
  font-weight: 600;
`;
const InfoDiv = styled.div`
  color: #087cc5;
  font-size: 35px;
  font-weight: 800;
  text-transform: uppercase;
`;

const CardCtrl = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: red; */
`;

const MainHold = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CardDiv = styled.div`
  height: 320px;
  width: 265px;
  /* background-color: cyan; */
  margin: 10px;

  @media (max-width: 500px) {
    justify-content: center;
  }
`;

const CardImage = styled.div`
  height: 180px;
  width: 265px;
  background-color: azure;

  img {
    width: 265px;
    height: 180px;
    object-fit: cover;
  }
`;

const CardHold = styled.div`
  strong {
    font-size: 14px;
    font-weight: 800;
  }
`;
const PostTime = styled.div`
  font-size: 12px;
  font-weight: 600;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 800;
`;
const ShortDesc = styled.div`
  font-size: 13px;
  color: #736f6f;
  margin-bottom: 10px;
`;
