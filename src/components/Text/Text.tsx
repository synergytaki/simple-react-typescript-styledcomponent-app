import * as React from 'react';
import styled, {StyledFunction} from 'styled-components';

const TextTypeStyle = {
  BASIC: `
  background-color: #EAF4FB;
  border: 1px solid #3F9DDC;
  color: #000000;
  font-size: 120%;
  text-align: center;
	font-family: "Hiragino Kaku Gothic Pro";
	font-size: 20px;
	letter-spacing: 0.15px;
	line-height: 30px;
  :placeholder-shown{
    color: #BDC3C7;
  }
  ::-webkit-input-placeholder{
    color: #BDC3C7;
  }
  :-moz-placeholder{
      color: #BDC3C7; opacity: 1;
  }
  ::-moz-placeholder{
      color: #BDC3C7; opacity: 1;
  }
  :-ms-input-placeholder{
      color: #BDC3C7;
  }
  ::-ms-input-placeholder{
      color: #BDC3C7;
  }
  &:focus::placeholder{
    color: transparent;
  }
  `,
  INVALID: `
  background-color: #FFF3F3;
  border: 1px solid #D40F19;
  color: #000000;
  font-size: 120%;
  text-align: center;
	font-family: "Hiragino Kaku Gothic Pro";
	font-size: 20px;
	letter-spacing: 0.15px;
	line-height: 30px;
  :placeholder-shown{
    color: #BDC3C7;
  }
  ::-webkit-input-placeholder{
    color: #BDC3C7;
  }
  :-moz-placeholder{
      color: #BDC3C7; opacity: 1;
  }
  ::-moz-placeholder{
      color: #BDC3C7; opacity: 1;
  }
  :-ms-input-placeholder{
      color: #BDC3C7;
  }
  ::-ms-input-placeholder{
      color: #BDC3C7;
  }
  &:focus::placeholder{
    color: transparent;
  }
  `,
};

interface TextExtendProps {
  textType:string;
  width?: string;
  height?: string;
  backgroundColor?: string;
}

const TextExtend: StyledFunction<TextExtendProps & React.HTMLProps<HTMLInputElement>> = styled.input;
const StyledText = TextExtend`
  width: ${props => props.width ? props.width : 'auto'};
  height: ${props => props.height ? props.height : 'auto'};
  ${props => props.textType};
`;

class Text extends React.Component<Text.Props, {}> {
  render() {
    const {
      textType,
      width,
      height,
      placeholder,
      maxLength,
      onClick,
      autoFocus,
    } = this.props;
    return (
        <StyledText autoFocus={autoFocus} placeholder={placeholder} textType={TextTypeStyle[textType]} type={'text'} width={width} height={height} maxLength={maxLength} onClick={onClick} ></StyledText>
    );
  }
}

namespace Text {
  export interface Props {
    textType: string;
    width?: string;
    height?: string;
    placeholder?: string;
    maxLength?: number;
    onClick?: (e: any) => void;
    autoFocus?: boolean;
  }

  export enum Type {
    BASIC = 'BASIC',
    INVALID = 'INVALID',
  }
}

export default Text;
