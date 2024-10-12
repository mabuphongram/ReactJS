import styled from "styled-components";

const Button = styled.button`
background-color: blue;
color:white;
font-size:18px;
padding: 10px 20px;
border-radius:5px;
border:none;
cursor:pointer;

&:hover {
  background-color:darkblue;
}
`
function App() {
return(
  <div>
  <Button>Click Me</Button>
  </div>
)
}

export default App