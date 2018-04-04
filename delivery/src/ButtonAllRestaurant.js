import React from 'react';
import styled from 'styled-components';
import Button from './Button'
import { Grid, Row, Col } from 'react-flexbox-grid';

const ButtonAllRestaurant = () => (
    <Grid>
        <Row center = "xs">
            <Col md = {12}>
                <Button>
                    Все рестораны
                </Button>
            </Col>
        </Row>
    </Grid>    
);

export default ButtonAllRestaurant