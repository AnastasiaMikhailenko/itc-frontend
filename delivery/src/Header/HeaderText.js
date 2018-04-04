import React from 'react';
import styled from 'styled-components';
import HeaderText1 from './HeaderText1';
import HeaderText2 from './HeaderText2';
import HeaderImage from './HeaderImage';
import { Grid, Row, Col } from 'react-flexbox-grid';

const HeaderText = () => (
    <Grid>
        <Row>
            <Col md = {6}>
                <HeaderText1 />
                <HeaderText2 />
            </Col>
            <Col md = {6}>
                <HeaderImage />
            </Col>
         </Row>
    </Grid>                    
);

export default HeaderText