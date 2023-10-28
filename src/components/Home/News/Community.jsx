import styled from "styled-components";
// import ImgOne from "../../../assets/lat1.jpeg";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";

const Community = () => {
  const [newsFeeds, setNewsFeed] = useState([]);

  const getProduct = async () => {
    const URL = "http://localhost:2099/api/allnewsfeed";
    await axios.get(URL).then((res) => {
      setNewsFeed(res.data.data);
    });
  };

  console.log(newsFeeds);

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Container>
      <Wrapper>
        <DateInfo>
          <DateDiv>{Date.now()}</DateDiv>
          <InfoDiv>Community News</InfoDiv>
          <hr />
        </DateInfo>

        <CardCtrl>
          <MainHold>
            {newsFeeds?.map(({ _id, newsImage, createdAt, title, details }) => (
              <CardDiv key={_id}>
                <CardImage>
                  <img src={newsImage} alt="" />
                </CardImage>
                <CardHold>
                  <PostTime> {moment(createdAt).fromNow()} </PostTime>
                  <Title>{title}</Title>
                  <ShortDesc>{details}</ShortDesc>
                  <strong>Continue Reading</strong>
                </CardHold>
              </CardDiv>
            ))}
          </MainHold>
        </CardCtrl>
      </Wrapper>
    </Container>
  );
};

export default Community;

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
  width: 250px;
  /* background-color: cyan; */
  margin: 10px 5px;

  @media (max-width: 500px) {
    justify-content: center;
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
