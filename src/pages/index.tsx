import React from 'react';

import SEO from 'src/components/SEO';
import { css } from '@emotion/core';

import img from 'src/images/Construction.png';
import fadeIn from 'src/components/animations/fadeIn';
import { Button } from 'antd';

const style = css`
  width: 500px;
  height: 500px;
  ${fadeIn}
`;
const IndexPage = () => (
  <>
    <SEO title="Home" />
    <h1>Cool Cats (WIP)</h1>
    <Button>www</Button>
    <p>Pardon our appearance, our website is under construction </p>

    <div>
      <img src={img} alt="Banner of donuts" css={style} />
    </div>
  </>
);

export default IndexPage;
