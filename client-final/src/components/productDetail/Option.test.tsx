import { fireEvent, screen } from '@testing-library/react';
import fixtures from '../../../fixtures';
import { render } from '../../utils/test-helpers';
import Option from './Option';

const context = describe;

const store = {
  changeSelectedOptionItems: jest.fn(),
};

jest.mock('../../hooks/useProductFormStore', () => () => [store, store]);

describe('Option', () => {
  const [product] = fixtures.products;
  const [option] = product.options;
  const [selectedItem] = option.items;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderOption() {
    render((
      <Option
        option={option}
        selectedItem={selectedItem}
        index={0}
      />
    ));
  }

  it('renders combobox', () => {
    renderOption();

    screen.getByText(option.kind);
    screen.getByRole('combobox');
  });

  context('when selection is changed', () => {
    it('calls “changeSelectedOptionItems” callback', () => {
      renderOption();

      const [, item] = option.items;

      fireEvent.change(screen.getByRole('combobox'), {
        target: { value: item.name },
      });

      expect(store.changeSelectedOptionItems).toBeCalled();
    });
  });
  context('when selection is incorrect', () => {
    it('call “changeSelectedOptionItems” callback', () => {
      renderOption();

      fireEvent.change(screen.getByRole('combobox'), {
        target: { value: 'xxx' },
      });

      expect(store.changeSelectedOptionItems).toBeCalled();
    });
  });
});
