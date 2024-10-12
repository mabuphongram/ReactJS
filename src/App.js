import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: black;
  color:white;
}
`

function App() {
  return(
    <div>
      <GlobalStyle/>
      <div>Welcome to Global Styling</div>
    </div>
  )
}

export default App