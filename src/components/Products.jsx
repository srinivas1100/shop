import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "../components/Product";
import axios from "axios";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
`;

const Products = ({ cat, filter, newest }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(cat ? `http://localhost:5000/api/product?category=${cat}` : "http://localhost:5000/api/product");
        setProducts(res.data);
        console.log(res.data);
      } catch (e) {
      }
    };
    getProducts()
  }, [cat]);
  console.log(cat);

  useEffect(() => {
    cat && setFilteredProducts(
      products.filter((item) => Object.entries(filter).every(([key, value]) =>
        item[key].includes(value)
      ))
    )
  }, [cat, filter, products]);

  useEffect(() => {
    if (newest === "newest") {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt))
    } else if ((newest === "asc")) {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price))
    } else {
      setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price))
    }
  }, [newest])
  return (
    <Container>
      {cat ? filteredProducts.map((item) => (
        <Product item={item} key={item.id} />
      )) : products.slice(0, 8).map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
