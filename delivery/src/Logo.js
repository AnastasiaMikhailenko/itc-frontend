import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    max-width: 208px;
    max-height: 64px;
    margin-top: 50px;
    color: #fff;
`
const Logo = (props) => (
    <Image src = {process.env.PUBLIC_URL + props.img} /> 
)

export default Logo