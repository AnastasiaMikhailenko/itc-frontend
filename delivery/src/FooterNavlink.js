import React from 'react';
import styled from 'styled-components';

const FooterNavlinkStyle = styled.h4`
    display: block;
    font-family: "Open Sans", Regular;
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    text-decoration: underline;
    color: #cccccc;

    &:hover {
    color: #a3d200;
    }

    @media (min-width: 768px) {
        text-align: left;
    }
`
const FooterNavlink = (props) => (
    <FooterNavlinkStyle> 
        {props.name}
    </FooterNavlinkStyle>  
)

export default FooterNavlink