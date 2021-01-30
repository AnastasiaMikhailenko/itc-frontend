import React from 'react';
import LeadHeader from './LeadHeader';
import HeaderText from './HeaderText';
import Stores from './Stores';
import Footer from './Footer';
import Cataloge from './Cataloge';

const Main = () => {
    return (
      <React.Fragment>
        <LeadHeader />
        <HeaderText />
        <Stores 
          name = "Все рестораны" 
          lg = {3} 
          kol = {8} 
        />
        <Footer />
      </React.Fragment>
    )
}

export default Main

