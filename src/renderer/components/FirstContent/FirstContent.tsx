import React from 'react';
import Button from '@/renderer/components/Button';
import { css } from '@emotion/core';

const color = 'white';

export type FirstContentProps = {
  className?: string;
};

const FirstContent: React.FC<FirstContentProps> = props => {
  function handleClick(v: string): void {
    console.log(v);
  }

  return (
    <div
      css={css`
        background-color: pink;
        padding: 32px;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${color};
          cursor: pointer;
        }
      `}
      {...props}
    >
      <span>あいうえおあいうえお</span>
      <Button handleClick={handleClick} flag={true} />
      <Button handleClick={handleClick} flag={true} primary />
    </div>
  );
};

export default FirstContent;
