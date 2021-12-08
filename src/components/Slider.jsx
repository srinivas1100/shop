import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 80vh;
  width: 100%;
  background-color: #4a6d6d;
  position: relative;
  display: flex;
`;

const Arrow = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

const Slide = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`;

const DesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
`;

const Title = styled.h1`
  margin: 20px;
`;
const Desc = styled.h3`
  margin: 20px;
`;
const Button = styled.button`
  margin: 20px;
  border-radius: 15px;
  padding: 10px;
  background-color: #4756e2;
  :hover {
    background-color: red;
  }
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowBackIos></ArrowBackIos>
      </Arrow>

      <Slide>
        <ImgContainer>
          <Image src="https://images.unsplash.com/photo-1638176096256-47c8b2a03d65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
        </ImgContainer>
        <DesContainer>
          <Title>HEllo</Title>
          <Desc>egfvsjfsgsldfjhdh</Desc>
          <Button>Click Me</Button>
        </DesContainer>
      </Slide>

      <Arrow direction="right">
        <ArrowForwardIos></ArrowForwardIos>
      </Arrow>
    </Container>
  );
};

export default Slider;
