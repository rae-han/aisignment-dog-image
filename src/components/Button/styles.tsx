import styled from '@emotion/styled';

interface Props {
  scheme: 'default' | 'white' | 'red'
}

const backgroundColors = {
  'default': 'royalblue',
  white: 'white',
  red: 'red'
}

const colors = {
  'default': 'white',
  white: 'black',
  red: 'white'
}

export const ButtonContainer = styled.div<Props>`
  flex: 1 0;
  
  .Button {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 4px;
    outline: none;
    background-color: ${props => backgroundColors[props.scheme]};
    color: ${props => colors[props.scheme]};
    
    &:active {
      filter: contrast(1.5);
    }
  }
`