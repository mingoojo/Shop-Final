import { screen } from '@testing-library/react';
import fixtures from '../../../fixtures';
import { render } from '../../utils/test-helpers';
import DestinationInfomation from './DestinationInfomation';

const context = describe;

describe('DestinationInfomation', () => {
  context('when the receiver is exist', () => {
    it('render a text', () => {
      const { receiver } = fixtures;
      render(<DestinationInfomation receiver={receiver} />);

      screen.getByText('배송지 정보');
      screen.getByText(receiver.name);
    });
  });

  context('when the receiver is not exist', () => {
    it('render a text', () => {
      const receiver = {
        name: '',
        address1: '',
        address2: '',
        postalCode: '',
        phoneNumber: '',
      };
      render(<DestinationInfomation receiver={receiver} />);

      screen.getByText('배송지 정보');
      screen.getByText('배송지 정보가 없습니다.');
    });
  });
});
