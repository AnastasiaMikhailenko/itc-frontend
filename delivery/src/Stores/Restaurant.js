import React from 'react';
import styled from 'styled-components';

const RestaurantStyle = styled.h1`
    margin-top: 50px;
    line-height: 48px;
    font-family: "Open Sans";
    font-weight: bold;
    font-size: 35px;
    text-align: left;
    color: #333333;
`
const Restaurant = () => (
    <RestaurantStyle>
        Рестораны
    </RestaurantStyle>
)
 export default Restaurant