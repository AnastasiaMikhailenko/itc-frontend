import React from 'react';
import styled from 'styled-components';

const HeaderImageStyle = styled.img`
    width: 100%;
`
const HeaderImage = () => (
    <HeaderImageStyle src = {process.env.PUBLIC_URL + '/img/picpizzaaa.jpg'} />
      
);

export default HeaderImage