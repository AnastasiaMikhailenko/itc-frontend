import React from 'react'
import HeaderCataloge from './HeaderCataloge';
import Stores from './Stores';
import Footer from './Footer';
import ScrollToTopOnMount from './ScrollToTopOnMount'

const Cataloge = () => (
    <React.Fragment>
      <ScrollToTopOnMount />
      <HeaderCataloge />
      <Stores
          name = "Загрузить еще"
          lg = {4}
          kol = {9}
      />
      <Footer />
    </React.Fragment>
)

export default Cataloge
