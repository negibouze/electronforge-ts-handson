import React from 'react';
import styled from '@emotion/styled';

export type ButtonProps = {
  className?: string;
  flag: boolean;
  handleClick: (v: string) => void;
  primary?: boolean;
};

const Button: React.FC<ButtonProps> = props => (
  <button className={props.className} onClick={(): void => props.handleClick('あいうえお')}>
    {props.flag ? 'click me' : 'CLICK ME'}
  </button>
);

const StyledButton = styled(Button)`
  background: ${(props): string => (props.primary ? 'palevioletred' : 'white')};
  color: ${(props): string => (props.primary ? 'white' : 'palevioletred')};
  width: 120px;
  height: 44px;
  border-radius: 4px;
`;

export default StyledButton;
