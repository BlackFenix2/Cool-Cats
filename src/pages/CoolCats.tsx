import React from 'react';
import SEO from 'src/components/SEO';
import { Row, Col } from 'antd';
import { css } from '@emotion/core';

import img from 'src/lib/img/cat-creep.jpg';
import CatCard from 'src/components/CoolCats/CatCard';

const CoolCats = () => (
  <>
    <SEO title="Cool Cats" />
    <Row gutter={16}>
      {new Array(12).fill(0).map((item, i) => (
        <Col
          key={i}
          span={8}
          xs={24}
          sm={24}
          md={8}
          lg={8}
          xl={8}
          css={css`
            padding-top: 20px;
          `}
        >
          <CatCard img={img} />
        </Col>
      ))}
    </Row>
  </>
);

export default CoolCats;
