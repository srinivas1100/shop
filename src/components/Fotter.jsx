import React from 'react'
import styled from 'styled-components';
import { Room, Phone, Email } from '@material-ui/icons'

const Container = styled.div`
    padding: 10px;
    display: flex;
`;
const Left = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;
const Logo = styled.h2`
    color: teal;
    padding: 10px;
`;
const Des = styled.p``;
const Center = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;
const CenterHeading = styled.h3`
  padding: 10px;
`;
const Right = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;

`;
const ListItem = styled.li`
    width: 50%;
`;
const RightHeading = styled.h3`
padding: 10px`;
const ContactContainer = styled.div`
  display: flex;

`;
const Icon = styled.div`
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 5px;
`;
const Details = styled.p`
  color: teal;
`;


const Fotter = () => {
    return (
        <Container>
            <Left>
                <Logo>SHOP</Logo>
                <Des>There are many variations of passages of Lorem ipsum available.  but the majority have suffered alteration in some form. by injected humour, or randomised words which do not look even slightly.............</Des>
            </Left>
            <Center>
                <CenterHeading>Useful Links</CenterHeading>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>WishList</ListItem>
                    <ListItem>Term</ListItem>
                </List>
            </Center>
            <Right>
                <RightHeading>Contact</RightHeading>
                <ContactContainer><Icon><Room /></Icon><Details>633, 12-132 main road</Details></ContactContainer>
                <ContactContainer><Icon><Phone /></Icon><Details>+91 9505962262</Details></ContactContainer>
                <ContactContainer><Icon><Email /></Icon><Details>Srinnu11112000@gmail.com</Details></ContactContainer>
            </Right>
        </Container>
    )
}

export default Fotter
