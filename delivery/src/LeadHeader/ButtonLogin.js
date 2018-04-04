import React from 'react';
import styled from 'styled-components';
import Button from './Button'

const ButtonLoginStyle = Button.extend`
    margin-top: 63px;

    @media (max-width: 1200px) {
        margin-top: 16px;
    }
`
const ButtonLogin = () => (
    <ButtonLoginStyle>
        Вход / Регистрация
    </ButtonLoginStyle>
);

export default ButtonLogin 