import React from "react";
import { Stack } from "react-bootstrap";
import  Container  from "react-bootstrap/Container";

function App() {
  return <Container>
<Stack direction="horizontal" gap={2} className="mb-4">
  <h1 className="me-auto">Budgets</h1>
  <button variant="primary">Add Budget</button>
  <button variant="outline-primary">Add Expense</button>
  
</Stack>
  </Container>
   
}

export default App;
