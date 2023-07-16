import React, {PropsWithChildren} from 'react';
import {ButtonContainer} from "@/components/Button/styles";

interface Props extends PropsWithChildren {
  theme?: 'default' | 'white' | 'red'
  onClick?: () => void;
}

const Button = ({ theme = 'default', children, onClick }: Props) => {
  return (
    <ButtonContainer scheme={theme}>
      <button className="Button" onClick={onClick} >{children}</button>
    </ButtonContainer>
  );
};

export default Button;