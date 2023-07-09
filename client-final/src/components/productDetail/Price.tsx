import useProductFormStore from '../../hooks/useProductFormStore';

export default function Price() {
  const [{ price }] = useProductFormStore();
  return (
    <div>
      {price.toLocaleString()}
      원
    </div>
  );
}
