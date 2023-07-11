import styled from 'styled-components';

type DescriptionProps = {
  value: string
}

const Container = styled.div`
  li{
    min-height: 1rem;
    line-height: 1.4;
  }
`;

export default function Description({ value }:DescriptionProps) {
  const lines = value.split('\n');
  return (
    <Container>
      <ul>
        {
          lines.map((line, index) => {
            const key = `${line}-${index}`;
            return (
              <li key={key}>
                {line}
              </li>
            );
          })
        }
      </ul>
    </Container>
  );
}
