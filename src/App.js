import styled, { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: 'blue',
    secondary:'gray',
  },
  spacing:'10px'
}

const Button = styled.button`
background-color:${props=> props.theme.colors.primary};
padding:${props=> props.theme.spacing};
color: white;
`

const Title = styled.h1`
color:${props=>props.theme.colors.secondary}
`

function App() {
  return(
    <ThemeProvider theme={theme}>
      <Title> Welcome to Theme Styling</Title>
      <Button>Styled with Theme</Button>
    </ThemeProvider>
  )
}

export default App