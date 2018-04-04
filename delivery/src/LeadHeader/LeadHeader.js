import React from 'react';
import styled from 'styled-components';
import Header1 from './Header1';
import LeadHeader1 from './LeadHeader1';
import LeadHeader2 from './LeadHeader2';
import ButtonAbout from './ButtonAbout'
import { Grid, Row, Col } from 'react-flexbox-grid';


const LeadHeaderStyle = styled.header`
    background-image: url(./img/bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 75px;
`

const LeadHeader = () => (
    <LeadHeaderStyle>
        <Grid>
            <Header1 />
            <Row>
                <Col xs = {12}>
                    <LeadHeader1 />
                </Col>
            </Row>
            <Row>
                <Col xs = {12}>
                    <LeadHeader2 />
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