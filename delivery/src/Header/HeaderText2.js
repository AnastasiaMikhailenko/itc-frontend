import React from 'react';
import styled from 'styled-components';

const HeaderText2Style = styled.p`
    font-family: "Open Sans", Regular;
    font-size: 18px;
`
const HeaderText2 = () => (
    <div>
        <HeaderText2Style>
        Delivery Club - это независимый клубный проект, объединивший сотни служб доставки еды и продуктов в Единую Систему Заказов.
        </HeaderText2Style>
        <HeaderText2Style>
            Цель проекта - обеспечить своим пользователям наилучшие условия для быстрого, удобного и выгодного осуществления заказов.
            Услуги сайта абсолютно бесплатны, а условия доставки очень простые.
        </HeaderText2Style>
    </div>
);

export default HeaderText2; 