import React from 'react';
import styled from 'styled-components';


const LeadHeader2Style = styled.span`
    font-family: "Pacifico", cursive;
    font-size: 182.75px;
    text-align: left;
    line-height: 37px;
    letter-spacing: 6.49px;
    color: #b7e611;
    margin-left: 260px;

    @media (max-width: 1200px) {
        display: block;
        width: 100%;
        margin-left: 0;
        text-align: center;
        line-height: 84px;
        font-size: 100px;
    }
`
const LeadHeader2 = () => (
    <LeadHeader2Style>
       на призы
    </LeadHeader2Style>
);

export default LeadHeader2