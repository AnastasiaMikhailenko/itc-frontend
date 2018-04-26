import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    max-width: 208px;
    max-height: 64px;
    margin-top: 50px;
    color: #fff;
`
const Logo = () => (
    <Image src = {process.env.PUBLIC_URL + '/img/logowhite.png'} /> 
);

export default Logo