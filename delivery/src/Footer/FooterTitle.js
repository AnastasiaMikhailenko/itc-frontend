import React from 'react';
import styled from 'styled-components';

const FooterTitleStyle = styled.h4`
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #999999;
    margin-top: 40px;

    @media (min-width: 768px) {
        text-align: left;
    }
`
const FooterTitle = () => (
    <FooterTitleStyle> 
        Компания
    </FooterTitleStyle>  
)

export default FooterTitle