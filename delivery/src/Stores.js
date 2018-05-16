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
        fetch('https://itc-web1-server.now.sh/stores?limit=' + this.props.kol)
            .then((response) => response.json())
            .then((json) => {
              this.setState({stores: json.payload.stores})
              this.setState({loader: 1})
            })
      }

      state = {
        stores: [],
        loader: 1
      }

      AddRestaurants = () => {
        this.setState({loader: 0})
        fetch('https://itc-web1-server.now.sh/stores?limit=' + this.props.kol + '&offset=' + this.state.stores.length)
            .then((response) => response.json())
            .then((json) => {
              this.setState({stores: this.state.stores.concat(json.payload.stores)})
              this.setState({loader: 1})
            })
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

                  {Object.keys(this.state.stores)
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
                  )}
                  {this.state.loader && <Loader />}
                </Row>
                <Row center = "xs">
                    <Col md = {12}>
                        <NavLink to="/cataloge">
                            <Button onClick = {this.AddRestaurants}>
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
