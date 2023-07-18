import { useEffect } from 'react';
import useProductFormStore from '../../hooks/useProductFormStore';
import { ProductOption, ProductOptionItem } from '../../types';

type OptionProps = {
  option : ProductOption
  index : number
  selectedItem : ProductOptionItem
}

export default function Option({ option, index, selectedItem }:OptionProps) {
  const [, productFormStore] = useProductFormStore();

  const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    productFormStore.changeSelectedOptionItems({ value, index });
  };

  return (
    <div className="combobox">
      <label>
        {option.kind}
        <select value={selectedItem.name} onChange={handleChange}>
          {
            option.items.map((item) => (
              <option key={item.name} value={item.name} label={item.name} />
            ))
          }
        </select>
      </label>
    </div>
  );
}
