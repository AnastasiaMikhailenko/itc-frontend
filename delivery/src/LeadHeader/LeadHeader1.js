import React from 'react';
import styled from 'styled-components';


const LeadHeader1Style = styled.span`
    font-family: "Pacifico", cursive;
    font-size: 77.32px;
    text-align: left;
    letter-spacing: 2.97px;
    color: #fff;
    margin-top: 96px;
    margin-left: 200px;

    @media (max-width: 1200px) {
        display: block;
        width: 100%;
        margin-left: 0;
        text-align: center;
        line-height: 84px;
        font-size: 60px;
    }
`
const LeadHeader1 = () => (
    <LeadHeader1Style>
       Меняйте баллы
    </LeadHeader1Style>
);

export default LeadHeader1