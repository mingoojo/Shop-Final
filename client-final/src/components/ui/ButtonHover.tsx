import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

type ButtonProps = {
  label : string,
  type?: 'button' | 'submit';
  disable?:boolean
  onClick?: () => void;
}

const ButtonItem = styled.button`
cursor: pointer;
padding: 0rem 1rem 0rem 1rem;
font-weight: bold;
height: 32px;
background-color: ${(props) => props.theme.colors.backgroundMain};
border: 1px solid ${(props) => props.theme.colors.textMain};
color: ${(props) => props.theme.colors.textMain};
border-radius: .4rem;
white-space: nowrap;
  &:hover{
    background-color: ${(props) => props.theme.colors.textMain};
    color: ${(props) => props.theme.colors.backgroundMain};
  }
`;

export default function ButtonHover({
  label, type = 'button', disable = true, onClick = undefined,
}:ButtonProps) {
  const handleChange = () => {
    if (!onClick) {
      return;
    }
    onClick();
  };
  return (
    <ButtonItem className="logout" disabled={!disable} onClick={handleChange} type={type}>{label}</ButtonItem>
  );
}
