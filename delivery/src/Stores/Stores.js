import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Restaurant from './Restaurant';
import StoreCard from './StoreCard';

const Stores = () => (
    <Grid>
        <Row>
            <Col md = {12}>
                <Restaurant />
            </Col>    
        </Row>
        <Row around = "xs">
            <Col md = {3}>
                <StoreCard 
                    name = "Il Patio"
                    img = "https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"
                    minPrice = "900" 
                    deliveryPrice = ""
                    deliveryTime = "90"
                />
            </Col>
            <Col md = {3}>
                <StoreCard 
                    name = "Il Patio"
                    img = "https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"
                    minPrice = "900" 
                    deliveryPrice = ""
                    deliveryTime = "90"
                />
            </Col>
            <Col md = {3}>
                <StoreCard 
                    name = "Il Patio"
                    img = "https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"
                    minPrice = "900" 
                    deliveryPrice = ""
                    deliveryTime = "90"
                />
            </Col>
            <Col md = {3}>
                <StoreCard 
                    name = "Il Patio"
                    img = "https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"
                    minPrice = "900" 
                    deliveryPrice = ""
                    deliveryTime = "90"
                />
            </Col>
        </Row>   
        <Row around = "xs">
            <Col md = {3}>
                <StoreCard 
                    name = "Il Patio"
                    img = "https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"
                    minPrice = "900" 
                    deliveryPrice = ""
                    deliveryTime = "90"
                />
            </Col>
            <Col md = {3}>
                <StoreCard 
                    name = "Il Patio"
                    img = "https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"
                    minPrice = "900" 
                    deliveryPrice = ""
                    deliveryTime = "90"
                />
            </Col>
            <Col md = {3}>
                <StoreCard 
                    name = "Il Patio"
                    img = "https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"
                    minPrice = "900" 
                    deliveryPrice = ""
                    deliveryTime = "90"
                />
            </Col>
            <Col md = {3}>
                <StoreCard 
                    name = "Il Patio"
                    img = "https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg"
                    minPrice = "900" 
                    deliveryPrice = ""
                    deliveryTime = "90"
                />
            </Col>
        </Row>
    </Grid>
)

export default Stores