import styled from "styled-components";

const Button = styled.button`
background-color:blue;
color:white;
padding:10px;
`

const SpeicalButton = styled(Button)`
background-color: green;
font-weight:bold;
`;

function App(){
  return(
    <div>
      <Button>Regular Button</Button>
      <SpeicalButton> Special Button</SpeicalButton>
    </div>
  )
}

export default App