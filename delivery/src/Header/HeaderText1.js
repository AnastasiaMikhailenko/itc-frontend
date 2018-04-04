import React from 'react';
import styled from 'styled-components';

const HeaderText1Style = styled.h1`
    margin-top: 50px;
    line-height: 48px;
    font-family: "Open Sans";
    font-weight: bold;
    font-size: 35px;
    text-align: left;
    color: #333333;
`
const HeaderText1 = () => (
    <HeaderText1Style>
       Что мы делаем?
    </HeaderText1Style>
);

export default HeaderText1