import styled from "styled-components";
import ImgOne from "../../../assets/lat2.jpg";
import ImgTwo from "../../../assets/lat3.jpg";
import ImgThree from "../../../assets/lat4.jpg";
import ImgFour from "../../../assets/lat5.jpg";
import moment from "moment";

const Latest = () => {
  return (
    <Container>
      <Wrapper>
        <DateInfo>
          <DateDiv> {moment().format("MMMM Do YYYY")} </DateDiv>
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
                <PostTime>25th October, 2023</PostTime>
                <Title>The Friendly Live Match</Title>
                <ShortDesc>
                  We are delighted to announce the signing of goalkeeper Harry
                  Wright. The 24-year-old, came through
                </ShortDesc>
                <strong>Continue Reading</strong>
              </CardHold>
            </CardDiv>
            <CardDiv>
              <CardImage>
                <img src={ImgTwo} alt="" />
              </CardImage>
              <CardHold>
                <PostTime>20th October, 2023</PostTime>
                <Title>Our Fanbase Excitment</Title>
                <ShortDesc>
                  We are delighted to announce the signing of goalkeeper Harry
                  Wright. The 24-year-old, came through
                </ShortDesc>
                <strong>Continue Reading</strong>
              </CardHold>
            </CardDiv>
            <CardDiv>
              <CardImage>
                <img src={ImgThree} alt="" />
              </CardImage>
              <CardHold>
                <PostTime>17th October, 2023</PostTime>
                <Title>A Better Rematch</Title>
                <ShortDesc>
                  We are delighted to announce the signing of goalkeeper Harry
                  Wright. The 24-year-old, came through
                </ShortDesc>
                <strong>Continue Reading</strong>
              </CardHold>
            </CardDiv>
            <CardDiv>
              <CardImage>
                <img src={ImgFour} alt="" />
              </CardImage>
              <CardHold>
                <PostTime>09th October, 2023</PostTime>
                <Title>The Best Stadium</Title>
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
  /* background-color: red; */
`;
const Wrapper = styled.div`
  width: 85%;
  /* background-color: darkgoldenrod; */

  @media (max-width: 500px) {
    width: 95%;
  }
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
  width: 250px;
  /* background-color: cyan; */
  margin: 5px;

  @media (max-width: 500px) {
    justify-content: center;
    width: 100%;
  }
`;

const CardImage = styled.div`
  height: 180px;
  width: 250px;
  background-color: azure;

  img {
    width: 250px;
    height: 180px;
    object-fit: cover;

    @media (max-width: 500px) {
      width: 100%;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const CardHold = styled.div`
  strong {
    font-size: 14px;
    font-weight: 800;
    color: #087cc5;
  }
`;
const PostTime = styled.div`
  font-size: 12px;
  font-weight: 600;
`;
const Title = styled.div`
  font-size: 17px;
  font-weight: 800;
  text-transform: uppercase;
`;
const ShortDesc = styled.div`
  font-size: 13px;
  color: #736f6f;
  margin-bottom: 10px;
`;
