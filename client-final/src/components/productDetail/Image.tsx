import styled from 'styled-components';

type ImageProps = {
  image : string
}

const Container = styled.div`
  img{
    display:block;
    width: 100%;
  }
`;

export default function Image({ image }:ImageProps) {
  if (image === '') {
    return null;
  }

  return (
    <Container>
      <img src={`${image}`} alt="thumbnail" />
    </Container>
  );
}
