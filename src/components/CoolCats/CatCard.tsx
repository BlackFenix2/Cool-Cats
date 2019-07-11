import React from 'react';
import { Card, Icon } from 'antd';

interface Props {
  img: any;
}
const CatCard = (props: Props) => (
  <Card
    cover={<img src={props.img} alt="creepy cat" />}
    actions={[
      <Icon key="like" type="like" />,
      <Icon key="dislike" type="dislike" />,
      <Icon key="elip" type="ellipsis" />
    ]}
  >
    <Card.Meta title="creepy cat" description="this cat is creepy"></Card.Meta>
  </Card>
);

export default CatCard;
