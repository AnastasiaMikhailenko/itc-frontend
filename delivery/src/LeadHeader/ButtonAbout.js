import React from 'react';
import styled from 'styled-components';
import Button from './Button'

const ButtonAboutStyle = Button.extend`
    margin-top: 128px;
`
const ButtonAbout = () => (
    <ButtonAboutStyle>
        Подробнее
    </ButtonAboutStyle>
);

export default ButtonAbout