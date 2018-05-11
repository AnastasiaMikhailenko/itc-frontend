import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FooterNavlink from './FooterNavlink';

const FooterStyle = styled.footer`
    margin-top: 100px;
    padding-bottom: 64px;
    background-color: #333333;

    @media (max-width: 768px) {
        margin-top: 30px;
    }
`

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
const FooterSocialIconsStyle = styled.div`
    text-align: center

    @media (min-width: 768px) {
        text-align: right;
    }
}
`
const FooterSocialIconStyle = styled.img`
    margin-top: 40px;
    margin-left: 15px;
`
const FooterTextStyle = styled.p`
    font-size: 18px;
    line-height: 32px;
    text-align: left;
    color: #cccccc;
    text-align: center;
    line-height: 24px;
    margin-top: 40px;

    @media (min-width: 768px) {
        text-align: right;
    }
`

const Footer = () => (
    <FooterStyle>
        <Grid>
            <Row between = "xs">
                <Col md = {6} center = "xs" start = "md">
                    <FooterTitleStyle> 
                        Компания
                    </FooterTitleStyle>  

                    <FooterNavlink name = "Для курьеров" />
                    <FooterNavlink name = "Партнертво для ресторанов" />
                    <FooterNavlink name = "Условия проведения акций" />
                    <FooterNavlink name = "Контакты" />
                </Col>
                <Col md = {6}>
                    <FooterSocialIconsStyle>  
                        <a> <FooterSocialIconStyle src = {process.env.PUBLIC_URL + '/img/ig.png'} /> </a>
                        <a> <FooterSocialIconStyle src = {process.env.PUBLIC_URL + '/img/vk.png'} /> </a>
                    </FooterSocialIconsStyle>

                    <FooterTextStyle>  
                        &copy; 2009-2018 Delivery Club&trade;
                        <p> Все права защищены </p>
                    </FooterTextStyle>
                </Col>
            </Row>
        </Grid>
    </FooterStyle>
)

export default Footer