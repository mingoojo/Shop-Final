import styled from 'styled-components';

type ImageProps = {
  image: string,
};

const Container = styled.div`
  img{
    display:block;
    width: 100%;
  }
`;

export default function Image({ image }:ImageProps) {
  return (
    <Container>
      <img src={`${image}`} alt="thumbnail" />
    </Container>
  );
}
