import styled from 'styled-components';

const ButtonItem = styled.button`
cursor: pointer;
padding: 1rem;
font-weight: bold;
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

type ButtonProps ={
  label : string,
  type? :'button' | 'submit'
  onClick?: () => void;
  disable?:boolean
}

export default function Button({
  type = 'button', label, onClick = undefined, disable = true,
}:ButtonProps) {
  const handleClick = () => {
    if (!onClick) {
      return;
    }
    onClick();
  };
  return (
    <ButtonItem type={type} onClick={handleClick} disabled={!disable}>{label}</ButtonItem>
  );
}
