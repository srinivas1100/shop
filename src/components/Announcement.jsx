import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Announcement = () => {
    return (
        <Container>
            <h3>some offeres or there</h3>
        </Container>
    )
}

export default Announcement
