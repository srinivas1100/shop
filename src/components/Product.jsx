import { Favorite, Search, ShopOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const InfoContainer = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transition: 1s;
`;


const Container = styled.div`
  min-width: 250px;
  margin: 5px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 1s ease;
  &:hover ${InfoContainer} {
    opacity: 1;
  }
`;


const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
`;
const IconButton = styled.div`
  border-radius: 50%;
  background-color: white;
  padding: 5px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover{
    background-color: white;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <InfoContainer>
        <Info>
          <IconButton>
            <Favorite></Favorite>
          </IconButton>
          <IconButton>
            <Link to={`/product/${item._id}`}><Search></Search></Link>
          </IconButton>
          <IconButton>
            <ShopOutlined></ShopOutlined>
          </IconButton>
        </Info>
      </InfoContainer>
    </Container>
  );
};

export default Product;

