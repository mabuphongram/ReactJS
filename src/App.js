import styled from "styled-components";

const Button = styled.button`
background-color: ${props => props.primary? 'blue':'gray'};
color: white;
font-size:18px;
padding: 10px 20px;
border-radius:5px;
border:none;
cursor:pointer;

&:hover{
  background-color: ${props=> props.primary? 'darkblue':'darkgray'}
}
`

function App(){
  return(
    <div>
      <Button primary>
        Primary Button
      </Button>
      <Button>
        Default Button
      </Button>
    </div>
  )
}

export default App