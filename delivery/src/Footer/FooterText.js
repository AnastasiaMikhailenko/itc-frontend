import React from 'react';
import styled from 'styled-components';

const FooterTextStyle = styled.p`
    font-size: 18px;
    line-height: 32px;
    text-align: left;
    color: #cccccc;
    text-align: center;
    line-height: 24px;
    margin-top: 40px;

    @media (min-width: 768px) {
        text-align: right;
    }
`
const FooterText = () => (
        <FooterTextStyle>  
            &copy; 2009-2018 Delivery Club&trade;
            <p> Все права защищены </p>
        </FooterTextStyle>
)

export default FooterText