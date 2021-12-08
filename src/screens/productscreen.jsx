import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Navbar from '../components/navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Fotter from '../components/Fotter';
import { Add, Remove } from '@material-ui/icons';
import { useLocation } from 'react-router';
import { publicRequest } from '../axios';
import { addProduct } from '../redux/cartredux';
import { useDispatch } from 'react-redux';

const Container = styled.div``;
const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 80vh;
`;
const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    width: 100%;
    height: 100%;
`;
const Image = styled.img`
    object-fit: cover;
    width: 90%;
    height: 100%;
`;
const Desc = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;
const Title = styled.h1``;
const Description = styled.p``;
const Price = styled.h1``;
const FilterContainer = styled.div`
  display: flex;
  margin: 20px;
  width:70%;
`;
const Filter = styled.div`
  display: flex;
  padding-left: 20px;
  justify-content: center;
  align-items: center;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  margin: 5px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;
const FilterTitle = styled.span`
padding-right: 20px;`;
const FilterSize = styled.select`
  padding: 5px;
`;
const FilterSizeOption = styled.option`
`;
const AddContainer = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: space-around;
`;
const AmountContainer = styled.div`
 display: flex;

  align-items: center;
  justify-content: space-around;
`;
const Amount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid grey;
`;
const Button = styled.button`
  font-weight: 700px;
  padding: 5px;
  cursor: pointer;
  &:hover{
    background-color: grey;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const dispatch = useDispatch();


  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("product/find/" + id);
        setProduct(res.data)
        console.log(res.data);
      } catch (error) {
        this.setState({ error });
        console.log(error)
      }
    }
    getProduct()
  }, [id])

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  }

  const handleClick = () => {

    dispatch(
      addProduct({
        ...product, quantity, color, size
      })
    )
  }
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <Desc>
          <Title>{product.title}</Title>
          <Description>{product.desc}</Description>
          <Price>${product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}

            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                {product.size?.map((a) => (
                  <FilterSizeOption onChange={(e) => setSize(e.target.value)} key={a}>{a}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick} >Add To Cart</Button>
          </AddContainer>
        </Desc>
      </Wrapper>
      <Newsletter />
      <Fotter />
    </Container>
  )
}

export default Product
