import React from 'react';
import SEO from 'src/components/SEO';
import { Row, Col, Card } from 'antd';
import { css } from '@emotion/core';

import img from 'src/lib/img/cat-creep.jpg';

const CoolCats = () => (
  <>
    <SEO title="Cool Cats" />
    <Row
      gutter={16}
      css={css`
        padding-top: 10px;
      `}
    >
      <Col span={8}>
        <Card cover={<img src={img} alt="creepy cat" />}>Creepy cat</Card>
      </Col>
      <Col span={8}>
        <Card cover={<img src={img} alt="creepy cat" />}>Creepy cat</Card>
      </Col>
      <Col span={8}>
        <Card cover={<img src={img} alt="creepy cat" />}>Creepy cat</Card>
      </Col>
      <Col span={8}>
        <Card cover={<img src={img} alt="creepy cat" />}>Creepy cat</Card>
      </Col>
      <Col span={8}>
        <Card cover={<img src={img} alt="creepy cat" />}>Creepy cat</Card>
      </Col>
      <Col span={8}>
        <Card cover={<img src={img} alt="creepy cat" />}>Creepy cat</Card>
      </Col>
      <Col span={8}>
        <Card cover={<img src={img} alt="creepy cat" />}>Creepy cat</Card>
      </Col>
      <Col span={8}>
        <Card cover={<img src={img} alt="creepy cat" />}>Creepy cat</Card>
      </Col>
      <Col span={8}>
        <Card cover={<img src={img} alt="creepy cat" />}>Creepy cat</Card>
      </Col>
      <Col span={8}>
        <Card cover={<img src={img} alt="creepy cat" />}>Creepy cat</Card>
      </Col>
      <Col span={8}>
        <Card cover={<img src={img} alt="creepy cat" />}>Creepy cat</Card>
      </Col>
      <Col span={8}>
        <Card cover={<img src={img} alt="creepy cat" />}>Creepy cat</Card>
      </Col>
      <Col span={8}>
        <Card cover={<img src={img} alt="creepy cat" />}>Creepy cat</Card>
      </Col>
      <Col span={8}>
        <Card cover={<img src={img} alt="creepy cat" />}>Creepy cat</Card>
      </Col>
      <Col span={8}>
        <Card cover={<img src={img} alt="creepy cat" />}>Creepy cat</Card>
      </Col>
      <Col span={8}>
        <Card cover={<img src={img} alt="creepy cat" />}>Creepy cat</Card>
      </Col>
      <Col span={8}>
        <Card cover={<img src={img} alt="creepy cat" />}>Creepy cat</Card>
      </Col>
      <Col span={8}>
        <Card cover={<img src={img} alt="creepy cat" />}>Creepy cat</Card>
      </Col>
    </Row>
  </>
);

export default CoolCats;
