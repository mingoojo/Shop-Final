import { useBoolean } from 'usehooks-ts';
import styled from 'styled-components';
import useOrderFormStore from '../../hooks/useOrderFormStore';
import InputBundle from '../ui/InputBundle';
import Button from '../ui/Button';
import AddressSearch from '../default/AddressSearchProps';

const Container = styled.div`
  .postalBox{
    display: flex;
    align-items: flex-end
  }
`;

export default function ShippingForm() {
  const { value: searching, setTrue, setFalse } = useBoolean();

  const [{
    address1, address2, phoneNumber, postalCode, name,
  }, orderFormStore] = useOrderFormStore();

  const handleName = (value:string) => { orderFormStore.changeName(value); };

  const handlePostalCode = () => { setTrue(); };

  const handleAddress1 = (value: {
    address: string
    postalCode: string
  }) => {
    orderFormStore.changeAddress1({ address: value.address, postalCode: value.postalCode });
  };

  const handleAddress2 = (value:string) => { orderFormStore.changeAddress2(value); };

  const handlePhoneNumber = (value:string) => orderFormStore.changePhoneNumber(value);

  return (
    <Container>
      <h3>받는사람</h3>
      <InputBundle label="이름" value={name} placeholder="받는 분 이름" onChange={handleName} />
      <div className="postalBox">
        <InputBundle label="우편번호" value={postalCode} readOnly />
        <Button label="우편번호검색" onClick={handlePostalCode} />
      </div>
      <InputBundle label="주소" value={address1} readOnly />
      <InputBundle label="상세주소" value={address2} onChange={handleAddress2} />
      <InputBundle label="전화번호" value={phoneNumber} type="tel" onChange={handlePhoneNumber} />
      {
        searching && <AddressSearch close={setFalse} changeAddress={handleAddress1} />
      }
    </Container>
  );
}
