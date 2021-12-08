import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as a from "@material-ui/core";
import { useSelector } from "react-redux";
import { ShoppingCartOutlined, Search } from "@material-ui/icons";

const Container = styled.div`
  height: 55px;
  padding: 5px;
`;
const Wraper = styled.div`
  height: 60px;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;
const Lang = styled.span`
  cursor: pointer;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid grey;
  padding: 5px;
  margin-left: 25px;
`;
const Input = styled.input`
  border: none;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 14;
  margin-left: 25px;
  margin-right: 10px;
`;

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);
  console.log(quantity)
  return (
    <Container>
      <Wraper>
        <Left>
          <Lang>EN</Lang>
          <SearchContainer>
            <Input />
            <Search />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>SHOP</Logo>
        </Center>
        <Right>
          <MenuItem>LOGIN</MenuItem>
          <MenuItem>SIGNIN</MenuItem>
          <MenuItem>
            <Link to='/cart'><a.Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined color="action" />
            </a.Badge></Link>
          </MenuItem>
        </Right>
      </Wraper>
    </Container>
  );
};

export default Navbar;
