import React, { useState } from "react";
import styled from "styled-components";
import { RiHomeSmileFill } from "react-icons/ri";
import { IoMdPricetags, IoMdContact } from "react-icons/io";
import { HiShoppingCart } from "react-icons/hi";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { GiCancel } from "react-icons/gi";
import SideBar from "./Sidebar";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const toggleChange = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Logo>
            <h2>All Stars</h2>
          </Logo>

          <Navigations>
            <Navs to="/">
              <span>Home</span>
            </Navs>
            <Navs to="/pricing">
              <span>Ticket</span>
            </Navs>
            <Navs to="/contact">
              <span>News</span>
            </Navs>
            <Navs to="/contact">
              <span>Squard</span>
            </Navs>
            <Navs to="/contact">
              <span>Fixtures</span>
            </Navs>
            <Navs to="/contact">
              <span>Table</span>
            </Navs>
            <Navs to="/contact">
              <span>Shop</span>
            </Navs>

            <button
              style={{
                fontFamily: "Montserrat",
              }}
            >
              Sign Up
            </button>
          </Navigations>
          <Side>
            {toggle ? (
              <GiCancel onClick={toggleChange} size="25px" />
            ) : (
              <CgSmartHomeWashMachine onClick={toggleChange} size="25px" />
            )}
          </Side>
        </Wrapper>
      </Container>
      {toggle ? <SideBar setToggle={setToggle} toggle={toggle} /> : null}
    </>
  );
};

export default Header;
const Container = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 510px) {
    height: 65px;
  }
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  h2 {
    font-weight: 900;
  }
`;
const Navigations = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }

  button {
    padding: 10px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: poppins;
    background-color: #087cc5;
    border: none;
    outline: none;
    color: #fff;
    font-weight: 800;
  }
`;
const Navs = styled.div`
  color: #000;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  cursor: pointer;
  font-size: 15px;
  /* #F3F7F5
  #F3F7F5 */
  span {
    margin-left: 3px;
    font-weight: 600;
  }
`;

const Side = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;