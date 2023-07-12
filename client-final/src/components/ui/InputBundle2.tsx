import styled from 'styled-components';

const Container = styled.div`
margin-top: 1rem;
  label{
    text-align: left;
    p{
      margin-bottom: 1rem;
    }
    input{
      border-radius: 1rem;
      border: none;
      background-color: ${(props) => props.theme.colors.buttonMain};
      height: 40px;
      width: 100%;
      padding: 1rem;
      color: ${(props) => props.theme.colors.textMain};
    }
  }
`;

type InputBundleProps = {
  label: string;
  placeholder?: string;
  type?: 'text' | 'number' | 'password' | 'tel'; // ...and more types...
  value: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

export default function InputBundle2({
  label, value, placeholder = undefined, type = 'text',
  onChange = undefined, readOnly = false,
}: InputBundleProps) {
  // 수정이벤트
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) {
      return;
    }
    onChange(event.target.value);
  };

  return (
    <Container>
      <label>
        <p>
          {label}
        </p>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          readOnly={readOnly}
        />
      </label>
    </Container>
  );
}
