import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import ButtonLogin from './ButtonLogin';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Header1 = () => (
    <Grid>
        <Row center = "xs">
            <Col md = {3} center = "xs">
                <Logo />
            </Col>
            <Col md = {5} offset = "xs" />
            <Col md = {3} center = "xs">
                <ButtonLogin />
            </Col>
        </Row>
    </Grid>
);

export default Header1; 
