import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import ButtonLogin from './ButtonLogin';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Header1 = () => (
    <Grid fluid>
        <Row>
            <Col md = {3} center = "xs">
                <Logo />
            </Col>
            <Col md = {6} />
            <Col md = {3} center = "xs">
                <ButtonLogin />
            </Col>
        </Row>
    </Grid>
);

export default Header1; 