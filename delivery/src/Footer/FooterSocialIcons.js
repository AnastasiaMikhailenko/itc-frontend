import React from 'react';
import styled from 'styled-components';

const FooterSocialIconsStyle = styled.div`
    text-align: center

    @media (min-width: 768px) {
        text-align: right;
    }
}
`

const FooterSocialIconStyle = styled.img`
    margin-top: 40px;
    margin-left: 15px;
`
const FooterSocialIcons = () => (
        <FooterSocialIconsStyle>  
            <a> <FooterSocialIconStyle src = {process.env.PUBLIC_URL + '/img/ig.png'} /> </a>
            <a> <FooterSocialIconStyle src = {process.env.PUBLIC_URL + '/img/vk.png'} /> </a>
        </FooterSocialIconsStyle> 
)

export default FooterSocialIcons