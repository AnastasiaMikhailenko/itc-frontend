import React from 'react';
import Logo from './Logo';
import ButtonLogin from './ButtonLogin';
import { Grid, Row, Col } from 'react-flexbox-grid';


const HeaderCataloge = () => (
    
        <Grid>
            <Row center = "xs" >
                <Col md = {3} center = "xs">
                    <Logo
                        img = "/img/logo.png" 
                    />
                </Col>
                <Col md = {5} offset="xs" />
                <Col md = {3} center = "xs">
                    <ButtonLogin />
                </Col>
            </Row>
        </Grid>
    
);

export default HeaderCataloge