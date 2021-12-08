import styled from 'styled-components';

import Navbar from '../components/navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Fotter from '../components/Fotter';
import { Add, Remove } from '@material-ui/icons';
import { useSelector, } from "react-redux"
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from 'react';
import { userRequest } from '../requestMethods';
import { useHistory } from 'react-router';


const Container = styled.div`
`;

const Wraper = styled.div`
padding: 20px;
`;
const Title = styled.h1`
font-weight: 200;
text-align: center;
`;
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
background-color: ${props => props.type === "filled" ? "Black" : "transparent"};
border: ${props => props.type === "filled" && "none"};
color: ${props => props.type === "filled" && "white"};
padding: 10px;
`;
const TopTexts = styled.div`
margin: 10px;

`;
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;

`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
width: 200px;
height: 200px;
`;
const Detailss = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.div``;
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color
    };
`;
const ProductSize = styled.span``;
const PriceDetails = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`;
const ProductAmount = styled.div`
font-style: 24px;
margin: 5px;
`;
const ProductPrice = styled.div`
font-size: 30px;font-weight: 200;
`;

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
height: 50vh;
padding: 20px;
border-radius: 10px;
`;

const SummaryTitle = styled.h1`
font-weight: 200;
`;
const SummaryItems = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props => props.type === "total" && "500"};
font-size: ${props => props.type === "total" && "24px"};
`;
const SummaryItemsText = styled.span``;
const SummaryItemsPrice = styled.span``;
const SummaryItemsButton = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`;

const KEY = process.env.REACT_APP_STRIPE;

const Cartscreen = () => {


    const cart = useSelector(state => state.cart)
    console.log(cart);

    const [stripeToken, setStripeToken] = useState(null)

    const onToken = (token) => {
        setStripeToken(token)
    }

    const history = useHistory();

    useEffect(() => {
        const makeRequisrt = async () => {
            try {
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100
                });
                history.push("/success")
            } catch (error) {

            }
        }
        stripeToken && makeRequisrt()
    }, [stripeToken, cart.total, history])

    console.log(stripeToken)
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wraper>
                <Title>Your Bag</Title>
                <Top>
                    <TopButton>CONTINUE SHOPING</TopButton>
                    <TopTexts>
                        <TopText>Shoping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map(product => (
                            <Product>
                                <ProductDetails>
                                    <Image src={product.img} />
                                    <Detailss>
                                        <ProductName><b>Product: </b>{product.title}</ProductName>
                                        <ProductId><b>ProductId: </b>{product._id}</ProductId>
                                        <ProductColor color={product.color} />
                                        <ProductSize><b>Size: </b>{product.size}</ProductSize>
                                    </Detailss>
                                </ProductDetails>
                                <PriceDetails>
                                    <ProductAmountContainer>
                                        <Add />
                                        <ProductAmount>{product.quantity}</ProductAmount>
                                        <Remove />
                                    </ProductAmountContainer>
                                    <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                                </PriceDetails>
                            </Product>

                        ))}
                        <hr />
                    </Info>
                    <Summary>
                        <SummaryTitle>Order summetr</SummaryTitle>
                        <SummaryItems>
                            <SummaryItemsText>Subtotal</SummaryItemsText>
                            <SummaryItemsPrice>${cart.total}</SummaryItemsPrice>
                        </SummaryItems>
                        <SummaryItems>
                            <SummaryItemsText>Estimated shipping</SummaryItemsText>
                            <SummaryItemsPrice>$ 4.88</SummaryItemsPrice>
                        </SummaryItems>
                        <SummaryItems>
                            <SummaryItemsText>Shipping discount</SummaryItemsText>
                            <SummaryItemsPrice>$ -8.0</SummaryItemsPrice>
                        </SummaryItems>
                        <SummaryItems type="total">
                            <SummaryItemsText >total</SummaryItemsText>
                            <SummaryItemsPrice>$ {cart.total}</SummaryItemsPrice>
                        </SummaryItems>
                        <StripeCheckout
                            name="SHOP"
                            image="S"
                            billingAddress
                            shippingAddress
                            description={`Your total is $${cart.total}`}
                            amount={cart.total * 100}
                            token={onToken}
                            stripeKey={process.env.REACT_APP_STRIPE} >
                            <SummaryItemsButton>CHECKOUT NOW</SummaryItemsButton>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wraper>
            <Newsletter />
            <Fotter />
        </Container>
    )
}

export default Cartscreen
