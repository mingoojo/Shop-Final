import { ProductOption } from '../../types';
import { ChangeFunction } from './Options';

type OptionProps = {
  option : ProductOption
  onChange:ChangeFunction
}

export default function Option({ option, onChange }:OptionProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const Item = (option.items).find((item) => item.name === value);

    if (!Item) {
      return;
    }

    onChange({ optionId: option.id, optionItemId: Item.id });
  };

  return (
    <div>
      <select onChange={handleChange}>
        {
          option.items.map((item) => (
            <option key={item.id} value={`${item.name}`}>
              {item.name}
            </option>
          ))
        }
      </select>
    </div>
  );
}
