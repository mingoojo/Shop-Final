import useProductFormStore from '../../hooks/useProductFormStore';
import Option from './Option';

export default function Options() {
  const [{ options, selectedOptionItems }] = useProductFormStore();
  return (
    <div>
      {
        options.map((option, index) => (
          <Option
            key={option.kind}
            option={option}
            index={index}
            selectedItem={selectedOptionItems[index]}
          />
        ))
      }
    </div>
  );
}
