import styled from 'styled-components';
import { useBoolean } from 'usehooks-ts';
import useOrderFormStore from '../../hooks/useOrderFormStore';
import InputBundle2 from '../ui/InputBundle2';
import Button from '../ui/Button';
import AddressSearch from './AddressSearch';

const Container = styled.div`
margin-top: 3rem;
display: flex;
justify-content: center;
  .shippingBox{
    width: 500px;
      .postalBox{
        display: flex;
        justify-content: space-between;
        align-items: flex-end
      }
  }
`;

export default function ShippingForm() {
  const {
    value: searching, setTrue: openSearch, setFalse: closeSearch,
  } = useBoolean();

  const [{
    address1, address2, phoneNumber, postalCode, name, valid,
  }, orderFormStore] = useOrderFormStore();

  const handleChangeName = (value:string) => {
    orderFormStore.changeName(value);
  };

  const handleClickSearchPostalCode = () => {
    openSearch();
  };

  const handleChangeAddress1 = (value: {
    address: string;
    postalCode: string;
  }) => {
    orderFormStore.changeAddress1(value.address, value.postalCode);
  };

  const handleChangeAddress2 = (value:string) => {
    orderFormStore.changeAddress2(value);
  };

  const handleChangePhoneNumber = (value:string) => {
    orderFormStore.changePhoneNumber(value);
  };
  return (
    <Container>
      <div className="shippingBox">
        <h3>받는 사람</h3>
        <InputBundle2 label="이름" value={name} placeholder="받는 분 이름" onChange={handleChangeName} />
        <div className="postalBox">
          <InputBundle2 label="우편번호" value={postalCode} readOnly />
          <Button label="우편번호검색" onClick={handleClickSearchPostalCode} />
        </div>
        <InputBundle2 label="주소" value={address1} readOnly />
        <InputBundle2 label="상세주소" value={address2} onChange={handleChangeAddress2} />
        <InputBundle2 label="전화번호" type="tel" value={phoneNumber} onChange={handleChangePhoneNumber} />
      </div>
      {
        searching && <AddressSearch close={closeSearch} changeAddress={handleChangeAddress1} />
      }
    </Container>
  );
}
