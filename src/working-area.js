import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <div>Your app content</div>
  </>
);
