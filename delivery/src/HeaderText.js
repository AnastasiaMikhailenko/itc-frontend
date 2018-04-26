import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const HeaderText1Style = styled.h1`
    margin-top: 50px;
    line-height: 48px;
    font-family: "Open Sans";
    font-weight: bold;
    font-size: 35px;
    text-align: left;
    color: #333333;
`
const HeaderText2Style = styled.p`
    font-family: "Open Sans", Regular;
    font-size: 18px;
`
const HeaderImageStyle = styled.img`
    width: 100%;
`

const HeaderText = () => (
    <Grid>
        <Row>
            <Col md = {6}>
                <HeaderText1Style>
                    Что мы делаем?
                </HeaderText1Style>
                
                <HeaderText2Style>
                    Delivery Club - это независимый клубный проект, объединивший сотни служб доставки еды и продуктов в Единую Систему Заказов.
                </HeaderText2Style>
                <HeaderText2Style>
                    Цель проекта - обеспечить своим пользователям наилучшие условия для быстрого, удобного и выгодного осуществления заказов.
                    Услуги сайта абсолютно бесплатны, а условия доставки очень простые.
                </HeaderText2Style> 
            </Col>
            <Col md = {6}>
                <HeaderImageStyle src = {process.env.PUBLIC_URL + '/img/picpizzaaa.jpg'} />
            </Col>
         </Row>
    </Grid>                    
);

export default HeaderText