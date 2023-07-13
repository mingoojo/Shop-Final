import styled from 'styled-components';

type ButtonProps = {
  label : string,
  type?: 'button' | 'submit';
  disable?:boolean
  onClick?: () => void;
}

const ButtonItem = styled.button`
font-family: 'GmarketSansMedium';
border-radius: 0.5rem;
background-color: ${(props) => props.theme.colors.primary};
color: white;
font-size: 1.6rem;
font-weight: bold;
letter-spacing: 2px;
border: none;
`;

export default function Button({
  label, type = 'button', disable = true, onClick = undefined,
}:ButtonProps) {
  const handleChange = () => {
    if (!onClick) {
      return;
    }
    onClick();
  };
  return (
    <ButtonItem disabled={!disable} onClick={handleChange} type={type}>{label}</ButtonItem>
  );
}
