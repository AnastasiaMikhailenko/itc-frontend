import React from 'react';
import styled from 'styled-components';
import LeadHeader from './LeadHeader/LeadHeader';
import HeaderText from './Header/HeaderText';
import Stores from './Stores/Stores';
import ButtonAllRestaurant from './ButtonAllRestaurant'
import Footer from './Footer/Footer';

const Main = () => (
    <div>
      <LeadHeader />
      <HeaderText />
      <Stores />
      <ButtonAllRestaurant />
      <Footer />
      </div>
)

export default Main