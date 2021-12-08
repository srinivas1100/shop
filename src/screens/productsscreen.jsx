import { useState } from 'react'
import styled from 'styled-components';
import Navbar from '../components/navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Fotter from '../components/Fotter';
import { useLocation } from 'react-router';


const Container = styled.div``;

const Title = styled.h1`
margin: 20px;
`;

const FilterContainer = styled.div`
margin: 20px;
display: flex;
justify-content: space-between;
`;
const Filter = styled.div`
margin: 20px;`;
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
`;
const Select = styled.select`
padding: 10px;
font-weight: 600;
margin-right: 10px;
`;
const Option = styled.option``;

const Productsscreen = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filter, setFilter] = useState({});
    const [newest, setNewest] = useState("newest");

    const handleFilter = (e) => {
        const value = e.target.value
        setFilter({
            ...filter,
            [e.target.name]: value
        })
    }
    console.log(filter)
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="color" onChange={handleFilter}>
                        <Option disabled >Color</Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>red</Option>
                        <Option>blue</Option>
                        <Option>yellow</Option>
                        <Option>green</Option>
                    </Select>
                    <Select name="size" onChange={handleFilter}>
                        <Option disabled >Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={(e) => setNewest(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">price (asc)</Option>
                        <Option value="desc">price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>

            <Products cat={cat} filter={filter} newest={newest} />
            <Newsletter />
            <Fotter />
        </Container>
    );
}

export default Productsscreen;
