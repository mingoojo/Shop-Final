import styled from 'styled-components';

const Container = styled.div`
position: absolute;
width: 98vw;
height: 98vh;
overflow: hidden;
text-align: center;
top: 0;
left: 0;
right: 0;
margin: auto;
  .loadingBox{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .loader{
      display: inline-block;
      border: 3px solid white;
      border-radius: 50%;
      border-top: 3px solid #222;
      width: 40px;
      height: 40px;
      -webkit-animation: spin 1s linear infinite;
      animation: spin 1s linear infinite;
    }
    .loadingPara{
      margin-top: 3rem;
    }
  }

  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default function Loading() {
  return (
    <Container>
      <div className="loadingBox">
        <div className="loader" />
        <div className="loadingPara">Loading...</div>
      </div>
    </Container>
  );
}
