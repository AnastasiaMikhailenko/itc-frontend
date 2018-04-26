import React from 'react';
import ReactDOM from 'react-dom';
import LeadHeader from './LeadHeader';
import HeaderText from './HeaderText';
import Stores from './Stores';
import Footer from './Footer';

const Main = () => {
    return (
      <div>
        <LeadHeader />
        <HeaderText />
        <Stores />
        <Footer />
      </div>
    )
}

export default Main

