import styled from 'styled-components';
import { Image } from '../../types';

const Thumbnail = styled.img.attrs({
  alt: 'Product Iamge',
})`
  display:block;
  width: 100%;
`;

type ImagesProps = {
  images : Image[]
}

export default function Images({ images }:ImagesProps) {
  const [image] = images;
  return (
    <Thumbnail src={`${image.url}`} />
  );
}
