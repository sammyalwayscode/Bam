import styled from "styled-components";
import bgImg from "../../assets/lat2.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from "moment";

const CardDetail = () => {
  const [oneNewsFeeds, setOneNewsFeed] = useState({});
  const { id } = useParams();
  console.log(id);

  const getOneNewsFeed = async () => {
    const liveURL = "https://allstar-api.onrender.com";
    // const localURL = "http://localhost:2099"
    const URL = `${liveURL}/api/news/${id}`;
    await axios.get(URL).then((res) => {
      setOneNewsFeed(res.data.data);
    });
  };

  console.log(oneNewsFeeds);

  useEffect(() => {
    getOneNewsFeed();
  }, []);
  return (
    <Container>
      <Wrapper>
        <DetailImage
          style={{
            backgroundImage: `url(${oneNewsFeeds?.newsImage})`,
          }}
        >
          <MainCtrl>
            <Date>{moment(oneNewsFeeds?.createdAt).format("LLL")}</Date>
            <Info>{oneNewsFeeds?.title}</Info>
          </MainCtrl>
        </DetailImage>

        <DetailContent>
          <p>{oneNewsFeeds?.details}</p>

          <p>
            Posted By: <strong> {oneNewsFeeds?.reporterName} </strong>
          </p>
        </DetailContent>
      </Wrapper>
    </Container>
  );
};

export default CardDetail;

const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div``;
const DetailImage = styled.div`
  height: 70vh;
  background-color: cornflowerblue;
  /* background-image: url(${bgImg}); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const MainCtrl = styled.div`
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const Date = styled.div`
  margin-left: 20px;
`;
const Info = styled.div`
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 900;

  @media (max-width: 500px) {
    font-size: 30px;
  }
`;
const DetailContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    width: 90%;
  }
`;
