
const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
`;

const SpecialButton = styled(Button)`
  background-color: green;
  font-weight: bold;
`;

const App = () => (
  <div>
    <Button>Regular Button</Button>
    <SpecialButton>Special Button</SpecialButton>
  </div>
);