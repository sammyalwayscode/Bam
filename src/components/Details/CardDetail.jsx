import styled from "styled-components";
import bgImg from "../../assets/lat2.jpg";

const CardDetail = () => {
  return (
    <Container>
      <Wrapper>
        <DetailImage>
          <MainCtrl>
            <Date>21st Oct 2023</Date>
            <Info>INCOMING: HARRY WRIGHT</Info>
          </MainCtrl>
        </DetailImage>

        <DetailContent>
          <p>
            The 24-year-old, came through the ranks at Ipswich Town before
            moving to Fleetwood Town, where he left in 2022. He’s also played
            for Cheadle Town earlier this month, making two appearances, one in
            a league fixture against AFC Liverpool and the other in the Macron
            Cup vs Sandbach United. Harry is the son of former professional
            goalkeeper Richard Wright.
          </p>

          <p>
            Posted By: <strong>Olorunda Samuel</strong>
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
  background-image: url(${bgImg});
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
