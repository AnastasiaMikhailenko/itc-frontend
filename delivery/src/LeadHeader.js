import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import ButtonLogin from './ButtonLogin';
import ButtonAbout from './ButtonAbout'
import { Grid, Row, Col } from 'react-flexbox-grid';


const LeadHeaderStyle = styled.header`
    background-image: url(./img/bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 75px;
`

const LeadHeader1Style = styled.span`
    font-family: "Pacifico", cursive;
    font-size: 77.32px;
    text-align: left;
    letter-spacing: 2.97px;
    color: #fff;
    margin-top: 96px;
    margin-left: 200px;

    @media (max-width: 1200px) {
        display: block;
        width: 100%;
        margin-left: 0;
        text-align: center;
        line-height: 84px;
        font-size: 60px;
    }
`

const LeadHeader2Style = styled.span`
    font-family: "Pacifico", cursive;
    font-size: 182.75px;
    text-align: left;
    line-height: 37px;
    letter-spacing: 6.49px;
    color: #b7e611;
    margin-left: 260px;

    @media (max-width: 1200px) {
        display: block;
        width: 100%;
        margin-left: 0;
        text-align: center;
        line-height: 84px;
        font-size: 100px;
    }
`

const LeadHeader = () => (
    <LeadHeaderStyle>
        <Grid>
        <Row center = "xs" >
            <Col md = {3} center = "xs">
                <Logo img = "/img/logowhite.png" />
            </Col>
            <Col md = {5} offset="xs" />
            <Col md = {3} center = "xs">
                <ButtonLogin />
            </Col>
        </Row>
        <Row>
            <Col xs = {12}>
                <LeadHeader1Style>
                    Меняйте баллы
                </LeadHeader1Style>
            </Col>
        </Row>
            <Row>
                <Col xs = {12}>
                    <LeadHeader2Style>
                        на призы
                    </LeadHeader2Style>
                </Col>
            </Row>
            <Row center = "xs" top = "xs">
                <Col xs = {12}>
                    <ButtonAbout />
                </Col>    
            </Row>
        </Grid>
    </LeadHeaderStyle>
);

export default LeadHeader 