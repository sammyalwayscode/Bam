import styled from "styled-components";
import MenImage from "../../assets/menTeam.jpg";

const MenClub = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Our Men Team</Title>
        <ImageHold>
          <img src={MenImage} alt="" />
        </ImageHold>
      </Wrapper>
    </Container>
  );
};

export default MenClub;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
const Wrapper = styled.div`
  width: 85%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const Title = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 10px;
`;
const ImageHold = styled.div`
  width: 100%;
  height: 400px;
  background-color: yellowgreen;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`;
