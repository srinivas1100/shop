import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategorieItem from "./CategorieItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategorieItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
