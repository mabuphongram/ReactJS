import styled, { keyframes } from "styled-components";


//Styled-components supports CSS animations via the keyframes helper, allowing you to create smooth animations directly in your styled components.
const fadeIn = keyframes`
from {
  opacity:0;
}
to {
  opacity:1;
}
`;

const AnimateDiv = styled.div`
animation: ${fadeIn} 3s ease-in;
`;

function App() {
  return(
    <div>
      <AnimateDiv>
        This is animation tutorial
      </AnimateDiv>
    </div>
  )
}
export default App