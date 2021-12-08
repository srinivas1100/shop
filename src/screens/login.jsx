import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background:linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://images.unsplash.com/photo-1633113214866-961efd94c84d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60") center;
`;
const Wrapper = styled.div`
width: 30%;
padding: 20px;
background-color: white;
`;
const Form = styled.form`
display: flex;
flex-direction: column;
//flex-wrap: wrap;
`;
const Title = styled.h1`
font-size: 24px;
font-weight:300;
`;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px;
padding: 10px;
`;

const Button = styled.button`
width: 40%;
border: none;
padding: 10px;
background-color: #7ed4d4;
&:hover{
    background-color: teal;
    border: none;
}
`;

const Link = styled.a`
margin: 5px;
font-style: 12px;
text-decoration: underline;
cursor: pointer;
`;


const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>LOGIN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>Login</Button>
                    <Link>FORGET PASSWORD</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
