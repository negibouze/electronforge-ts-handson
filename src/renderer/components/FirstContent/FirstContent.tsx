import React from 'react';
import Button from '@/renderer/components/Button';
import { css } from '@emotion/core';

const color = 'white';

const FirstContent: React.FC = () => {
  function handleClick(v: string): void {
    console.log(v);
  }

  return (
    <div
      css={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${color};
        }
      `}
    >
      <span>あいうえおあいうえお</span>
      <Button handleClick={handleClick} flag={true} />
      <Button handleClick={handleClick} flag={true} primary />
    </div>
  );
};

export default FirstContent;
