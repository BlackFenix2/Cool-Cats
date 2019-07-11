import React from 'react';
import img from 'src/lib/img/cat-banner.jpg';
import { css } from '@emotion/core';

const Banner = () => (
  <div
    css={css`
      overflow: hidden;
      height: 30vh;
    `}
  >
    <img
      src={img}
      alt="Cat banner"
      css={css`
        width: 100%;
        margin: -25% 0 0 0;
      `}
    />
  </div>
);

export default Banner;
