import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  display: block;
  margin-bottom: 48px;
  text-decoration: inherit;
  color: inherit;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 16px;
`;

const Title = styled.h2`
  margin: 6px 0;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  text-align: left;
  color: #333333;
  font-family: "Open Sans", sans-serif;
`;

const OrderInfo = styled.p`
  margin: 6px 0;
  font-size: 16px;
  line-height: 22px;
  font-family: "Open Sans", sans-serif;
`;

const MinPrice = styled.span`
  font-weight: bold;
  font-family: "Open Sans", sans-serif;
`;

const Text = styled.p`
  margin: 6px 0 0 0;
  font-family: "Open Sans", sans-serif;
`;

const DeliveryInfo = styled.p`
  margin: 0 0 6px 0;
  font-weight: bold;
  font-family: "Open Sans", sans-serif;
`;

const StoreCard = ({ title, img, minPrice, deliveryPrice, deliveryTime }) => (
  <Link>
    <Image src = {img} />
    <Title>{title}</Title>
    <OrderInfo>
      Заказ от
      <MinPrice> {minPrice}р.</MinPrice>
    </OrderInfo>
    <Text>Доставка</Text>
    <DeliveryInfo>
      {deliveryPrice ? `${deliveryPrice}р.` : 'бесплатно'}, {deliveryTime} минут
    </DeliveryInfo>
  </Link>
);

export default StoreCard