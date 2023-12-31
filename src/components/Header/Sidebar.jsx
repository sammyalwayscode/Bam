import { Link } from "react-router-dom";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const SideBar = ({ setToggle }) => {
  return (
    <Container>
      <Wrapper>
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <Navs
            to="/"
            onClick={() => {
              setToggle(false);
            }}
          >
            <span>Home</span>
          </Navs>
        </Link>
        <Navs
          onClick={() => {
            setToggle(false);
          }}
        >
          <span>Tickets</span>
        </Navs>
        <Navs
          onClick={() => {
            setToggle(false);
          }}
        >
          <span>News</span>
        </Navs>
        <Link
          to="/newpost"
          style={{
            textDecoration: "none",
          }}
        >
          <Navs
            onClick={() => {
              setToggle(false);
            }}
          >
            <button>Post Report</button>
          </Navs>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  /* align-items: center; */
  font-family: poppins;
  font-weight: 600;
  position: fixed;
  z-index: 10;
`;
const Wrapper = styled.div``;
const Navs = styled.div`
  text-decoration: none;
  margin: 25px 0;
  color: #fff;
  display: flex;
  font-size: 16px;
  justify-content: center;
  align-items: center;

  button {
    height: 30px;
    width: 150px;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: poppins;
    background-color: #087cc5;
    border: none;
    outline: none;
    color: #fff;
    font-weight: 600;
    transition: all 350ms;
    cursor: pointer;
    :hover {
      transform: scale(0.94);
    }
  }
  :hover {
    color: #ffb400;
  }

  &.active {
    color: #087cc5;
  }

  span {
    margin-left: 5px;
  }
`;
