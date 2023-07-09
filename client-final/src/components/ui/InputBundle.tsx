import styled from 'styled-components';

const Container = styled.div`
margin-block: 1rem;
label{
    text-align: left;
    p{
      margin-bottom: 1rem;
    }
    input{
      background-color: ${(props) => props.theme.colors.buttonMain};
      border-radius: 1rem;
      border: none;
      height: 40px;
      width: 300px;
      padding: 1rem;
    }
  }
`;

type InputBundleProps = {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'number' | 'password' | 'tel'; // ...and more types...
  value: string | number;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

export default function InputBundle({
  label = '', value, placeholder = undefined, type = 'text',
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
