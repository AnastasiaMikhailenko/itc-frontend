import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FooterTitle from './FooterTitle';
import FooterNavlink from './FooterNavlink';
import FooterSocialIcons from './FooterSocialIcons';
import FooterText from './FooterText';

const FooterStyle = styled.footer`
    margin-top: 100px;
    padding-bottom: 64px;
    background-color: #333333;


    @media (max-width: 768px) {
        margin-top: 30px;
    }
`

const Footer = () => (
    <FooterStyle>
        <Grid>
            <Row between = "xs">
                <Col md = {6} center = "xs" start = "md">
                    <FooterTitle />
                    <FooterNavlink name = "Для курьеров" />
                    <FooterNavlink name = "Партнертво для ресторанов" />
                    <FooterNavlink name = "Условия проведения акций" />
                    <FooterNavlink name = "Контакты" />
                </Col>
                <Col md = {6}>
                    <FooterSocialIcons />
                    <FooterText />
                </Col>
            </Row>
        </Grid>
    </FooterStyle>
)

export default Footer