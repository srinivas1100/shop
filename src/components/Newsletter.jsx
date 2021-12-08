import { Send } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #c8ffff;
  height: 30vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
    color: grey;
`;
const Description = styled.p`
    padding: 20px;
`;
const InputContainer = styled.div`
    display: flex;
`;
const TextField = styled.input`
  padding-right: 10px;
`;
const IconButton = styled.div`
    background-color: grey;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin-left: 10px;
`;

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favorite products</Description>
            <InputContainer>
                <TextField></TextField>
                <IconButton>
                    <Send></Send>
                </IconButton>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
