import styled from 'styled-components';
import { Receiver } from '../../types';

type DestinationInfomationProps= {
  receiver: Receiver
}

const Container = styled.div`
padding-block: 1rem;
margin-block: 1rem;
border-bottom: 1px solid #222;
border-top: 1px solid #222;
.destinationHeader{
  h1{
    font-weight: bold;
  }
  margin-bottom: 2rem;
}
  .bodyBox{
    display: flex;
    line-height: 1.5;
    .bodyBoxKey{
      width: 20%;
    }
  }
`;

export default function DestinationInfomation({ receiver }:DestinationInfomationProps) {
  if (receiver.name === '') {
    return (
      <div className="destinationHeader">
        <h1> 배송지 정보 </h1>
        <h2> 배송지 정보가 없습니다. </h2>
      </div>
    );
  }

  return (
    <Container>
      <div className="destinationHeader">
        <h1> 배송지 정보 </h1>
      </div>
      <div className="bodyBox">
        <div className="bodyBoxKey">
          <p>
            수령인
          </p>
          <p>
            주소
          </p>
          <p>
            전화번호
          </p>
        </div>
        <div className="bodyBoxValue">
          <p>
            {receiver.name}
          </p>
          <p>
            {`(${receiver.postalCode}) ${receiver.address1}-${receiver.address2}`}
          </p>
          <p>
            {receiver.phoneNumber}
          </p>
        </div>
      </div>
    </Container>
  );
}
