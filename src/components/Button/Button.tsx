import styled from "styled-components";

export type tButton = {
  type?: "button" | "submit" | "reset" | undefined,
  handleClick?: () => void,
  text: string,
  disabled?: boolean,
};

const ButtonWithStyle = styled.button`
  background-color: white;
  border-color: hsl(0, 0%, 80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  outline: none;
  width: auto;
  cursor: pointer;
  padding: 10px;
  margin: 10px;
  font-family: Arial;
  font-weight: bold;
  
  &:hover {
    transition: all 1s;
    background-color: lightgreen;
    border-color: white;
  }
`;

export default function Button({ type, handleClick, text, disabled }: tButton) {
  return (
    <ButtonWithStyle
      onClick={handleClick}
      type={type}
      disabled={disabled}
    >{text}
    </ButtonWithStyle>
  );
};
