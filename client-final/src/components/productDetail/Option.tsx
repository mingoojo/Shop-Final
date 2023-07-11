import useProductFormStore from '../../hooks/useProductFormStore';
import { ProductOption, ProductOptionItem } from '../../types';

type OptionProps = {
  option : ProductOption
  selectedItem : ProductOptionItem
  index: number
}

export default function Option({ option, selectedItem, index }:OptionProps) {
  const [{ quantity, selectedOptionItems, options }, productFormStore] = useProductFormStore();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    productFormStore.changeSelectedOptionItems({ value, index });
    console.log(quantity, selectedOptionItems, options);
  };

  return (
    <div>
      <label>
        {option.kind}
        <select onChange={handleChange} value={selectedItem.name}>
          {
            (option.items).map((item) => (
              <option key={item.name} value={item.name} label={item.name} />
            ))
          }
        </select>
      </label>
    </div>
  );
}
