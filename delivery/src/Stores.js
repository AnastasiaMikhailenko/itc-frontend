import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from './Button'
import StoreCard from './StoreCard';
import Loader from './Loader';
import { BrowserRouter, NavLink} from 'react-router-dom';

const RestaurantStyle = styled.h1`
    margin-top: 50px;
    line-height: 48px;
    font-family: "Open Sans";
    font-weight: bold;
    font-size: 35px;
    text-align: left;
    color: #333333;
`

class Stores extends React.Component {
    componentDidMount() {
        fetch('https://itc-web1-server-iwcqwjrbcr.now.sh/stores?limit=' + this.props.kol)
            .then((response) => response.json())
            .then((json) => this.setState({stores: json.payload.stores}))
      }
    
      state = {
        stores: [],

      }
    
      render() {
        return (
            <Grid>
                <Row>
                    <Col md = {12}>
                        <RestaurantStyle>
                            Рестораны
                        </RestaurantStyle>
                    </Col>    
                </Row>
                <Row around = "xs">
                {   (!this.state.stores) ?
                        <Loader /> : (
                        Object.keys(this.state.stores)
                        .map( store =>
                            <Col lg={this.props.lg} md={6} sm={12}>
                                <StoreCard 
                                title = {this.state.stores[store]['title']}
                                img = {this.state.stores[store]['heroImageUrl']}
                                minPrice = "900" 
                                deliveryPrice = ""
                                deliveryTime = "90"
                                key={this.state.stores[store]['uuid']}
                                /> 
                            </Col>
                        )
                    )
                }
                </Row>
                <Row center = "xs">
                    <Col md = {12}>
                        <NavLink to="/cataloge">
                            <Button>
                                {this.props.name}
                            </Button>
                        </NavLink>
                    </Col>
                </Row>
            </Grid>
        )
      } 
 }
    
export default Stores